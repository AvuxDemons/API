const ball = require(`../../../src/8ball.json`);

module.exports = {
    run: async (req, res, next) => {
        let result = ball[Math.floor(Math.random() * ball.length)];
        res.status(200).json({
            message: `${result}`
        });
    }
};