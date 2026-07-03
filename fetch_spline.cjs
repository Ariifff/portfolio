const https = require('https');

https.get('https://spline.design/community/search?q=pixel', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/https:\/\/my\.spline\.design\/[a-zA-Z0-9-]+/g);
    console.log(matches ? [...new Set(matches)] : 'No matches');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
