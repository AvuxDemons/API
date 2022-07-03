const isImageURL = require('image-url-validator').default;
const weather = require('weather-js');
const Canvas = require('canvas');
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
            location,
            background: bg
        } = req.query;
        var isimg = await isImageURL(bg);
        /*

  */
        if (!location) return res.json({
            message: 'Please Provide a Valid Location',
            usage: 'https://api.avux.ga/image/weather?location=<your location>&background=<image url (optional)>'
        });
        weather.find({
            search: location,
            degreeType: 'C'
        }, async (err, stats) => {
            if (!stats) return res.json({
                message: 'Invalid Location , Please Provide a Valid Location',
                usage: 'https://api.avux.ga/image/weather?location=<your location>&background=<image url (optional)>'
            });
            if (!stats[0]) return res.json({
                message: 'Invalid Location , Please Provide a Valid Location',
                usage: 'https://api.avux.ga/image/weather?location=<your location>&background=<image url (optional)>'
            });
            stats = stats[0];
            stats.current['temperature_f'] = Math.round(
                stats.current.temperature * (9 / 5) + 32
            ).toString();
            const canvas = Canvas.createCanvas(600, 180); //
            const ctx = canvas.getContext('2d'); //
            if (isimg) bg = await Canvas.loadImage(bg);
            else {
                const img = new Canvas.Image();
                img.src = './source/bg.png';
                bg = img;
            }
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
            ctx.font = '28px Roboto';
            ctx.fillStyle = 'white';
            ctx.fillText(stats.location.name, 20, 35);
            ctx.fillStyle = '#c2c7b5';
            ctx.font = '14px Roboto';
            ctx.fillText('api.avux.ga', 500, 80);
            ctx.fillStyle = '#c2c7b5';
            ctx.font = '24px Roboto';
            ctx.fillText(stats.current.skytext, 20, 65);
            ctx.fillStyle = 'white';
            await fillTextWithTwemoji(ctx, '📅 ' + stats.current.day, 415, 35);
            await fillTextWithTwemoji(ctx, '🍃 ' + stats.current.windspeed, 345, 170);
            await fillTextWithTwemoji(ctx, '|| ☁️ ' + (stats.current.humidity || '0') + '%', 485, 170);
            ctx.font = '30px Roboto';
            ctx.fillText(
                `${stats.current.temperature} °C || ${stats.current.temperature_f} °F`,
                20,
                140
            );
            ctx.font = '24px Roboto';
            ctx.fillStyle = '#c2c7b5';
            ctx.fillText(
                `Feels like ${stats.current.feelslike} °C || ${Math.round(
				(stats.current.feelslike * 9) / 5 + 32
			)} °F`, 20, 170);
            await fillTextWithTwemoji(ctx, stats.current.date, 455, 65);
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': canvas.toBuffer().length
            });
            res.end(canvas.toBuffer());

        });
    }
};