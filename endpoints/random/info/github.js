const fetch = require('node-fetch');
const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { username } = req.query;
        if (!username)
            return res.status(400).json({
                result: 'Please Provide a Github Username',
                usage: `${config.baseurl}/random/info/github?username=<username>`
            });

        fetch(
            'https://api.github.com/users/' + username
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                res.status(200).json(data);
            });
    }
};