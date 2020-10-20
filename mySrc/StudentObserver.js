import {store} from "./Store.js";
export default class StudentObserver{
    constructor(name){
        this.name = name;
        store.addEventListener("observerUpdate", event =>{
            const newCourses = event.detail;
            
            let element = document.getElementById("student")
            element.innerHTML = `${this.name},${newCourses}`;
            this.update(newCourses);
        })      
        console.log("here3");
    }
    observe(newCourses){
        this.update(newCourses);
    }
    update(newCourses){
        console.log(this.name,newCourses)
    }
}

// module.exports = StudentCourses;