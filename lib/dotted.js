/*
 * dotted
 * https://github.com/ragingwind/dotted
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */
// https://github.com/mintbridge/grunt-symbolic-link/blob/master/tasks/symlink.js
module.exports = function(src, target) {
    'use strict';

    var fs = require('fs');
    var path = require('path');

    console.log(path.normalize(src), path.normalize(target));
}


