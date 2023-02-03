const KoaRouter = require('koa-router');
const { getMembers } = require('../controllers/index');
const indexRouter = new KoaRouter({
  prefix: '/api'
});

indexRouter.get('/members', getMembers);

module.exports = indexRouter;
