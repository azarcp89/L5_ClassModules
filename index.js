import OnlineStudent from "./onlineStudent.js";
import Student from "./Student.js";

let students= [
  new OnlineStudent("Азаркевич Илья",17,true,"Skype"),
  new Student("Астрейко Юрий",18,true),
  new OnlineStudent("Random User",21,false,"Zoom")
];

students.forEach(function(student){
   student.show();
   console.log('\n');
});
