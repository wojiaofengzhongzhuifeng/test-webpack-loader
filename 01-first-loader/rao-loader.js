module.exports = function(content){
  console.log('content', content);
  console.log('rao-loader exec');

  return content.replace(/test/, 'test123321123321')
}
