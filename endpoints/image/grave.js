const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        
        if (!avatar)
            return res.json({
                message: 'Please Provide An Avatar Link',
                usage: `${config.baseurl}/image/grave?avatar=<avatar link>&key=<your key>`
            });

        const data = await vacefron.grave(avatar);
        try {
            const result = Buffer.from(data, 'base64');
            res.setHeader('content-type', 'image/jpeg').end(result);
        } catch (err) {
            res.status(404).json({
                error: err.message,
                note: 'Image Endpoint Doesnt Support .webp'
            });
        }
    }
};