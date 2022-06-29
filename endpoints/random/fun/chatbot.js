const fetch = require('node-fetch');
const replaceString = require('replace-string');

module.exports = {
    run: async (req, res, next) => {
        if (!req.query.message)
            return res.json({
                message: 'Please Provide  A Message',
                usage: 'https://api.avux.ga/random/fun/chatbot?message=<message>&botname=<botname>&owner=<ownername (optional)>&user=<username(optional)>'
            });

        if (req.query.message) {
            const test = fetch(
                    'https://api.affiliateplus.xyz/api/chatbot?message=' + req.query.message
                )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = replaceString(
                        JSON.stringify(data),
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = replaceString(satu, 'Lebyy_Dev', 'Avux#0001');
                    const tiga = replaceString(dua, 'Affiliate+ API', 'api.avux.ga');
                    res.statusCode = 200;
                    res.json(JSON.parse(tiga));
                });
        }

        if (req.query.botname) {
            const replaceString = require('replace-string');
            const test = fetch(
                    'https://api.affiliateplus.xyz/api/chatbot?message=' +
                    req.query.message +
                    '&botname=' +
                    req.query.botname
                )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = replaceString(
                        JSON.stringify(data),
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = replaceString(satu, 'Lebyy_Dev', 'Avux#0001');
                    const tiga = replaceString(dua, 'Affiliate+ API', 'api.avux.ga');
                    res.statusCode = 200;
                    res.json(JSON.parse(tiga));
                });
        }

        if (req.query.owner) {
            const replaceString = require('replace-string');
            const test = fetch(
                    'https://api.affiliateplus.xyz/api/chatbot?message=' +
                    req.query.message +
                    '&botname=' +
                    req.query.botname +
                    '&ownername=' +
                    req.query.owner
                )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = replaceString(
                        JSON.stringify(data),
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = replaceString(satu, 'Lebyy_Dev', 'Avux#0001');
                    const tiga = replaceString(dua, 'Affiliate+ API', 'api.avux.ga');
                    res.statusCode = 200;
                    res.json(JSON.parse(tiga));
                });
        }

        if (req.query.username) {
            const replaceString = require('replace-string');
            const test = fetch(
                    'https://api.affiliateplus.xyz/api/chatbot?message=' +
                    req.query.message +
                    '&botname=' +
                    req.query.botname +
                    '&ownername=' +
                    req.query.owner +
                    '&user=' +
                    req.query.username
                )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = replaceString(
                        JSON.stringify(data),
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = replaceString(satu, 'Lebyy_Dev', 'Avux#0001');
                    const tiga = replaceString(dua, 'Affiliate+ API', 'api.avux.ga');
                    res.statusCode = 200;
                    res.json(JSON.parse(tiga));
                });
        }
    }
};