# Podrida

## Starting the app

To get the app running locally, clone this repo then

```
yarn
yarn start
```

### CORS

While in development, you can use this chrome extension https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US to get the data without triggering a CORS MissingAllowOriginHeader. In a real world situation we'd set up a proxy.

### Storybook

You can also view the components seperately by running
```
yarn storybook

```

## Testing

### Visual Regression Testing

You can check got visual regression with [BackstopJS](https://github.com/garris/BackstopJS). To do this first have storybook running and then run
```
yarn backstop:test
```
This will show you whether there have been any changes since the last snapshot was taken. New scenarios can be added in the backstop.json file. If you want to approve new snapshots/changes snapshots run
```
yarn backstop:approve
```

## Project setup

This project was bootstrapped with [Create React App](docs/createReactApp.md).