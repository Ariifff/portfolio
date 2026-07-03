const fs = require('fs');
const html = fs.readFileSync('tamalsen.html', 'utf-8');

const videoMatches = html.match(/<video[^>]*>.*?<\/video>/gs) || [];
const iframeMatches = html.match(/<iframe[^>]*>/gs) || [];
const srcMatches = html.match(/src="([^"]+)"/g) || [];

console.log("Videos:", videoMatches);
console.log("Iframes:", iframeMatches);
console.log("Src matching video/spline:", srcMatches.filter(s => s.includes('.mp4') || s.includes('spline') || s.includes('lottie')));
