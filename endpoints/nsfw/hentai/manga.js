const NanaAPI = require("nana-api");
const nana = new NanaAPI();

module.exports = {
    run: async (req, res, next) => {
        let random = await nana.random();
        if (!req.query.id)
            return res.json({
                random
            });
        try {
            let doujin = await nana.g(req.query.id);
            res.json({
                doujin
            });
        } catch (err) {
            res.json({
                error: err.message
            });
        }
    }
};