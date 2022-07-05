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

const hentai = ['ahegao', 'anal', 'ass', 'blowjob', 'creampie', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'gif', 'hentai', 'incest', 'kitsune', 'masturbation', 'neko', 'oppai', 'paizuri', 'pantsu', 'public', 'pussy', 'tentacles', 'thigh', 'yuri'];

hentai.forEach(end => {
    router.get('/hentai/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/nsfw/hentai/${end}`);
        endpoint.run(req, res)
    });
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