## US Ski and Snowboard Node.js Test

### To run:

Generate Data

```shell
node ./data/generate.js
```

Install root dependencies

```shell
npm install
```

Install front end dependencies & build

```shell
cd app && npm install && npm run build
```

Start Server

```shell
cd .. && npm start
```

Navigate to http://localhost:3000/

## Task

- Display the SQLite data in a format similar to that depicted in [public/images/layout.png](public/images/layout.png)
- The address displayed should be the primary address with a non-zero value in the primaryAddress column.
- You may use any or no CSS framework as you choose.
- Allow the user to search by first and/or last name.
- You may add any additional npm packages to the project that you want to use.
