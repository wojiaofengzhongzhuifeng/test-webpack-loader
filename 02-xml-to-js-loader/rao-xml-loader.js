
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const loaderUtils = require('loader-utils');



module.exports =  function(source) {
  const options = loaderUtils.getOptions(this);
  this.cacheable && this.cacheable();
  const self = this;
  console.log("current config", options);
  parser.parseString(source, function (err, result) {
    self.callback(err, !err && "module.exports = " + JSON.stringify(result));
  });
};
