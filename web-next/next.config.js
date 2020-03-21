const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')

// module.exports = new Map([
//     {
//         exportTrailingSlash: true,
//         exportPathMap: async function() {
//             const paths = {
//                 '/': { page: '/'},
//                 '/about': { page: '/about'}
//             };
//             const fs = require('fs');
//             let posts = JSON.parse(fs.readFileSync('./static/testTopic.json'));
//             posts.forEach(post => {
//                 paths[`/posts/${post.postName}`] = { page: 'posts/[postName]', query: {postName: post.postName}};
//             });
    
//             return paths; 
//         }
//     },
//     withImages(withFonts(withCSS(withSass({
//         cssModules: false
//     })))),
// ]);

module.exports = withImages(withFonts(withCSS(withSass({
    cssModules: false
}))))