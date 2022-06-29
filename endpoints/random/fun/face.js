const randomTextFaces = require('random-text-faces');

module.exports = {
    run: async (req, res, next) => {
        const face = randomTextFaces.get();
        res.statusCode = 200;
        res.json({
            result: face
        });
    }
};