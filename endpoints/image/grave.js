const {
    VACEFronJS
} = require('vacefron');
const vacefron = new VACEFronJS();
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { avatar } = req.query;
        if (!avatar)
            return res.status(400).json({
                result: 'Invalid Query Parameter',
                usage: `${config.baseurl}/image/grave?avatar=<avatar link>&key=<your key>`
            });
        const data = await vacefron.grave(avatar.replace('.webp', '.png'));
        const result = Buffer.from(data, 'base64');
        res.setHeader('content-type', 'image/jpeg').end(result);
    }
};