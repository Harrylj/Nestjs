// 方法装饰器
const doc3:MethodDecorator = (target:any,key:string | symbol,descriptor:any) => {
    console.log(target,key,descriptor)
    // target.prototype.name = '小满'
}


class Xiaoman3 {
    public name: string
    constructor(){
        this.name = '小满'
    }
    @doc3
    getName(){

    }
}
