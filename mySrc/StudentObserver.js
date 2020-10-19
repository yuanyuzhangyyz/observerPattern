import Store from "./Store.js";
export default class StudentCourses extends Store{
    constructor(name){
        super();
        this.name = name;
        this.addEventListener("observerUpdate",e=>{
            console.log("here her add")
            let element = document.getElementById("student")
            element.innerHTML = `this.name,e.detail`;
            console.log("this.name,e.detail",this.name,e.detail) ;
        })      
        console.log("here3")
    }
    observe(newCourses){
        this.update(newCourses);
    }
    update(newCourses){
       
        console.log(this.name,newCourses)
    }
}

// module.exports = StudentCourses;