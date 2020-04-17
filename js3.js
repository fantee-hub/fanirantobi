function integer(x){
    let number=[];
    for (i=1; i <= x; i++){
      let num = i;
      if(i % 2==0){
        num='yu';
      }if(i % 3==0){
        num='gi';
      }if(i % 5==0){
        num='oh';
      }if(i % 2==0 && i % 3==0){
        num='yu-gi';
      }if(i % 2==0 && i % 5==0){
        num='yu-oh';
      }if(i % 3==0 && i % 5==0){
        num='gi-oh';
      }if(i%2==0 && i%3==0 && i%5==0){
        num='yu-gi-oh';
      }
      number.push(num);
    }
    console.log(number);
    return number;
  }
integer(100);
integer(20);


  