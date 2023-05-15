// 参数装饰器
const doc4:ParameterDecorator = (target:any,key:string | symbol |undefined,index:any) => {
    console.log(target,key,index)
    // target.prototype.name = '小满'
}


class Xiaoman4 {
    public name: string
    constructor(){
        this.name = '小满'
    }
    getName(name:string,@doc4 age:number){

    }
}
