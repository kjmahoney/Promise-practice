console.log('hello');

let promiseClean = new Promise((resolve, reject) => {
  let isClean = true;

  if(isClean) {
    resolve(' Clean');
  } else {
    reject('An error occurred');
  }
});

promiseClean.then((fromResolve)=> {
  console.log('the room is' + fromResolve);
}).catch((fromReject) => {
  console.log(fromReject);
})
