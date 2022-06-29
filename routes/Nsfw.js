const express = require('express');
const router = express.Router();

/*
  _  ___          _   _ ____  _______        __
 / |( _ )   _    | \ | / ___||  ___\ \      / /
 | |/ _ \ _| |_  |  \| \___ \| |_   \ \ /\ / / 
 | | (_) |_   _| | |\  |___) |  _|   \ V  V /  
 |_|\___/  |_|   |_| \_|____/|_|      \_/\_/    cat:nsfw
*/

/*
  _  _ ___ _  _ _____ _   ___ 
 | || | __| \| |_   _/_\ |_ _|
 | __ | _|| .` | | |/ _ \ | | 
 |_||_|___|_|\_| |_/_/ \_\___| cat:hentai
 
*/

const hentai = '../endpoints/nsfw/hentai/'

router.get('/hentai/ahegao', (req, res, next) => {
    const endpoint = require(`${hentai}ahegao`);
    endpoint.run(req, res)
});

router.get('/hentai/anal', (req, res, next) => {
    const endpoint = require(`${hentai}anal`);
    endpoint.run(req, res)
});

router.get('/hentai/ass', (req, res, next) => {
    const endpoint = require(`${hentai}ass`);
    endpoint.run(req, res)
});

router.get('/hentai/blowjob', (req, res, next) => {
    const endpoint = require(`${hentai}blowjob`);
    endpoint.run(req, res)
});

router.get('/hentai/creampie', (req, res, next) => {
    const endpoint = require(`${hentai}creampie`);
    endpoint.run(req, res)
});

router.get('/hentai/cum', (req, res, next) => {
    const endpoint = require(`${hentai}cum`);
    endpoint.run(req, res)
});

router.get('/hentai/ero', (req, res, next) => {
    const endpoint = require(`${hentai}ero`);
    endpoint.run(req, res)
});

router.get('/hentai/femdom', (req, res, next) => {
    const endpoint = require(`${hentai}femdom`);
    endpoint.run(req, res)
});

router.get('/hentai/foot', (req, res, next) => {
    const endpoint = require(`${hentai}foot`);
    endpoint.run(req, res)
});

router.get('/hentai/gangbang', (req, res, next) => {
    const endpoint = require(`${hentai}gangbang`);
    endpoint.run(req, res)
});

router.get('/hentai/gif', (req, res, next) => {
    const endpoint = require(`${hentai}gif`);
    endpoint.run(req, res)
});

router.get('/hentai/hentai', (req, res, next) => {
    const endpoint = require(`${hentai}hentai`);
    endpoint.run(req, res)
});

router.get('/hentai/incest', (req, res, next) => {
    const endpoint = require(`${hentai}incest`);
    endpoint.run(req, res)
});

router.get('/hentai/kitsune', (req, res, next) => {
    const endpoint = require(`${hentai}kitsune`);
    endpoint.run(req, res)
});

router.get('/hentai/masturbation', (req, res, next) => {
    const endpoint = require(`${hentai}masturbation`);
    endpoint.run(req, res)
});

router.get('/hentai/midriff', (req, res, next) => {
    const endpoint = require(`${hentai}midriff`);
    endpoint.run(req, res)
});

router.get('/hentai/neko', (req, res, next) => {
    const endpoint = require(`${hentai}neko`);
    endpoint.run(req, res)
});

router.get('/hentai/oppai', (req, res, next) => {
    const endpoint = require(`${hentai}oppai`);
    endpoint.run(req, res)
});

router.get('/hentai/paizuri', (req, res, next) => {
    const endpoint = require(`${hentai}paizuri`);
    endpoint.run(req, res)
});

router.get('/hentai/pantsu', (req, res, next) => {
    const endpoint = require(`${hentai}pantsu`);
    endpoint.run(req, res)
});

router.get('/hentai/public', (req, res, next) => {
    const endpoint = require(`${hentai}public`);
    endpoint.run(req, res)
});

router.get('/hentai/pussy', (req, res, next) => {
    const endpoint = require(`${hentai}pussy`);
    endpoint.run(req, res)
});

router.get('/hentai/tentacles', (req, res, next) => {
    const endpoint = require(`${hentai}tentacles`);
    endpoint.run(req, res)
});

router.get('/hentai/thigh', (req, res, next) => {
    const endpoint = require(`${hentai}thigh`);
    endpoint.run(req, res)
});

router.get('/hentai/yuri', (req, res, next) => {
    const endpoint = require(`${hentai}yuri`);
    endpoint.run(req, res)
});

/*
  ___  ___  ___ _  _
 | _ \/ _ \| _ \ \| |
 |  _/ (_) |   / .` |
 |_|  \___/|_|_\_|\_| cat:porn

 */

const porn = '../endpoints/nsfw/porn/'

router.get('/porn/anal', (req, res, next) => {
    const endpoint = require(`${porn}anal`);
    endpoint.run(req, res)
});

router.get('/porn/ass', (req, res, next) => {
    const endpoint = require(`${porn}ass`);
    endpoint.run(req, res)
});

router.get('/porn/boobs', (req, res, next) => {
    const endpoint = require(`${porn}boobs`);
    endpoint.run(req, res)
});

router.get('/porn/cosplay', (req, res, next) => {
    const endpoint = require(`${porn}cosplay`);
    endpoint.run(req, res)
});

router.get('/porn/creampie', (req, res, next) => {
    const endpoint = require(`${porn}creampie`);
    endpoint.run(req, res)
});

router.get('/porn/gif', (req, res, next) => {
    const endpoint = require(`${porn}gif`);
    endpoint.run(req, res)
});

router.get('/porn/lactation', (req, res, next) => {
    const endpoint = require(`${porn}lactation`);
    endpoint.run(req, res)
});

router.get('/porn/milf', (req, res, next) => {
    const endpoint = require(`${porn}milf`);
    endpoint.run(req, res)
});

router.get('/porn/oral', (req, res, next) => {
    const endpoint = require(`${porn}oral`);
    endpoint.run(req, res)
});

router.get('/porn/public', (req, res, next) => {
    const endpoint = require(`${porn}public`);
    endpoint.run(req, res)
});

router.get('/porn/pussy', (req, res, next) => {
    const endpoint = require(`${porn}pussy`);
    endpoint.run(req, res)
});

router.get('/porn/rough', (req, res, next) => {
    const endpoint = require(`${porn}rough`);
    endpoint.run(req, res)
});

router.get('/porn/squirting', (req, res, next) => {
    const endpoint = require(`${porn}squirting`);
    endpoint.run(req, res)
});

router.get('/porn/thigh', (req, res, next) => {
    const endpoint = require(`${porn}thigh`);
    endpoint.run(req, res)
});

router.get('/porn/toys', (req, res, next) => {
    const endpoint = require(`${porn}toys`);
    endpoint.run(req, res)
});

router.get('/porn/uniform', (req, res, next) => {
    const endpoint = require(`${porn}uniform`);
    endpoint.run(req, res)
});

module.exports = router;