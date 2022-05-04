//Promises are good when big operations are being done 
//on the background.

let p = new Promise((resovle, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resovle('a is 2');
    }else{
        reject('a is not 2');
    }
});


p.then((message) => {
    console.log('This is then and ', message);
}).catch((message) => {
    console.log('This is catch ' + message);
});


//examples:

const recordVideOne = new Promise((resolve, reject)=> {
    resolve('Video 1 recorded');
});

const recordVideTwo = new Promise((resolve, reject)=> {
    resolve('Video 2 recorded');
});

const recordVideThree = new Promise((resolve, reject)=> {
    resolve('Video 3 recorded');
});

//Does all at the same
Promise.all([
    recordVideOne,
    recordVideTwo,
    recordVideThree
]).then((messages) => [
    console.log(messages)
])

//Prints the first resolved one
Promise.race([
    recordVideOne,
    recordVideTwo,
    recordVideThree
]).then((message) => {
    console.log(message);
})