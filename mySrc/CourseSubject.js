import Store from "./Store.js"
export default class CourseSubject extends Store{
    constructor(courses){
        super();
        this.courses = courses ;
        this.observerList = [];
    }
    getCourses(){
        return this.courses;
    }
    setCourses(newCourses){
        this.courses = newCourses;
        console.log("here1");
        this.dispatchEvent(new CustomEvent("observerUpdate",{
            detail: this.courses
        }));
        console.log("here2");
    }
    
    attach(observer){
        this.observerList = [...this.observerList,observer];
    }

    // notify(){
    //     this.observerList.forEach(observer=>{
    //         observer.update(this.courses)
    //     })

    // }
}

