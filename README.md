# EPA header and footer Nuxt Layer 

Create Nuxt extendable layer with this GitHub template.

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

To use it this way you will need to create single directory to  git clone the app you want to use the header and footer with into.

Then clone this repo into the same directory and install it using the package manager of your choice (it was built using yarn 1.22.19)

Add this to the nuxt.config.ts
```ts
export default defineNuxtConfig({
  extends: ['../layer-nuxt-epa-header'],
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
## Distributing your layer

Your Nuxt layer is shaped exactly the same as any other Nuxt project, except you can publish it on NPM.

To do so, you only have to check if `files` in `package.json` are valid, then run:

```bash
npm publish --access public
```

Once done, your users will only have to run:

```bash
npm install --save your-theme
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: 'your-theme'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
