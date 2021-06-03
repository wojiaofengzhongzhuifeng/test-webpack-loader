const marked = require('marked')
module.exports = function(content){
  console.log('content markdown-loader', marked(content));

  // 使用这个 直接将 md => string
  // return `module.exports = ${JSON.stringify(marked(content))}`

  // md => html => string html ,需要借助 html-loader
  return marked(content)
}
