const Canvas = require('canvas');
const canvacord = require('canvacord');
const fillTextWithTwemoji = require('node-canvas-with-twemoji').fillTextWithTwemoji;
const config = require('../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        Canvas.registerFont('./source/Roboto.ttf', {
            family: 'Roboto'
        });
        Canvas.registerFont('./source/Roboto-Bold.ttf', {
            family: 'Roboto',
            weight: 'bold'
        });
        var {
            text
        } = req.query;
        if (!text) text = `Hello | ${config.baseurl}`;
        const canvas = Canvas.createCanvas(794, 82);
        const ctx = canvas.getContext('2d');
        const img = new Canvas.Image(),
            avatar = await Canvas.loadImage(
                await canvacord.Canvas.circle(
                    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a9a4862-df68-40bf-8628-7cb3dfe0103c/dd6kejv-3cd2eb4e-7d3d-47c9-8e98-fba229216e88.png/v1/fill/w_400,h_400,strp/wumpus_by_inklessrambles_dd6kejv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MDAiLCJwYXRoIjoiXC9mXC8xYTlhNDg2Mi1kZjY4LTQwYmYtODYyOC03Y2IzZGZlMDEwM2NcL2RkNmtlanYtM2NkMmViNGUtN2QzZC00N2M5LThlOTgtZmJhMjI5MjE2ZTg4LnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Is5Ov-0rWzw6sbopQQZ0IKDjv3YFJIqLPW7BOyrj2Vo'
                )
            );
        img.src = './source/msg.png';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#7289da';
        ctx.font = 'bold 16px Roboto';
        const width = ctx.measureText('Wumpus');
        ctx.fillText('Wumpus', 84, 35);
        ctx.fillStyle = 'white';
        ctx.font = '16px Roboto';
        await fillTextWithTwemoji(ctx, text, 84, 58);
        ctx.fillStyle = 'grey';
        ctx.font = '12px Roboto';
        var time = Date()
            .split(' ')[4]
            .split(':')
            .slice(0, 2)
            .join(':');
        ctx.fillText('Today at ' + time, width.width + 89, 33);
        ctx.drawImage(avatar, 12, 9, 60, 60);
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': canvas.toBuffer().length
        });
        res.end(canvas.toBuffer());
    }
};