const faker = require('faker');

module.exports = {
    run: async (req, res, next) => {
        const pass = faker.internet.password();
        res.statusCode = 200;
        res.json({
            result: pass
        });
    }
};