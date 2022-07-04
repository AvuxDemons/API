const fetch = require('node-fetch');
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        var { username, displayname, avatar, comment } = req.query;
        const url = `https://some-random-api.ml/canvas/tweet?username=`;

        if (!username)
            return res.json({
                message: 'Please Provide Username',
                usage: `${config.baseur}/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>`
            });
        if (!displayname)
            return res.json({
                message: 'Please Provide Display Name',
                usage: `${config.baseur}/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>`
            });
        if (!avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: `${config.baseur}/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>`
            });
        if (!comment)
            return res.json({
                message: 'Please Provide a Comment',
                usage: `${config.baseur}/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>`
            });
        const response = await fetch(url + username + '&displayname=' + displayname + '&avatar=' + avatar + '&comment=' + comment);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg').end(buffer);
    }
};