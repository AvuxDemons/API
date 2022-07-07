const ytsearch = require('yt-search');
const config = require('../../../config/config.json');
module.exports = {
    run: async (req, res, next) => {
        if (!req.url.includes('?'))
            return res.json({
                result: 'Missing ?search=<video title> ( Optional &choose=<Number> )'
            });

        if (!req.url.includes('search='))
            return res.json({
                success: false,
                message: 'Error'
            });
        let searcheds = req._parsedUrl.query.replace('search=', '').split(';')[0];
        let a2 = searcheds.split('%20');
        let a = a2.join(' ');
        if (a.includes(' ')) a.split(' ').join(' ');
        console.log(a);
        let searched = a;
        let choosed = searched.split(`&choose=`)[1];
        let r = await ytsearch(searched);
        let _videos = r.videos;
        if (!choosed) {
            res.json({
                result: _videos.length,
                note: 'Add &choose=<Number> to choose videos array!',
                videos: _videos
            });
        }
        if (parseInt(choosed) === 0) {
            return res.json({
                success: false,
                message: 'Cannot Choose 0!'
            });
        } else if (parseInt(choosed) > _videos.length) {
            return res.json({
                success: false,
                message: 'Cannot Choose More Than ' + _videos.length + '!'
            });
        } else {
            let videos = _videos[parseInt(choosed) - 1];
            res.json(videos);
        }
    }
};