for(var i=0; i<=100; i=i+1){
   // console.log(i)
    if (i%3==0 && i%5==0 ){
    console.log('El ' +i+ ' es FizzBuzz')
    }
    else if (i%5==0){
        console.log('El ' +i+ ' es Buzz')
    }
    else if(i%3==0){
        console.log('El ' +i+ ' es Fizz')
    }
    else {
        console.log(i)
    }
 }