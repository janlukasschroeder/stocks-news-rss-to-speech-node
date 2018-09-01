# RSS News to Speech
Node.js app fetches an RSS feed, and 
reads news titles out loud by using
the text-to-speech library Say.

# Quick Start
Read New York Times news:
```javascript
const rssToSpeech = require('./index');

rssToSpeech('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
```