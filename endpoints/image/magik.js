const fetch = require("node-fetch");

module.exports = {
  run: async (req, res, next) => {
    if (!req.query.avatar)
      return res.json({
        message: "Please Provide Avatar Link",
        usage: "https://api.avux.ga/image/magik?avatar=<avatar>&intensity=<1-10 (Optional)>",
      });

    const url = `https://apiv2.willz.repl.co/image/magik?image=`;
    const intensity = `&intensity=10`;
    const intensitycustom = `&intensity=`;

    if (!req.query.intensity) {
      const response = await fetch(url + req.query.avatar + intensity, {
        method: "GET",
        headers: { Authorization: "avuxapi" },
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("content-type", "image/jpeg");
      res.end(buffer);
    } else {
      const response = await fetch(url + req.query.avatar + intensitycustom + req.query.intensity, {
        method: "GET",
        headers: { Authorization: "avuxapi" },
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.setHeader("content-type", "image/jpeg");
      res.end(buffer);
    }
  },
};
