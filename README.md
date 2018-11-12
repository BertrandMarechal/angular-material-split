# angular-material-split

This is an example app to test angular V7, along with [angular-split](https://www.npmjs.com/package/angular-split).

It seems that there is a conflict between Angular Material and angular-split, as the [simple split example](https://bertrandg.github.io/angular-split/#/examples/simple-split) is not showing correctly.

[An issue](https://github.com/bertrandg/angular-split/issues/123) has been opened on GitHub to try and figure out why.

## Run the example

- Clone this repo

```cmd
git clone https://github.com/BertrandMarechal/angular-material-split
```

- Navigate to the "frontend" folder
- Install the necessary packages

```cmd
npm install
```

- Launch the app

```cmd
ng serve --open
```

## Issues

- In orientation = vertical, the gutter does not move (the properties get updated on the element, but the rendered html does not move)
- In orientation = horizontal, the gutter has a 0 height, and when manually set to 100px for instance it gets usable