
'use strict';

var settingsHandler = require('../settingsHandler');
var domManipulator = require('../engine/domManipulator');
var verbose;

var staticPages = domManipulator.staticPages;


exports.engineVersion = '1.9';

exports.init = function() {


  var originalSetEngineInfo = staticPages.setEngineInfo;

  staticPages.setEngineInfo = function(document) {

    if (verbose) {
      console.log('Example addon is running');
    }

    var footer = document.createElement('footer');
    footer.innerHTML = 'Example addon is working';

    document.getElementsByTagName('body')[0].appendChild(footer);

    originalSetEngineInfo(document);

  };

};


exports.loadSettings = function() {

  verbose = settingsHandler.getGeneralSettings().verbose;

};

exports.apiRequest = function(req, res) {

  res.end(JSON.stringify({
    msg : 'Example addon api response.'
  }, null, 2));

};

exports.formRequest = function(req, res) {

  res.end('Example addon form response.');

};
