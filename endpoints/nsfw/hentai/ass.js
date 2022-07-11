const {
    NekoBot
} = require(`nekobot-api`);
const nekobot = new NekoBot();

module.exports = {
    run: async (req, res, next) => {

        nekobot.get('hass').then(result => {
            res.status(200).json({
                result
            });
        });
    }
};