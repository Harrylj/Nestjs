// 属性装饰器
const doc2:PropertyDecorator = (target:any,key:string | symbol) => {
    console.log(target,key)
    // target.prototype.name = '小满'
}


class Xiaoman2 {
    @doc2
    public name: string
    constructor(){
        this.name = '小满'
    }
}
