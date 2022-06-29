const faker = require('faker');

module.exports = {
    run: async (req, res, next) => {
        const pass = faker.internet.email();
        res.statusCode = 200;
        res.json({
            result: pass
        });
    }
};