import {store} from "./Store.js";
export default class TeacherObserver{
    constructor(name){
        this.name = name;
        store.addEventListener("observerUpdate",event=>{
            const newCourses = event.detail;
            
            let element = document.getElementById("teacher")
            element.innerHTML = `${this.name},${newCourses}`;
            this.update(newCourses);
       })  
    }
    observe(newCourses){
        this.update(newCourses);
    }
    update(newCourses){
        console.log(this.name,newCourses) ;
    }
}
