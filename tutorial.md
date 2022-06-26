## Step By Step of project

### init package.json with:

```js
yarn init -y
```

### install and init typescript

```js
yarn add typescript -D
after
yarn tsc --init
```

### install express and types

```js
yarn add express
after
yarn add @types/express -D
```

### install ts-node-dev

```js
yarn add ts-node-dev -D
```
<hr>

* go to tsconfig.json and configure as is in this project

```js
yarn tsc
```
<hr>

### install tsconfig-paths and add in script of package.json

```js
yarn add tsconfig-paths -D
```
* go to package.json and add tsconfig-paths/register in scripts.dev

### install eslint and run

```js
yarn add eslint -D
yarn eslint --init
```

#### eslint configuration

* to check syntax, find problems, and enforce code style
* javascript modules (import/export)
* none of these
* Yes or No TS
* Use popular code style guide
* airbnb or Standard
* formar files to JSON
* copy dependencies and run with yarn but no install eslint
* go to .eslintrc.json and configure as is in this project

