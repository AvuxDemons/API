const { RandomPHUB } = require("discord-phub");
const nsfw = new RandomPHUB((unique = true));

module.exports = {
  run: async (req, res, next) => {

    const phub = nsfw.getRandomInCategory("creampie", 'jpg');
    res.status(200).json({
      result: phub,
    });

  },
};
