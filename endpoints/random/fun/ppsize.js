const config = require('../../../config/config.json');

module.exports = {
    run: async (req, res, next) => {
        let { ukuran } = req.query;
        let usize = ukuran || '25';
        let size = Number.parseInt(usize);

        let is_int = Number.isInteger(size);

        if (is_int === false) {
            res.status(400).json({
                result: 'Please Provide Text That You Wanna Reverse',
                usage: `${config.baseurl}/random/fun/ppsize?size=(1-25)`
            });
        } else {
            let useSize = Math.floor(Math.random() * size + 1);
            res.status(200).json({
                size: '8' + '='.repeat(useSize) + 'D'
            });
        }
    }
};