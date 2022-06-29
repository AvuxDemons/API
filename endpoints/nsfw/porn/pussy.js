const {
    NekoBot
} = require(`nekobot-api`);
const nekobot = new NekoBot();

module.exports = {
    run: async (req, res, next) => {

        nekobot.get('pussy').then(result => {
            res.statusCode = 200;
            res.json({
                result: result
            });
        });
    }
};