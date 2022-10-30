![image](https://user-images.githubusercontent.com/3481514/198889796-13886fe4-bc9b-4b08-80eb-ab54bd58d383.png)


## 🔦 About

This monorepo is a starter for an Expo + Next.js app using [Expo Router](https://expo.github.io/router/) with a design system package using react-native-web storybook.

Do note that Expo Router was announced recently (28 Sep 2022) as an **early beta** - full announcement by Evan Bacon from Expo [here](https://blog.expo.dev/rfc-file-system-based-routing-in-react-native-7a35474722a).

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- `dripsy` for theming/design (you can bring your own, too)
- `@storybook/addon-react-native-web`
- Expo SDK 46
- Next.js 12
- React Navigation 6

## 🗂 Folder layout

- `apps` entry points for each app

  - `expo`
    -  `app` you'll be creating files inside of `apps/expo/app` to use file system routing on iOS and Android.
  - `next`

- `packages` shared packages across apps
  - `design-system` a design system using storybook to showcase components
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)


## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev: `yarn native`
  - Runs `expo start`
- storybook local dev: `yarn storybook`
  - Runs `yarn storybook` in design-system

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

## 🎙 About the creator

Follow Fernando Rojo on Twitter: [@FernandoTheRojo](https://twitter.com/fernandotherojo)

Storybook added by daniel williams [@Danny_H_W](https://twitter.com/Danny_H_W)

About react native web storybook: https://www.dannyhwilliams.co.uk/introducing-react-native-web-storybook
