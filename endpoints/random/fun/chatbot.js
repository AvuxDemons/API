const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { message, botname, owner, username} = req.query;
        if (!message)
            return res.json({
                message: 'Please Provide  A Message',
                usage: `${config.baseurl}/random/fun/chatbot?message=<message>&botname=<botname>&owner=<ownername (optional)>&user=<username(optional)>`
            });

        if (message) {
            fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' + message
            )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = JSON.stringify(data).replace(
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = satu.replace('Lebyy_Dev', 'Avux#0001');
                    const tiga = dua.replace('Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (botname) {

            fetch(
                'https://api.affiliateplus.xyz/api/chatbot?message=' +
                message +
                '&botname=' +
                botname
            )
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    const satu = JSON.stringify(data).replace(
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = satu.replace('Lebyy_Dev', 'Avux#0001');
                    const tiga = dua.replace('Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (owner) {

            fetch(
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
                    const satu = JSON.stringify(data).replace(
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = satu.replace('Lebyy_Dev', 'Avux#0001');
                    const tiga = dua.replace('Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }

        if (username) {

            fetch(
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
                    const satu = JSON.stringify(data).replace(
                        'affiliateplus.xyz',
                        'avux.ga'
                    );
                    const dua = satu.replace('Lebyy_Dev', 'Avux#0001');
                    const tiga = dua.replace('Affiliate+ API', `${config.baseurl}`);
                    res.status(200).json(JSON.parse(tiga));
                });
        }
    }
};