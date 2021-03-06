'use strict';

// Empties folders to start fresh
module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                        '.tmp',
                        '<%= paths.dist %>/*',
                        '!' + '<%= paths.dist %>/.git*'
                    ]
                }]
    },
    server: '.tmp',
    doc: 'doc',
    mobileBuilderBundle: '.tmp/mobile-build-bundle.zip',
    mobileDist: '<%= paths.mobileDist %>'
};
