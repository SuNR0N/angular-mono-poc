# angular-mono-poc

## Structure

```sh
apps # applications
  |-- foo # foo application (package name: @amp/foo)
  |-- bar # bar application (package name: @amp/bar)
libs # libraries
  |-- foobar # foobar library (package name: @amp/foobar)
```

## Scripts

```sh
# Build the bar application into the dist directory
yarn build:bar

# Build the foo application into the dist directory
yarn build:foo

# Build the foobar  library into the dist directory
yarn build:foobar

# Start the foo application
yarn start:foo

# Start the bar application
yarn start:bar

# Build the foobar library into the dist directory in watch mode
yarn watch:foobar
```

## Run application

```sh
# Install dependencies and compile library
yarn

# Start application
yarn start:[foo|bar]
```

## Run application and keep watching library changes

```sh
# Install dependencies and compile library
yarn

# Build the library in watch mode in a terminal window
yarn watch:foobar

# Start application in an other terminal window
yarn start:[foo|bar]
```

## How To

### Use a local library within an application

1. Install the dependency using _lerna_ from the root directory

```sh
yarn lerna add @amp/foobar --scope=@amp/foo
```
  
2. Add paths mappings to the `tsconfig.json` file of the `foo` application:

```json
{
  "compilerOptions": {
    "paths": {
      "@amp/foobar": [
        "../../dist/@amp/foobar"
      ]
    }
  }
}
```

3. Import the exported members of your library within your application

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoobarModule } from '@amp/foobar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FoobarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```