const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files =[
         './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/main.js'
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/custom-alert.js')
    console.info('Elements created successfully!')
})()