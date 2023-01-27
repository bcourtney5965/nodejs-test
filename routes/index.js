const KoaRouter = require('koa-router');
const { getMembers } = require('../controllers/index');
const indexRouter = new KoaRouter();

indexRouter.get('/members', getMembers);

module.exports = indexRouter;
