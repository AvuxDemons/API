const fetch = require('node-fetch');
const replaceString = require('replace-string');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { message } = req.query;
        if (!message)
            return res.json({
                message: 'Please Provide  A Message',
                usage: `${config.baseurl}/random/fun/chatbot?message=<message>&botname=<botname>&owner=<ownername (optional)>&user=<username(optional)>`
            });

        if (message) {
            const test = fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' + message
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
                    const tiga = replaceString(dua, 'Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (botname) {
            const replaceString = require('replace-string');
            const test = fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' +
                message +
                '&botname=' +
                botname
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
                    const tiga = replaceString(dua, 'Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (owner) {
            const replaceString = require('replace-string');
            const test = fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' +
                message +
                '&botname=' +
                botname +
                '&ownername=' +
                owner
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
                    const tiga = replaceString(dua, 'Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (username) {
            const replaceString = require('replace-string');
            const test = fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' +
                message +
                '&botname=' +
                botname +
                '&ownername=' +
                owner +
                '&user=' +
                username
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
                    const tiga = replaceString(dua, 'Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }
    }
};