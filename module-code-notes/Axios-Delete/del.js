// DELETE request with axios

axios.delete("https://api.vschool.io/dashagaytan/todo/6347928518d1a05bceae811d")
    .then(res => console.log(res.data))
    .cathc(err => console.log(err))


// GET one
// axios.get("https://api.vschool.io/dashagaytan/todo/")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))


// user functionality with delete btn
// const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/scrimbalessons/todo/5d8bd511ee91575e6d49e06e")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })