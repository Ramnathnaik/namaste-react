# Igniting our App

Note: npm <b>does not</b> stand for node package manager.

1. npm init - start a npm package
2. package.json - configuration for npm

Now we are going to install a bundler called "parcel" which helps us to bundle the app and optimize it.

- npm install -D parcel

Note: There are 2 types of dependencies:

1. Normal dependency - It would be used inside production as well.
2. Dev Dependency - It will be used only in development.

Note: To make a package as dev dependency use -D option while installing it.

### Difference between ^ and ~

^ ==> Only minor version upgradation will be done.
~ ==> Major version upgradation will be done.

### package-lock.json

Keeps track of extact version.

### Transitive dependency

One dependency will be dependent on other dependency

### .gitignore

If we want to ignore few files and folders from git commit.

Note: From package.json & package-lock.json we can generate the node_modules folder.

### Build the app

- > npx parcel index.html
- npx helps to execute a package

Note: cdn is not a good way of creating react app
Reason 1: Costly operation
Reason 2: Manage dependency is hectic

### Install react and react-dom

- > npm i react
- > npm i react-dom

Note: Normal browser script files cannot have import or export. Need to make it has a module.

```html
<script type="module" src="./app.js"></script>
```

### What does parcel do?

1. Dev build
2. Local server
3. HMR -> Hot Module Replacement (Hot Reload)
4. File caching Algo (Written in C++)
5. Cache - Faster build
6. Image optimization
7. Minification of files
8. Bundle
9. Compress
10. Consistent hashing
11. Code splitting
12. Differential bundling - Supports for older browser
13. Error handling
14. Host on https
15. Tree shaking - Remove unused code
16. Different dev & prod bundles

### Building app

- > npm parcel build index.html

Note: It can give error as the main entry point will be App.js in package.json file. Hence remove the main attribute from package.json

### Compatible for old browsers

1. Use the browserlist package
