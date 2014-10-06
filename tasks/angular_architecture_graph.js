/*
 * grunt-angular-architecture-graph
 * https://github.com/lucalanca/grunt-angular-architecture-graph
 *
 * Copyright (c) 2014 Joao Figueiredo
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  var Helpers           = require("./helpers")(grunt);

  grunt.registerMultiTask("angular_architecture_graph", "Create graphs of your angular projects using angular-architecture-graph.", function() {
    var options = this.options({
      punctuation: ".",
      separator: ", "
    });
    grunt.log.writeln(options);

    this.files.forEach(function (f) {
      // 1. Parse Files
      var parsedFiles = Helpers.parseSrcFiles(f);

      // 2. Get codebase graph using angular-architecture graph
      var codebaseArchitecture = Helpers.analyseFiles(parsedFiles);

      // 3. Generate .dot files
      Helpers.generateGraphFiles(codebaseArchitecture);
    });

  });
};
