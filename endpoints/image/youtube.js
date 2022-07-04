const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { username, avatar, comment } = req.query;
        const url = `https://some-random-api.ml/canvas/youtube-comment?username=`;

        if (!username)
            return res.json({
                message: 'Please Provide Username',
                usage: `${config.baseur}/image/youtube?username=<username>&avatar=<avatar_link>&comment=<comment>`
            });
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: `${config.baseur}/image/youtube?username=<username>&avatar=<avatar_link>&comment=<comment>`
            });
        if (!comment)
            return res.json({
                message: 'Please Provide a Comment',
                usage: `${config.baseur}/image/youtube?username=<username>&avatar=<avatar_link>&comment=<comment>`
            });
        const response = await fetch(url + username + '&avatar=' + avatar + '&comment=' + comment);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};