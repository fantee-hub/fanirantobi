const data=[
 {principal:2500, time:1.8},
 {principal:1000, time:5},
 {principal:3000, time:1},
 {principal:2000, time:3}
];

function interestCalculator(array){
  let interestData=[];
  array.forEach(function(items){
    if(items.principal >= 2500 && items.time > 1 && items.time < 3){
      items.rate = 3
    }
    else if(items.principal >= 2500 && items.time >=3){
      items.rate=4
    }
    else if(items.principal < 2500 || items.time <= 1){
      items.rate=2
    }
    else{
      items.rate=1
    }
    const interest= (items.principal * items.rate * items.time)/100;
    items.interest= interest;
    interestData.push(items);
  })
  console.log(interestData);
  return interestData;
  
}
interestCalculator(data);


 


