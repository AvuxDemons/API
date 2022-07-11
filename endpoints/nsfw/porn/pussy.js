const {
    NekoBot
} = require(`nekobot-api`);
const nekobot = new NekoBot();

module.exports = {
    run: async (req, res, next) => {

        nekobot.get('pussy').then(result => {
            res.status(200).json({
                result: result
            });
        });
    }
};