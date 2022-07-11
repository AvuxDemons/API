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

const hentai = [
    'ahegao', 'anal', 'ass', 'blowjob', 'creampie', 'cum', 'ero', 'femdom', 'foot', 'gangbang', 'gif', 'hentai', 'incest', 'kitsune', 'masturbation', 'neko', 'oppai', 'paizuri', 'pantsu', 'public', 'pussy', 'tentacles', 'thigh', 'yuri'
];

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

const porn = [
    'anal', 'ass', 'boobs', 'cosplay', 'creampie', 'gif', 'lactation', 'milf', 'oral', 'public', 'pussy', 'rough', 'squirting', 'thigh', 'toys', 'uniform'
];

porn.forEach(end => {
    router.get('/hentai/' + end, async (req, res) => {
        const endpoint = require(`../endpoints/nsfw/hentai/${end}`);
        endpoint.run(req, res)
    });
});

module.exports = router;