console.log('JS OK!');


for (let y = 1; y <= 100; y++) {
    const nonDivsibile= y % 3!== 0 && y % 5 !=0
    const divisibilePerTre = y % 3 === 0 & y % 5 !==0
    const divisibilePerCinque = y % 5 === 0 & y % 3 !== 0
    const divisibilePerEntrambi= y % 3 ===0 & y % 5 ===0
    
    if(divisibilePerTre){
        console.log(y+'fizz' );
    }

    if (divisibilePerCinque){
        console.log( y+'buzz');
    }
  if (divisibilePerEntrambi) {
    console.log( y+'fizzbuzz')
    }
    if (nonDivsibile) {
    console.log(y)
    }

}