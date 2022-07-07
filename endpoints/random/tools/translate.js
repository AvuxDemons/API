const translate = require('@iamtraction/google-translate');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {

        let { to, text } = req.query;
        if (!to || !text)
            return res.json({
                result: 'Please Provide a Text',
                usage: `${config.baseurl}/random/tools/translate?to=<country aliases>&text=<your text>`
            });

        try {
            let to = to;
            if (to.length !== 2)
                return res.json({
                    result: 'Please Provide a Country aliases',
                    usage: `${config.baseurl}/random/tools/translate?to=<country aliases>`
                });
            let text = text;
            text = text.split('%20').join(' ');
            let result = await translate(text, {
                to: to
            });
            res.status(200).json({
                text,
                result: result.text
            });
        } catch (err) {
            res.status(400).json({
                result: err.message
            });
            console.error(err);
        }
    }
};
