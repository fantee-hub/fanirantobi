const name='Faniran Tobi';
console.log(name);
const courses=['Html','Css', 'Javascript'];
console.log(courses);

if(courses.length % 2 !==0){
  for(i=1; i<=200; i++){
    if(i%2!==0){
      console.log(i);
    }
  }
}
else{
  for(i=1; i<=200; i++){
    if(i%2===0){
      console.log(i);
    }
  }
}