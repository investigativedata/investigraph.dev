# React Starter

A minimal starting point for interactive applications or one-pagers.

The starterkit is based on these libraries:

- [react](https://react.dev/)
- [joy-ui](https://mui.com/joy-ui/getting-started/)
- [emotion](https://emotion.sh/docs/styled)

It is based on [a react starter by wbkd](https://github.com/wbkd/react-starter)

## Getting started

**[Create a new Github repository with the template](https://github.com/investigativedata/joy-starter/generate)** or clone the repo:

```sh
git clone git@github.com:investigativedata/joy-starter.git && cd joy-starter
```

then install the dependencies via [npm](https://npmjs.org):

```sh
npm install
```

you are now ready to develop your app.

## Development

Builds the application and starts a webserver with hot loading.
Runs on [localhost:8080](http://localhost:8080/)

```sh
npm run start
```

## Build

Builds a minified version of the application in the build folder.

```sh
npm run build
```

Additionally, a zipped version of the bundle is added as `build.zip`. We often use this for our clients to upload the application to their own servers.
