const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide An Avatar Link',
                usage: 'https://api.avux.ga/image/grave?avatar=<avatar link>&key=<your key>'
            });

        const data = await vacefron.grave(req.query.avatar);
        try {
            const result = Buffer.from(data, 'base64');
            res.setHeader('content-type', 'image/jpeg');
            res.end(result);
        } catch (err) {
            res.json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};