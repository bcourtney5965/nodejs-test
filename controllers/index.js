const members = require('../Models/index');

const getMembers = async (ctx) => {
  try {
    ctx.body = await members.getAll();
    ctx.status = 201;
  } catch(e) {
    console.log(e);
    ctx.body = "Error!";
    ctx.status = 500;
  }
}

module.exports = {
  getMembers
};