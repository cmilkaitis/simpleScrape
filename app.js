const needle = require('needle');
const cheerio = require('cheerio');
const fs = require('fs');
const util = require('util');


const url = 'https://www.imdb.com/search/title?groups=top_250&my_ratings=exclude&sort=user_rating';

needle.get(url, function(err, res) {
    if(err) throw err;
    console.log('Status code: ' + res.statusCode);

    let $ = cheerio.load(res.body, {decodeEntities : false});
    let el = $('.lister-item-header').text();

    fs.writeFileSync('./top50.json', util.inspect(JSON.stringify(el)), 'utf-8');
    
});