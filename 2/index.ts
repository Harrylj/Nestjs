class A{
    name:string
    constructor(name:string){
        this.name = name
    }
}
class B{
    age:number
    entity:A
    constructor(age:number){
        this.age = age;
        this.entity = new A(' alan ')
    }
}
const c = new B(18)

c.entity.name