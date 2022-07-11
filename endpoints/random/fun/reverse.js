const config = require('../../../config/config.json');

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

module.exports = {
    run: async (req, res, next) => {
        let { text } = req.query;

        if (!text)
            return res.status(400).json({
                result: 'Please Provide Text That You Wanna Reverse',
                usage: `${config.baseurl}/random/fun/reverse?text=<your text>`
            });

        res.status(200).json({
            result: reverseString(text)
        });
    }
};