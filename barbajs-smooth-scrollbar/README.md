# barba-starter-template

This project is a starting point for everyone wanting to create beautiful websites with [barba.js](https://github.com/barbajs/barba).

It includes following features and packages:

> Features

- Compile ES6 to ES5 code with [babel](https://github.com/babel/babel) ([plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) and [plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) are enabled).
- Compile your scss/sass to css files with [dart-sass](https://github.com/sass/dart-sass).
- Prefix automatically your style files with [Autoprefixer](https://github.com/postcss/autoprefixer).
- Lint your style and code files with [stylelint](https://github.com/stylelint/stylelint) and [eslint](https://github.com/eslint/eslint). (Only as a hint for your IDE. There is no "lint" script to use.)
- Watch for changes in your js and css files with [webpack](https://github.com/webpack/webpack) and compile them on the fly, or create a production ready build.

> Packages

- [barba.js](https://github.com/barbajs/barba)
- [bootstrap](https://github.com/twbs/bootstrap)
- [jquery](https://github.com/jquery/jquery) (Is included because it is a dependency of bootstrap.js features (Tabs, Tooltip...). If you don't plan to use them, you can uninstall it.)
- [popper.js](https://github.com/FezVrasta/popper.js) (Included for the same reason as jquery)

## Usage

Installation:

```
git clone https://github.com/mrsamse/barba-starter-template.git
cd barba-starter-template 
npm install
```

Watch for changes in your style & code files:

```
npm run dev
```

Create a production ready build:

```
npm run build
```

---

## Note
This project has been intentionally kept very simple and maybe a bit "old-schoolish". For example it doesn't include a server which reloads when changes are made, because most of the time I work with a MAMP server on my computer and like to reload on my own :-D.

If you have issues or questions, open an issue here on Github or make a pull request.