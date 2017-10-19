# letter-changer [![Build Status](https://travis-ci.org/jt3k/letter-changer.svg?branch=master)](https://travis-ci.org/jt3k/letter-changer)

> Replaces Russian letters for similar English for Russian car numbers

![](https://i.imgur.com/WWpvqQe.png)

## Install

```bash
$ ### not now ### npm install --save letter-changer
```


## Usage

```js
const letterChanger = require('letter-changer');

letterChanger('ЗДРАВСТВУЙ МИР');
//=> 'ЗДPABCTBYЙ MИP'
```


## API

### letterChanger(input)

#### input

Type: `string`

Russian car number

## License

MIT © [Andrey Gurtovoy](https://github.com/jt3k)
