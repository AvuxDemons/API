const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { text } = req.query;
        if (!text)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseur}/image/meeting?text=<text>&key=<your key>`
            });

        const data = await vacefron.emergencyMeeting(text);

        const result = Buffer.from(data, 'base64');
        res.setHeader('content-type', 'image/jpeg').end(result);
    }
};