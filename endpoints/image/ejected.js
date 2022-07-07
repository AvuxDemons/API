const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { name, impostor, color } = req.query;
        if (!name)
            return res.status(400).json({
                message: 'Please Provide A Name',
                usage: `${config.baseurl}/image/ejected?name=<name>&impostor=<true/false(optional)>&color=<black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow (optional)>`
            });

        const data = await vacefron.ejected(
            name,
            impostor,
            color
        );

        const result = Buffer.from(data, 'base64');
        res.setHeader('content-type', 'image/jpeg').end(result);
    }
};