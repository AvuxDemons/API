const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.name)
            return res.json({
                message: 'Please Provide A Name',
                usage: 'https://api.avux.ga/image/ejected?name=<name>&impostor=<true/false(optional)>&color=<black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow (optional)>'
            });

        const data = await vacefron.ejected(
            req.query.name,
            req.query.impostor,
            req.query.color
        );

        const result = Buffer.from(data, 'base64');
        res.setHeader('content-type', 'image/jpeg');
        res.end(result);
    }
};