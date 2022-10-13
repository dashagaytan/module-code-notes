// Axios PUT request

const updates = {
    title: "I AM GOOD!!!",
    description: "new description"
}

axios.put("https://api.vschool.io/dashagaytan/todo/63448c6418d1a05bceae80a9", updates)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))





//GET one
// axios.get("https://api.vschool.io/dashagaytan/todo")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))