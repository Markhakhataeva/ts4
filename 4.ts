const SayHello=(name:string)=>`${name}`;
SayHello("hi")

////


const addNumbers=(num1:number,num2:number)=>{
    return num1+num2
}
addNumbers(1,2)

////

type Person={
    firstname:string,
    lastname:string,
    age:number
}

  const getFullName=(person:Person):string=>{
    return `${person.firstname}${person.lastname}${person.age}`
  }

  /////


  type Point={
    x:number,
    y:number
  }
  const getDistance=(X:Point,Y:Point):number=>{
    return Math.sqrt(((Y.x-X.x)*2)+((Y.y-X.y)*2))
  }

  /////

  const filterByType=(array:Array<any>):string=>{
    return ()
}