#! /usr/bin/env node

'use strict';

var dotted = require('./lib/dotted');

var nopt = require('nopt');


var opts = nopt({
    src: [String],
    target: [String]
}, {
    h: '--help',
    v: '--version',
});

if (opts.help) {
    return console.log('dotted -s . -t ~/');
} else if (opts.version) {
    return console.log(require('./package').version);
}

dotted(opts.src, opts.target)
