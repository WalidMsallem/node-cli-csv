node-cli-csv
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/node-cli-csv.svg)](https://npmjs.org/package/node-cli-csv)
[![Downloads/week](https://img.shields.io/npm/dw/node-cli-csv.svg)](https://npmjs.org/package/node-cli-csv)
[![License](https://img.shields.io/npm/l/node-cli-csv.svg)](https://github.com/WalidMsallem/node-cli-csv/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Quick start

2.  Clone this repo using `git clone git@github.com:WalidMsallem/` 
3.  Move to the appropriate directory: `cd repo`.
 
4.  Run `npm run install` in order to install all dependencies. 
````
$ 
````
5. 
````
$ npm start
````
 
 _At this point the frontend will run under `http://localhost:4000`._
 
# Quick Demo
   After defining all the dependencies, you can now execute the command : 
   ````
$ ./bin/run transform-string
`````
or 
   ````
$ node-cli-csv transform-string
`````
A message will appear "Enter your your sentence here:", then you enter a text.
You will see an output of 
 ````
$ Your text in capital letters
$ Your text on alternating upper and lower case
$ A msg : CSV created!
`````
Check your root directory and you will find a csv file in your text.

# Usage
<!-- usage -->
```sh-session
$ npm install -g node-cli-csv
$ node-cli-csv COMMAND
running command...
$ node-cli-csv (-v|--version|version)
node-cli-csv/0.0.0 darwin-x64 node-v12.19.0
$ node-cli-csv --help [COMMAND]
USAGE
  $ node-cli-csv COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`node-cli-csv hello`](#node-cli-csv-hello)
* [`node-cli-csv help [COMMAND]`](#node-cli-csv-help-command)
* [`node-cli-csv transform-string`](#node-cli-csv-transform-string)

## `node-cli-csv transform-string`

Describe the command here

```
USAGE
  $ node-cli-csv transform-string

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/transform-string.js](https://github.com/WalidMsallem/node-cli-csv/blob/v0.0.0/src/commands/transform-string.js)_
<!-- commandsstop -->

 ## `node-cli-csv help [COMMAND]`

display help for node-cli-csv

```
USAGE
  $ node-cli-csv help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.6/src/commands/help.ts)_


