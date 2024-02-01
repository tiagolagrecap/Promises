/* 

const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if(error) {
            reject(new Error("error in login!"))
        }
        console.log("user logged!");
        resolve({email});
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('getVideoDetails')
            resolve(['video1', 'video2', 'video3'])
        }, 2000);
    });
};

const getUserVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('getUserVideos')
            result({title:"video title"})
        }, 2500);
    });
};

loginUser("tiago@gmail.com", "12334")
    .then((user) => getUserVideos(user.email))
    .then((videos) => getUserVideoDetails(videos[0]))
    .catch((error) => console.log({ error }));
 */

//PROMISE.ALL

const yt = new Promise(resolve =>{
    setTimeout(() => {
        resolve("videos from youtube");
    }, 2000);
});

const fb = new Promise(resolve =>{
    setTimeout(() => {
        resolve("videos from facebook");
    }, 2000);
});

Promise.all([yt, fb]).then((result) => {
    console.log({result})
});