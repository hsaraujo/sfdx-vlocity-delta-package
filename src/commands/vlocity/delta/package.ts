import { flags, SfdxCommand } from '@salesforce/command';
import { AnyJson } from '@salesforce/ts-types';
import { spawnPromise } from '../../../utils'
import * as path from 'path'
import * as fse from 'fs-extra';

export default class Package extends SfdxCommand {

    protected static flagsConfig = {
        // flag with a value (-n, --name=VALUE)
        from: flags.string({
            char: 'f',
            description: 'from commit hash',
        }),
        to: flags.string({
            char: 't',
            description: 'to commit hash',
        }),
        'input-dir': flags.string({
            char: 'i',
            description: 'directory containing datapacks',
        }),
        'output-dir': flags.string({
            char: 'o',
            description: 'output directory for delta',
        }),        
    };

    public async run(): Promise<AnyJson> {

        const diffArgs = ['--no-pager', 'diff', '--name-status', '--no-renames', this.flags.from, this.flags.to, this.flags['input-dir']];
        const diff = await spawnPromise('git', diffArgs, { shell: true });
        const changes = this.getDiff(diff);
        if(changes.length == 0){
            this.exit(0);
            return;
        }

        for(const change of changes){
            const directory = path.dirname(path.join(this.flags['output-dir'], change));
            fse.ensureDirSync(directory);
            fse.copyFileSync(change, path.join(this.flags['output-dir'], change))
        }
    }

    private getDiff(diffOutput: string): string[]{

        const lines = diffOutput.split(/\r?\n/);

        const changes = [];
        for(const line of lines){
            const parts = line.split(`\t`);
            const status = parts[0];
            const path = parts[1];

            if(!path || !path.endsWith('.json')){
                console.log(`skipping: ${path}`)
                continue;
            }

            if(status === 'D'){
                //continue for now - will deal with destructive changes later
                continue;
            }

            changes.push(path);
        }
        return changes;
    }
}