const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise consumed");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 Resolved");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Prince", email: "Prince.@gmail.com" });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "prince", password: 8983765583 });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

async function consumePromiseFour() {
    try {
        const user = await promiseFour;
        console.log(user);
        const username = user.username;
        console.log(username);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("The promise is either resolved or rejected");
    }
}

consumePromiseFour();

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "username", password: 8983765583 });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();