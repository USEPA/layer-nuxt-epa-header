# EPA header and footer Nuxt Layer

## Create a Nuxt Layer

To create a Nuxt layer, you can follow these steps:
Initialize a new layer project using the Nuxt starter template:

```bash
npx nuxi init --template layer nuxt-layer
```

This command will create a basic structure for your Nuxt layer as mentioned in the [Nuxt documentation](https://nuxt.com/docs/guide/going-further/layers#starter-template).

Navigate to the created directory and follow the README instructions for the next steps.
The minimal structure for a Nuxt layer should contain a nuxt.config.ts file:

```bash
export default defineNuxtConfig({})
```

This file indicates that it is a layer as stated in the [Nuxt documentation](https://nuxt.com/docs/guide/going-further/layers).
You can then add other directories and files to your layer, such as:

* components/
  composables/
  layouts/
  pages/
  plugins/
  server/
  utils/

These directories will be auto-scanned and used by Nuxt for the project extending this layer according.

## Distributing your layer

Your Nuxt layer is shaped exactly the same as any other Nuxt project, [except you can publish it on NPM](https://adevait.com/software/publish-private-npm-packages-with-github-package-registry#h-publish-your-package).

If you want to publish your layer as an npm package, ensure your package.json file is properly configured:
There are a couple of scripts (npmlogin, and release) added to help manage the process of creating private github npm packages.

```json {
  "name": "@usepa/ccte-epa-header-footer",
  "version": "1.0.11",
  "description": "Nuxt 3 layer for EPA header and footer with Nuxt 4 opt in",
  "type": "module",
  "main": "./nuxt.config.ts",
  "license": "MIT",
  "scripts": {
    "build": "nuxt build .playground",
    "generate": "nuxt generate .playground",
    "preview": "nuxt preview .playground",
    "lint": "eslint .",
    "npmlogin": "npm login --scope=@usepa --registry=https://npm.pkg.github.com",
    "release": "standard-version && git push --follow-tags && npm publish"
  },
  "devDependencies": {
    "@nuxt/eslint-config": "^0.1.1",
    "eslint": "^8.28.0",
    "nuxt": "^3.14.159",
    "standard-version": "^9.5.0",
  },
  "dependencies": {}
}
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

```bash
yarn install
```

```bash
npm install
```

## Using this layer in a mono repo

To use it this way you will need to create single directory to  git clone the app you want to use this layer with into.

Then clone this repo into the same directory and install it using the package manager of your choice (it was built using yarn 1.22.19)

Add this to the nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: ['../layer-nuxt-epa-header'],
})
```

The in your app add the EpaHeader and EpaFooter wherever you need them (I add them to the layout)

```html
<template>
 <div>
    <EpaHeader />
    <YourHeader />
    Your content….
    <EpaFooter />
 </div>
</template>
```

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save @usepa/ccte-epa-header-footer
```
```bash
yarn add @usepa/ccte-epa-header-footer
```
Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
   extends: ['@usepa/ccte-epa-header-footer'],
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
yarn start
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
