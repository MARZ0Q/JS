
// One way to validate input.

const isValidNumber1 = ()=>{
    let input = +prompt('Enter your number:');
    if(isNaN(input) || input <=0){
        console.log('Invalid Number');
        return isValidNumber1();  // Note that you have to return the function result
    }
    else{
        return input;
    }
}


const result1 = isValidNumber1() 
console.log(result1)

// Another way to do this.
const isValidNumber2= ()=>{
    while(true){
        let input = +prompt('Enter your number:');
        if(isNaN(input) || input <=0){
            console.log('Invalid Number');
        }
        else{
            return input;
        }
    }
}

console.log(isValidNumber2())