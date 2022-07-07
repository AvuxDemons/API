const fetch = require("node-fetch");
const config = require('../../config/config.json');

module.exports = {
  run: async (req, res, next) => {
    var { avatar } = req.query;
    if (!avatar)
      return res.json({
        result: 'Invalid Query Parameter',
        usage: `${config.baseur}/image/magik?avatar=<avatar>&intensity=<1-10 (Optional)>`
      });

    const url = `https://api.miduwu.ga/image/magik?image=`;
    const intensity = `&intensity=10`;
    const intensitycustom = `&intensity=`;

    if (!intensity) {
      const response = await fetch(url + avatar + intensity, {
        method: "GET",
        headers: { Authorization: "avuxapi" },
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("content-type", "image/jpeg").end(buffer);
    } else {
      const response = await fetch(url + avatar + intensitycustom + intensity, {
        method: "GET",
        headers: { Authorization: "avuxapi" },
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("content-type", "image/jpeg").end(buffer);
    }
  },
};
