const say = require('say');
const Parser = require('rss-parser');
const parser = new Parser();
const moment = require('moment');
const exampleUrl = 'http://apps.shareholder.com/rss/rss.aspx?channels=6864&companyid=ABEA-45YXOQ&sh_auth=6377614456%2E0%2E0%2E43345%2E374806b9f234407f20f2b26e92154f03';

module.exports = (url = exampleUrl) => {
  parser.parseURL(url).then(feed => talk(feed.items));
};

const talk = (arr) => {
  if (arr instanceof Array) {
    const item = arr.shift(); // get and remove first element of array
    const text = moment(item.pubDate).format('dddd') + ': ' + item.title;
    say.speak(text, 'Alex', 1.5, (err) => {
      return arr.length > 0 ? talk(arr) : -1;
    });
  }
};