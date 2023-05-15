class A{
    name: string
    constructor(name:string){
        this.name = name
    }
}

class C{
    name:string
    constructor(name:string){
        this.name = name
    }
}

// 中间件用于解耦
class Container{
    modeuls:any
    constructor(){
        this.modeuls = {}
    }
    provide(key:string,modeuls:any){
        this.modeuls[key] = modeuls
    }
    get(key){
        return this.modeuls[key]
    }
}

const mo = new Container()
mo.provide('a',new A('alan 1'))
mo.provide('c',new A('alan 2'))

class B {
    a: any
    c: any
    constructor(container:Container){
        this.a = container.get('a')
        this.c = container.get('c')
    }
}

new B(mo)