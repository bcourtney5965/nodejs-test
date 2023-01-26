const KoaRouter = require('koa-router');
const { getMembers } = require('../controllers/index');
const indexRouter = new KoaRouter();

indexRouter.get('/', getMembers);

module.exports = indexRouter;
