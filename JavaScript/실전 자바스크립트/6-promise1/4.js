requestData().then(onResolve, onReject);
Promise.resolve(123).then(data => console.log(data));
Promise.reject('error').then(null, data => console.log(data));
