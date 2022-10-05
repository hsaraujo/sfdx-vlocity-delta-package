import { spawn, SpawnOptions } from 'child_process';

export function spawnPromise(cmd: string, args: string[], options?: SpawnOptions) {
    return new Promise<string>((res, reject) => {
      const diffProcess = spawn(cmd, args, options);
      let stdo = '';
      let err = '';
      diffProcess.stdout.on('data', d => stdo += d.toString());
  
      diffProcess.stderr.on('data', d => err += d.toString());
  
      diffProcess.on('exit', code => {
        if (code === 0) {
          return res(stdo);
        }
        reject(err);
      });
    });
  }