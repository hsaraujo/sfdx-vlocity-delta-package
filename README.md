sfdx-vlocity-delta-package
==========================

Delta packager for vlocity

[![Version](https://img.shields.io/npm/v/sfdx-vlocity-delta-package.svg)](https://npmjs.org/package/sfdx-vlocity-delta-package)
[![CircleCI](https://circleci.com/gh/hsaraujo/sfdx-vlocity-delta-package/tree/master.svg?style=shield)](https://circleci.com/gh/hsaraujo/sfdx-vlocity-delta-package/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/hsaraujo/sfdx-vlocity-delta-package?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/sfdx-vlocity-delta-package/branch/master)
[![Greenkeeper](https://badges.greenkeeper.io/hsaraujo/sfdx-vlocity-delta-package.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/hsaraujo/sfdx-vlocity-delta-package/badge.svg)](https://snyk.io/test/github/hsaraujo/sfdx-vlocity-delta-package)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-vlocity-delta-package.svg)](https://npmjs.org/package/sfdx-vlocity-delta-package)
[![License](https://img.shields.io/npm/l/sfdx-vlocity-delta-package.svg)](https://github.com/hsaraujo/sfdx-vlocity-delta-package/blob/master/package.json)

<!-- toc -->
* [Debugging your plugin](#debugging-your-plugin)
<!-- tocstop -->
<!-- install -->
<!-- usage -->
```sh-session
$ npm install -g sfdx-vlocity-delta-package
$ sfdx COMMAND
running command...
$ sfdx (--version)
sfdx-vlocity-delta-package/0.0.1 darwin-arm64 node-v18.8.0
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx vlocity:delta:package [-f <string>] [-t <string>] [-i <string>] [-o <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-vlocitydeltapackage--f-string--t-string--i-string--o-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx vlocity:delta:package [-f <string>] [-t <string>] [-i <string>] [-o <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

```
USAGE
  $ sfdx vlocity:delta:package [-f <string>] [-t <string>] [-i <string>] [-o <string>] [--json] [--loglevel
    trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

FLAGS
  -f, --from=<value>                                                                from commit hash
  -i, --input-dir=<value>                                                           directory containing datapacks
  -o, --output-dir=<value>                                                          output directory for delta
  -t, --to=<value>                                                                  to commit hash
  --json                                                                            format output as json
  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation
```

_See code: [src/commands/vlocity/delta/package.ts](https://github.com/hsaraujo/sfdx-vlocity-delta-package/blob/v0.0.1/src/commands/vlocity/delta/package.ts)_
<!-- commandsstop -->
<!-- debugging-your-plugin -->
# Debugging your plugin
We recommend using the Visual Studio Code (VS Code) IDE for your plugin development. Included in the `.vscode` directory of this plugin is a `launch.json` config file, which allows you to attach a debugger to the node process when running your commands.

To debug the `hello:org` command: 
1. Start the inspector
  
If you linked your plugin to the sfdx cli, call your command with the `dev-suspend` switch: 
```sh-session
$ sfdx hello:org -u myOrg@example.com --dev-suspend
```
  
Alternatively, to call your command using the `bin/run` script, set the `NODE_OPTIONS` environment variable to `--inspect-brk` when starting the debugger:
```sh-session
$ NODE_OPTIONS=--inspect-brk bin/run hello:org -u myOrg@example.com
```

2. Set some breakpoints in your command code
3. Click on the Debug icon in the Activity Bar on the side of VS Code to open up the Debug view.
4. In the upper left hand corner of VS Code, verify that the "Attach to Remote" launch configuration has been chosen.
5. Hit the green play button to the left of the "Attach to Remote" launch configuration window. The debugger should now be suspended on the first line of the program. 
6. Hit the green play button at the top middle of VS Code (this play button will be to the right of the play button that you clicked in step #5).
<br><img src=".images/vscodeScreenshot.png" width="480" height="278"><br>
Congrats, you are debugging!
