const faker = require('faker');

module.exports = {
    run: async (req, res, next) => {
        const pass = faker.internet.password();
        res.status(200).json({
            result: pass
        });
    }
};