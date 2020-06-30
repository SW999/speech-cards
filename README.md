# Simple speech cards
![Simple speech cards](https://user-images.githubusercontent.com/3176886/84038222-58584080-a9a8-11ea-89a5-38c494fe2b32.jpg)

<a href="https://github.com/sw999/speech-cards/blob/master/LICENSE.md"><img src="https://img.shields.io/github/license/sw999/speech-cards.svg?style=flat-square" alt="License"></a> <a href="https://github.com/SW999/random-number/tags"><img src="https://img.shields.io/github/v/tag/sw999/speech-cards.svg?sort=semver&style=flat-square" alt="Version"></a> ![GitHub last commit](https://img.shields.io/github/last-commit/sw999/speech-cards.svg?style=flat-square)

<img align="right" width="200" height="200" alt="QR Code link for mobile" src="https://github.com/SW999/speech-cards/raw/master/src/img/qr.png">

## Problem

Many people, like me, experience anxiety or even fear when preparing for public speaking or interview. The reasons can be different and there are many ways to defeat such a fear.

Moreover, I noticed that from excitement I can forget part of the speech that I had learned and practised well before.

There are many simple techniques to deal with this problem. The easiest way is to prepare cards with a sequence of words or phrases that correspond to the particular sections of the speech. **Speech cards**.


## How it works?
After you have prepared well your **public speech** or **interview**, you may need a little helper in order not to lose the thread and be more confident.

You may prepare such helper in some pieces of paper by pen **or** using [this simple app](https://sw999.github.io/speech-cards/). In the latter case, **your mobile phone will be your assistant!**

To do this you need create a **new speech** or **interview** and save it.
Now it will be available in 2 versions: in the "**My speeches**" section from the browser local storage and as a separate file with the **JSON** extension.

## Advantages:

- Could be easily used on a mobile device to create, store and use speech cards.
- No way to lose or forget your speech cards, because your mobile device is always with you. Am I right?
- You may easily share prepared speech cards in JSON format with someone or to open it in a different device.

## Tips:

- Each card should be as simple as possible,
- Should contain short clear heading,
- Should contain main idea/ideas of current part of speech.

## Technology Stack
* Parcel web application bundler
* React with TypeScript
* Form validation with [react-hook-form](https://github.com/react-hook-form/react-hook-form)
* SASS
* Tests via Jest and @testing-library/react

## License

MIT © Siarhei Vaitehovich

## TODO:

- [x] Add tests
- [x] Add form validation
- [ ] Add color themes(?)
- [x] Add edit mode for an existed speech
- [x] Add a QR code to start page only for desktop
- [x] Add confirmation modal
