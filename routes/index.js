const KoaRouter = require('koa-router');
const { getUsers } = require('../controllers/index');


const indexRouter = new KoaRouter();


indexRouter.get('/', getUsers);

module.exports = indexRouter;
