// simulating http request (axios/fetch)
function fetchDataFromSource(source){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(source)
        },Math.random() * 2000);
    })
}

//pretend data from database
const sources = ['Source 1', 'Source 2', 'Source 3'];
const info = ['Data1', 'Data2', 'Data3'];
const info2 = ['data4', 'data5', 'data6'];

async function fetchData(){
    try{
        const sourcePromises = await fetchDataFromSource(sources)
        console.log(sourcePromises) //[ 'Source 1', 'Source 2', 'Source 3']

        const combinedData = await Promise.all(sourcePromises.map(async item => {
            const newInfo = await fetchDataFromSource(info)
            const moreInfo = await fetchDataFromSource(info2)
            return {item, info: {newInfo, moreInfo}}  
            //we can return an array of all the data.  we can also spead all the data from our array of data
            // return {item, info: [...newInfo, ...moreInfo]}  

        }))
        return combinedData;
    } catch (error){
        console.log(error)
    }
}

fetchData().then(result => {
    console.log(result)
})


// How to use Promise.all when doing getall request from our server 

postRouter.get('/getall', async (req, res, next) => {
    try{
        const posts = await Post.find() //saves all of our post into an array called posts

        const postsWithInfo = await Promise.all(posts.map(async (post) => {
            const comments = await Comment.find({postId: post._id}).populate('userId') //grabbing all comments under the post
            const user = await User.findById(post.userId) //grabbing user who made the post 
            return {...post.toObhect(), comments: comments, user: user.withoutPassword() }  //.toObject() is turning our data into JavaScript
        }))
        res.status(200).send(postsWithInfo)

    }catch (error){
        res.status(500)
        return next(error)
    }
})