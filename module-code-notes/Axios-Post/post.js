// using axios & post request

const todoForm = document.todoform
todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    
    }
    axios.post("https://api.vschool.io/dashagaytan/todo", newTodo)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})

