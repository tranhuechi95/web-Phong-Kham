const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withImages(withFonts(withCSS(withSass({
    cssModules: true
}))));