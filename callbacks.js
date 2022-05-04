const { resolve } = require("path/posix");

const userLeft = true;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name : 'User Left',
            message : ':('
        });
    }
    else if(userWatchingCatMeme){
        errorCallback(
            {
                name:'User watching cat meme',
                message: 'webdevsimplified is no better than cats'
            }
        );
    }
    else{
        callback('Like and subscribe m8');
    }
}

watchTutorialCallback((message) =>{
    console.log('Success: ' + message );
}, (error) => {
    console.log(error.name + ' bla ' + error.message);
});


//same thing but with using promises
function watchTutorialPromise(){
    return new Promise((resolve, reject)=>{
        if(userLeft){
            reject(
            {
                name : 'User Left',
                message : ':('
            });
        }
        else if(userWatchingCatMeme){
            reject(
                {
                    name:'User watching cat meme',
                    message: 'webdevsimplified is no better than cats'
                });
        }
        else{
            resolve('Like and subscribe m8');
        }
    });
}

watchTutorialPromise().then((message)=>{
    console.log('Success: ' + message);
}).catch((error) =>{
    console.log(error.name + ' bla ' + error.message);
});