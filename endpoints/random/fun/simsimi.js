const fetch = require('node-fetch');
const replaceString = require('replace-string');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { message, language } = req.query;
        if (!message)
            return res.json({
                result: 'Please Provide  A Message',
                usage: `${config.baseurl}/random/fun/simsimi?message=<message>&language=<language (optional)>`
            });

        if (message) {
            if (!language) {
                fetch(
                    `https://api.simsimi.net/v2/?text=${message}&lc=en&cf=false&key=API-TEST-WEB`
                )
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        const satu = replaceString(
                            JSON.stringify(data),
                            'ah_dey._.weirdo',
                            'd.avux'
                        );
                        const dua = replaceString(satu, 'ah_dey._.weirdo', 'd.avux');
                        const tiga = replaceString(dua, 'MeoCop#5555', 'Avux#0000');
                        const hasil = JSON.parse(tiga);
                        res.statusCode = 200;
                        res.json({
                            question: message,
                            result: hasil.success,
                            language: hasil.location,
                        });
                    });
            } else {
                fetch(
                    `https://api.simsimi.net/v2/?text=${message}&lc=${language}&cf=false&key=API-TEST-WEB`
                )
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        const satu = replaceString(
                            JSON.stringify(data),
                            'ah_dey._.weirdo',
                            'd.avux'
                        );
                        const dua = replaceString(satu, 'ah_dey._.weirdo', 'd.avux');
                        const tiga = replaceString(dua, 'MeoCop#5555', 'Avux#0000');
                        const hasil = JSON.parse(tiga);
                        res.statusCode = 200;
                        res.json({
                            question: message,
                            result: hasil.success,
                            language: hasil.location,
                        });
                    });
            }
        }

    }
};