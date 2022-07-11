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
            let comment = '';
        
            if (useSize <= 1) {
                comment = 'Do you have it ?'
            } else if (useSize <= 3) {
                comment = 'Too small'
            } else if (useSize <= 7) {
                comment = 'Bigger Than Small'
            } else if (useSize <= 10) {
                comment = 'Thats Medium Size'
            } else if (useSize <= 15) {
                comment = 'The Regular One'
            } else if (useSize <= 20) {
                comment = 'Thats Big Enough'
            } else if (useSize <= 25) {
                comment = 'Super Duper Mega BIG'
            } else {
                comment = 'I cant find one'
            }

            res.status(200).json({
                result: '8' + '='.repeat(useSize) + 'D',
                comment
            });
        }
    }
};