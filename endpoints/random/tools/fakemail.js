const faker = require('faker');

module.exports = {
    run: async (req, res, next) => {
        const pass = faker.internet.email();
        res.status(200).json({
            result: pass
        });
    }
};