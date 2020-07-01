- [ABOUT PROJECT](#about-project)
  * [Features](#features)
  * [Browser Support](#browser-support)
  * [Support and Contributing](#support-and-contributing)
  * [Contributors](#contributors)
- [GETTING STARTED](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
    + [Clone or download the Git Repo](#clone-or-download-the-git-repo)
    + [Install dependencies](#install-dependencies)
    + [Run the development server](#run-the-development-server)
  * [Commands](#commands)
    + [Development Server](#development-server)
    + [Production Server](#production-server)
    + [Build for Production](#build-for-production)
    + [Remove Production Folder](#remove-production-folder)
    + [Code Linting](#code-linting)
      - [For Javascript](#for-javascript)
      - [For CSS](#for-css)
  * [Generators](#generators)
    + [Styles and Script Tags](#styles-and-script-tags)
    + [Meta Tags](#meta-tags)
    + [Favicon Generation](#favicon-generation)
- [USAGE GUIDE](#usage-guide)
  * [HTML](#html)
    + [Default Template](#default-template)
  * [CSS](#css)
    + [Working with Images](#working-with-images)
    + [Source Maps](#source-maps)
    + [Structuring your CSS](#structuring-your-css)
        * [How to structure a Sass project](#how-to-structure-a-sass-project)
  * [JavaScript](#javascript)
    + [Writing ES6](#writing-es6)
    + [Source Maps](#source-maps-1)
  * [Everything Else](#everything-else)
    + [.gitignore](#gitignore)
    + [.gitattributes](#gitattributes)
    + [.editorconfig](#editorconfig)
    + [.eslintrc.js](#eslintrcjs)
    + [.stylelintrc.js](#stylelintrcjs)
    + [.prettierrc.js](#prettierrcjs)
    + [.prettierignore](#prettierignore)
- [ADVANCED USAGE](#advanced-usage)
  * [Configuration Variables](#configuration-variables)
  * [Webpack Configuration](#webpack-configuration)
  
# ABOUT PROJECT

This project includes automated build processes, a local development server, production minification and optimizations, and the latest standards for static websites.

## Features

- Modern Technologies: Full support for HTML5, JavaScript (Vanilla and ES6) and CSS (Sass and PostCSS)
- Built-in Server: Local development server with hot reloading
- Performance Tuning: CSS and JavaScript transpilation, bundling, autoprefixing, and minification
- Image Optimization: Optimizes images for loading speed
- Favicon Generation: Automatically generates all favicons for Web, Apple and Android devices from one image file
- Code Linting: Full support for JavaScript (ESLint) and CSS (StyleLint) linting
- Cutting Edge: Uses Webpack for processing and bundling your code

## Browser Support

- Chrome (latest 2)
- Edge (latest 2)
- Firefox (latest 2)
- Internet Explorer 9+
- Opera (latest 2)
- Safari (latest 2)

> This is fully dependent on your code and doesn’t mean that project won’t work in older browsers, just that we’ll ensure compatibility with the ones mentioned above.

## Support and Contributing

Anyone is welcome to contribute. If you decide to get involved, please take a moment and check out the following:

- [Bug reports]
- [Feature requests]

## Contributors

Thanks goes to these wonderful people:

[<img alt="barisigman" src="https://avatars2.githubusercontent.com/u/23339935?v=4&s=117 width=117" width="80">](https://github.com/barisigman) |[<img alt="ozaneser" src="https://avatars3.githubusercontent.com/u/46191074?v=4&s=117 width=117" width="80">](https://github.com/ozaneser) |[<img alt="MusaMeric" src="https://avatars1.githubusercontent.com/u/67575507?v=4&s=117 width=117" width="80">](https://github.com/MusaMeric) |
:---:|:---:|:---:|
[barisigman](https://github.com/barisigman)|[ozaneser](https://github.com/ozaneser)|[MusaMeric](https://github.com/MusaMeric)|

# GETTING STARTED

## Prerequisites

We assume that you have the following software packages installed on your machine:

- [NodeJs]
- [NPM]
- [Git]

## Installation

### Clone or download the Git Repo

```bash
git clone https://github.com/ozaneser/Software-Test-Automation-Blog.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run start
```

> Upon running the above command, your default web browser should open and navigate to [http://localhost:8000]

## Commands

### Development Server

To run the local development server:

```bash
npm run start
```

### Production Server

To run the local production server:

```bash
npm run start:dist
```

### Build for Production

To build a production-ready version of your website, run the following command in your project’s root directory:

```bash
npm run build:dist
```

> To deploy, copy the entire contents of dist/ into your web server.

### Remove Production Folder

To remove a production-ready version of your website, run the following command in your project’s root directory:

```bash
npm run dist:remove
```

### Code Linting

Your code will be linted each time your code is modifying when running the local development server or upon building for production. You can run the standalone linters with the commands below:

#### For Javascript

```bash
npm run lint:js
```

#### For CSS

```bash
npm run lint:styles
```

## Generators

### Styles and Script Tags

All CSS and JavaScript link tags will be automatically generated and appended to your HTML pages.

### Meta Tags

The following meta tag will be automatically inserted into your HTML pages:

```html
<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1">
```

### Favicon Generation

Favicons will automatically be generated from a single source file for the following platforms:

- Web
- Apple Icons
- Android Icons

Their associated meta tags will be automatically inserted into your HTML pages

By default, config expects your favicon source file to be located at /src/assets/favicon.png. The name and location of this file can be changed by updating the favicon config variable in the config/site.config.js file. A 512x512px image file is recommended.

# USAGE GUIDE

## HTML

By default, repository includes a single html page:

- [index.html] - the default page that acts as your website’s homepage

You may add as many html pages as you’d like to the root level directory, they will automatically be copied and minified into the dist/ folder upon building your site.

### Default Template

A typical HTML template would look like the following. No additional code is needed, everything else (scripts/style links, meta tags, etc…) will be automatically added as part of the development or production build process.

```html
<!DOCTYPE html>
<html lang="tr-TR">
<head>
    <meta charset="UTF-8">
    <title>Simple Blog</title>
    <meta name="description" content="" />
</head>
<body>

</body>
</html>
```

## CSS

Repository supports [Saas] for writing your CSS styles. The main stylesheet located in the src/styles/ directory is:

- [main.scss] - By default, no styles are included as this repository makes no assumptions as to how you should write your CSS. However, it’s highly recommended you conform to Sass best practices when writing and importing your additional styles.

> Easily create additional `.scss` stylesheets and import them into the main `main.scss` file to ensure they are processed when building your site.

### Working with Images

When importing images in your `.scss` files, the file path must be specified relative to the src directory structure. A correct example would be:

```scss
background: url('../images/background.png');
```

### Source Maps

Source maps will be generated for debugging when running the local development server.

### Structuring your CSS

For best practices on a file structure for your CSS, refer to the article below:

##### How to structure a Sass project

[http://thesassway.com/beginner/how-to-structure-a-sass-project]

## JavaScript

Repository includes a single JavaScript file located in the src/jscripts/ directory:

- [main.js] - By default, no JavaScript code is included as this repository makes no assumptions as to how you should write your JavaScript.

### Writing ES6

Repository fully supports [ES6] JavaScript.

### Source Maps

Source maps will be generated for debugging when running the local development server.

## Everything Else

### .gitignore

Repository includes a project-level `.gitignore`. This is primarily used to avoid certain project-level files and directories from being included in source control.

### .gitattributes

`.gitattribes` is used to help Git understand the file contents to better diff/render it. Used for merge resolution strategy (default, union etc.) as well.

### .editorconfig

The `.editorconfig` file is provided in order to encourage and help you and your team define and maintain consistent coding styles between different editors and IDEs.

By default, `.editorconfig` includes some [basic properties] that reflect the coding styles from the files provided by default, but you can easily change them to better suit your needs.

### .eslintrc.js

Repository includes a project-level `.eslintrc.js` and uses `airbnb-base` configuration. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### .stylelintrc.js

Repository includes a project-level `.stylelintrc.js` and uses `stylelint-config-standard` configuration. Stylelint is a tool that reports bad code in your CSS files. It helps to enforce the consistent code and prevents you from making errors in your stylesheets.

### .prettierrc.js

Repository includes a project-level `.prettierrc.js` configuration. Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### .prettierignore

Repository includes a project-level `.prettierignore`. This is primarily used to exclude markdown files from formatting.

# ADVANCED USAGE

## Configuration Variables

Within the [config/site.config.js], the following variables are configurable:

```js
const config = {
  // The viewport meta tag added to your HTML page's <head> tag
  viewport: 'width=device-width,initial-scale=1',

  // Your website's description, used for favicon meta tags
  site_description: 'Software test automation blog',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/assets/favicon.png'),

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: process.env.PORT || 8000,

  ...
};
```

## Webpack Configuration

Repository includes [config/webpack.config.js], you can configure config file your needings.

[Bug reports]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/.github/ISSUE_TEMPLATE/bug_report.md>
[Feature requests]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/.github/ISSUE_TEMPLATE/feature_request.md>
[NodeJs]: <https://nodejs.org>
[NPM]: <https://www.npmjs.com>
[Git]: <https://git-scm.com>
[http://localhost:8000]: <http://localhost:8000>
[index.html]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/src/index.html>
[Saas]: <https://sass-lang.com>
[main.scss]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/src/styles/main.scss>
[http://thesassway.com/beginner/how-to-structure-a-sass-project]: <http://thesassway.com/beginner/how-to-structure-a-sass-project>
[main.js]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/src/scripts/main.js>
[ES6]: <http://es6-features.org/#Constants>
[basic properties]: <https://editorconfig.org/#supported-properties>
[config/site.config.js]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/config/site.config.js>
[config/webpack.config.js]: <https://github.com/ozaneser/Software-Test-Automation-Blog/blob/master/config/webpack.config.js>
