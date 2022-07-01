const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.text)
            return res.json({
                message: 'Please Provide An Text',
                usage: 'https://api.avux.ga/image/meeting?text=<text>&key=<your key>'
            });

        const data = await vacefron.emergencyMeeting(req.query.text);

        const result = Buffer.from(data, 'base64');
        res.setHeader('content-type', 'image/jpeg');
        res.end(result);
    }
};