# React-transactions-manager

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## :octopus: Getting Started

This project was made focusing on the flat architecture for high scalable projects. The App itself is small but is 100% ready to get as big as possible

:heavy_check_mark: Styled-Components

:heavy_check_mark: Dynamic Routes

:heavy_check_mark: LocalStorage to save your recent transactions even when the browser is closed

:heavy_check_mark: Responsive SPA (Minimum resolution: 450px)

:heavy_check_mark: React@16

:heavy_check_mark: High Scale Svg Icons Workflow

:heavy_check_mark: Cross-Browser Solution! (even for MS Edge)

Made with :heart: and Redux-zero.

## :cloud: Installation

Makefiles aren't Windows friendly, if you have minGW64 and whole environment to run the makefile(Unix/macOS) do this:

```sh
make installation
make start
access http://localhost:3000/dashboard
```

If you **don't** have makefile enviroment ready, do this instead :

```sh

npm install or yarn install
npm run start
access http://localhost:3000/dashboard
```

**Requires node >= 8.9.3**

## Why Redux-zero as a state manager?

[Redux-zero](https://github.com/redux-zero/redux-zero) is a lightweight state container based on Redux.
I would like to share 3 arguments to choose redux-zero over redux.

1. Is lighter(less than 1kb) than redux and in projects that are not necessarily high usage of reducers, it helps to focus on what is important.
2. I participated in the conception of this lib, made mostly by an ex-coworker.
3. I'm currently focusing my career in leadership and share knowledge that I've learned across these years, so would be
   an honor gives a presentation about this amazing library.

More about Redux-zero [here](https://medium.com/@matheusml/introducing-redux-zero-bea42214c7ee)

## Tests?

As required in the challenge the focus was in the UI itself and the 3 Features, to make things easier and to avoid unnecessary work wasn't made any kind of unit tests in this project, just a few snapshots tests, but after that, I decided to remove the jest environment.

**Basically, the manual tests made in this project was about the user filling each input if the user didn't fill all fields the transaction will not be created**


## :pound: AvailableBalance Feature 

1. The money will be withdrawn when you choose the type of transaction `debit` if you choose `credit` instead  the money will credited to your account.

2. The application allows negative amount of money.

## Roadmap

**Release 0.1** (current) - First release of the app

**Release 0.2** - Unit, e2e tests and more accurate validation according project Definition of Done

**Release 0.3** - Improvements in mobile devices resolutions

**Release 0.4** - Improvements in UX and transistions

## :exclamation: Credits

Yuri Ramos

## :scroll: License

MIT

## Contributing 

Want to help? Submit a PR named `Feat/MyFeature` or `Fix/MyFix`, and create DECISIONS.MD explaining your technical solutions
