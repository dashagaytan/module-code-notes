//axios is promise based, we will need to use .then and .catch

//GET all
axios.get("https://api.vschool.io/dashagaytan/todo")
    .then(res => {
        
        for(let i = 0; i < res.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = res.data[i].title
            document.body.append(h1)
        }
    })
    .catch(err => console.log(err))

//GET one
// axios.get("https://api.vschool.io/dashagaytan/todo/63448c6418d1a05bceae80a9")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
