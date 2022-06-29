const {
  NekoBot
} = require(`nekobot-api`);
const nekobot = new NekoBot();

module.exports = {
  run: async (req, res, next) => {

      nekobot.get('thigh').then(result => {
          res.statusCode = 200;
          res.json({
              result: result
          });
      });
  }
};