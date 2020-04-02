# Working demo - Angular Google Maps component 

An Angular 9 project generated with [Angular CLI](https://github.com/angular/angular-cli) version *9.1.0*.

# Issues
* Only `@angular/google-maps@9.1.3` works due to https://github.com/angular/components/issues/18965 .

* Angular 8.x did not work due to issues with Types definition files which comes with Google Maps component. They require a newer version of TS, which is not supported yet by Angular 8.x. https://github.com/storybookjs/storybook/issues/9463


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
