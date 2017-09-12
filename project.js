var main = require('./cat')

main.hello()

var m = main.create()

console.log(m)

//调用子模块方法
m.head.out()
m.body.out()