// 要把tsconfig.json里的设置"experimentalDecorators": true,    
// 类装饰器
const doc:ClassDecorator = (target:any) => {
    console.log(target)
    target.prototype.name = '小满'
}

@doc
class Xiaoman {
    constructor(){

    }
}
// 等价于
doc(Xiaoman)

const xiaoman:any = new Xiaoman()

console.log(xiaoman.name)