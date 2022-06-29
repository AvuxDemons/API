const fetch = require('node-fetch');
const replaceString = require('replace-string');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.message)
            return res.json({
                result: 'Please Provide  A Message',
                usage: 'https://api.avux.ga/random/fun/simsimi?message=<message>&language=<language (optional)>'
            });

        if (req.query.message) {
            if (!req.query.language) {
                fetch(
                    `https://api.simsimi.net/v2/?text=${req.query.message}&lc=en&cf=false&key=API-TEST-WEB`
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
                            question: req.query.message,
                            result: hasil.success,
                            language: hasil.location,
                        });
                    });
            } else {
                fetch(
                    `https://api.simsimi.net/v2/?text=${req.query.message}&lc=${req.query.language}&cf=false&key=API-TEST-WEB`
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
                            question: req.query.message,
                            result: hasil.success,
                            language: hasil.location,
                        });
                    });
            }
        }

    }
};