let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve(' cleaned the room')
  })
}

let removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + ' garbage out')
  })
}

let getIceCream = (message) => {
  return new Promise((resolve,reject) => {
    resolve(message + ' got ice cream')
  })
}

//Race

Promise.race([cleanRoom(),
             removeGarbage(),
             getIceCream()]).then(() => {
  console.log('all finished');
})

//All

// Promise.all([cleanRoom(),
//              removeGarbage(),
//              getIceCream()]).then(() => {
//   console.log('all finished');
// })

//In sequence

// cleanRoom().then((result) => {
//   return removeGarbage(result);
// }).then((result) => {
//   return getIceCream(result);
// }).then((result) => {
//   console.log('finished' + result);
// })
