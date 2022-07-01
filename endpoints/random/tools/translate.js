const translate = require('@iamtraction/google-translate-api');

module.exports = {
    run: async (req, res, next) => {

        if (!req.query.to)
        return res.json({
            message: 'Please Provide a Country aliases',
            usage: 'https://api.avux.ga/random/tools/translate?to=<country aliases>'
        });

        if (!req.query.text)
        return res.json({
            message: 'Please Provide a Text',
            usage: 'https://api.avux.ga/random/tools/translate?to=<country aliases>&text=<your text>'
        });
        
        try {
            let to = req.query.to;
            if (to.length !== 2)
                return res.json({
                    message: 'Please Provide a Country aliases',
                    usage: 'https://api.avux.ga/random/tools/translate?to=<country aliases>'
                });
            let text = req.query.text;
            text = text.split('%20').join(' ');
            let result = await translate(text, {
                to: to
            });
            res.statusCode = 200;
            res.json({
                text,
                res: result.text
            });
        } catch (err) {
            res.json({
                res: err.message
            });
            console.error(err);
        }
    }
};
