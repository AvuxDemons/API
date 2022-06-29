const fetch = require('node-fetch');

module.exports = {
    run: async (req, res, next) => {
        const url = `https://some-random-api.ml/canvas/tweet?username=`;
        if (!req.query.username)
            return res.json({
                message: 'Please Provide Username',
                usage: 'https://api.avux.ga/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>'
            });
        if (!req.query.displayname)
            return res.json({
                message: 'Please Provide Display Name',
                usage: 'https://api.avux.ga/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>'
            });
        if (!req.query.avatar)
            return res.json({
                message: 'Please Provide Avatar Link',
                usage: 'https://api.avux.ga/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>'
            });
        if (!req.query.comment)
            return res.json({
                message: 'Please Provide a Comment',
                usage: 'https://api.avux.ga/image/tweet?username=<username>&displayname=<display_name>&avatar=<avatar_link>&comment=<comment>'
            });
        const response = await fetch(url + req.query.username + '&displayname=' + req.query.displayname + '&avatar=' + req.query.avatar + '&comment=' + req.query.comment);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.setHeader('content-type', 'image/jpeg');
        res.end(buffer);
    }
};