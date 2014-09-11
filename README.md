# [lil](http://lil-js.github.io)'-uuid [![Build Status](https://api.travis-ci.org/lil-js/http.svg?branch=master)][travis] [![Stories in Ready](https://badge.waffle.io/lil-js/http.png?label=ready&title=Ready)](https://waffle.io/lil-js/http) [![Code Climate](https://codeclimate.com/github/lil-js/uri/badges/gpa.svg)](https://codeclimate.com/github/lil-js/http) [![Gitter chat](https://badges.gitter.im/lil-js/http.png)](https://gitter.im/lil-js/http)

<img align="center" height="150" src="http://lil-js.github.io/img/liljs-logo.png" />

UUID v4 generator

<table>
<tr>
<td><b>Name</b></td><td>uuid</td>
</tr>
<tr>
<td><b>Version</b></td><td>0.1.0</td>
</tr>
<tr>
<td><b>Size</b></td><td>1 KB / >1 KB (gzipped)</td>
</tr>
<tr>
<td><b>Environment</b></td><td>Browser, Node.js</td>
</tr>
</table>

## Installation

Via [Bower](http://bower.io)
```bash
bower install lil-uuid
```
Via [Component](https://github.com/componentjs/component)
```bash
component install lil-js/uuid
```

Or loading the script remotely
```html
<script src="//cdn.rawgit.com/lil-js/uuid/0.1.0/uuid.js"></script>
```

### Environments

- Node.js
- Chrome >= 5
- Firefox >= 3
- Safari >= 5
- Opera >= 10
- IE >= 9

### Usage

You could fetch de module via `require()` if it's available.
Otherwise, global fallback will be used, exposed via `lil.uuid`

##### Sample GET request
```js
lil.uuid()
// -> f47ac10b-58cc-4372-a567-0e02b2c3d479
```
## API

#### uuid()
Return: `string`

Generator a random UUID

#### http.VERSION

## Contributing

Wanna help? Cool! It will be appreciated :)

You must add new test cases for any new feature or refactor you do,
always following the same design/code patterns that already exist

### Development

Only [node.js](http://nodejs.org) is required for development

Clone the repository
```bash
$ git clone https://github.com/lil-js/http.git && cd http
```

Install dependencies
```bash
$ npm install
```

Generate browser bundle source
```bash
$ make browser
```

Run tests
```bash
$ make test
```

## License

[MIT](http://opensource.org/licenses/MIT) © Tomas Aparicio

[withcredentials]: https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS#Requests_with_credentials
[travis]: http://travis-ci.org/lil-js/http
