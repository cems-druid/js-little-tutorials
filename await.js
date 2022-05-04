function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making requets to ${location}`);

        if(location === 'Google'){
            resolve('Hz.Google demands all the data.');
        }
        else{
            reject('Hz.Google does not respond, thankfully now I can go back to my family');
        }
    });
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response');
        resolve(`Extra information + ${response}`);
    })
}

//this part is optional after async function
/*
makeRequest('Google').then(response => {
    console.log('Response received');
    return processRequest(response);
}).then(processResponse => {
    console.log(processResponse)
}).catch(err =>{
    console.log(err);
});
*/

//Same operation but with asycn function and using await
async function doWork(){
    try {
        const response = await makeRequest('Google');
        console.log('Response received (await)');
        const processed_response = await processRequest(response);
        console.log(processed_response);
    } catch (err) {
        console.log(err)
    }
}

doWork();