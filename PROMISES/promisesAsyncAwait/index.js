

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
            resolve({title:"video title"})
        }, 2500);
    });
};

//PROMISE
/* loginUser("tiago@gmail.com", "12334")
    .then((user) => getUserVideos(user.email))
    .then((videos) => getUserVideoDetails(videos[0]))
    .catch((error) => console.log({ error }));

 */

//ASYNC AWAIT     
const displayUser = async () => {
    try {
        const user = await loginUser('tiago@gmail.com', "12345")
        const videos = await getUserVideos(user.email);
        const videoDetails = await getUserVideoDetails(videos[0])
    
        console.log({ videoDetails});
        
    } catch (error) {
        console.log(error)
    }
   
    
};
displayUser();