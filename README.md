# Sprint 2.2 IT Academy | Shop

## Description

A basic e-commerce exercise base on [this instrucccions](https://github.com/IT-Academy-BCN/starter-code-frontend-shop/blob/main/README.md)

Dividing functions into modules. Each module has a single responsibility.
Like any e-commerce, you could add products to the shopping cart, apply discounts, remove products, etc.

### Some decisions

-   Use Vite as a development tool.
-   Refactor the base project structure to split JavaScript files into modules.
-   Removed Bootstrap as a CDN link. Added as a package and then import the just the styles I need.
-   Use event listeners to manipulate the DOM.
-   Use RegEx to validate form inputs.

## Technologies

-   JavaScript.
-   Bootstrap.
-   Vite.

## Requirements

-   Node.js v23.9.0
-   npm v11.2.0

## Documentation

### Installation

1. Clone this repo

```bash
$ git clone git@github.com:antoniofelices/starter-code-frontend-shop.git .
```

2. Install packages

```bash
$ npm install
```

3. Run develop
   You'll see many of deprecations, it's a Bootstrap problem… sorry about that :S

```bash
$ npm run dev
```

4. Open the browser

## Future Improvements

-   Refact removeProductFromCart to implement disconts.
-   Improve styles. Customise design and behaviour.
-   Write and implement tests... please!
-   Remove HTML strings in JavaScript. File printProductOnCart.

## Contributing

### Pictures Credits

-   <a href="https://unsplash.com/es/@momostudioofficial?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">MOMO Studio</a>

### Code of Conduct

Studio Moare has adopted the Contributor Covenant Code of Conduct that we expect project participants to adhere to. [Please read the full text](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) so that you can understand what actions will and will not be tolerated.
