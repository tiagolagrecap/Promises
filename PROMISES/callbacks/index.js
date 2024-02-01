/* const loginUser = (email, password, callback) => {
    setTimeout(() => {
        console.log("User Logged!");
        callback({email});
    }, 1500);

    console.log("after setTimeout")
};

const user = loginUser('tiago@gmail.com', '12345', (user) =>{
    console.log({user})
});
 */


const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;

        if(error){
            onError(new Error('Error in Login!'))
        }
        console.log("User Logged!");
        onSuccess({email});
    }, 1500);

};

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000);
};

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({title:"video title"})
    }, 2500);
}


const user = loginUser('tiago@gmail.com', '12345', (user) =>{
    getUserVideos(user.email, (videos) => {
        console.log({videos});
        getVideoDetails(videos[0], (videoDetails) => {
            console.log({videoDetails})
        });
    });
}, 
(error) => {
    console.log({error});
    }
);