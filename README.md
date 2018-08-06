[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Build Status](https://travis-ci.org/rdlabo/ionic-ad.svg?branch=master)](https://travis-ci.org/rdlabo/ionic-sub)
[![npm version](https://badge.fury.io/js/%40rdlabo%2Fionic-pj.svg)](https://badge.fury.io/js/%40rdlabo%2Fionic-pj)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

# ionic-sub
This is private command line interface (CLI) for support Ionic CLI. 
This CLI will support for developing Ionic apps.

## Install
```bash
$ npm i @rdlabo/ionic-sub -g
```

- The corresponding version of nodejs is version 8 or higher!

## Usage

Just run the command!

```bash
$ ionic-sub set lint
$ ionic-sub set prettier
```

### set lint

Support Ionic v3. v3's default ts-lint is simple. so support development a little. This command re-write ts-lint base of Angular 6. and modifying Ionic v3 develop easier.

- npm install codelyzer --save-dev
- re-write ./tslint.json

### set prettier

Support Ionic v3. import prettier and auto set pre-commit.

- npm install prettier @kaizenplatform/prettier-config pre-commit --save-dev
- add prettier.config.js
- add package.json script 'prettier' and 'pre-commit'


## License
[MIT](https://github.com/k-kuwahara/ja-greetings/blob/master/LICENSE)


## Others
I'm waiting for you at any time, including code reviews, bug reports, feature additions, questions and more!
