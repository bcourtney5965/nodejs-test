if (require.main === module) {
	throw new Error('Do not run directly. Use server.js to start.');
}

const Koa = require('koa');
const cors = require('@koa/cors');
const koaStatic = require('koa-static');

const app = new Koa();
app.use(cors());

// Register Routes
let indexRouter = require('./routes/index');

app.use(indexRouter.routes())
  .use(indexRouter.allowedMethods());


// Serve static files from public directory
app.use(koaStatic('./app/dist/'));


module.exports = app;
