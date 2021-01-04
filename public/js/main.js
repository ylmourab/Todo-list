let input = document.getElementsByTagName('input')[0]
let ajouter = document.getElementById('add')
let newList

let btnDelete = document.getElementsByClassName('btn-delete')

let todo = document.getElementsByClassName('todo__list')[0]
ajouter.addEventListener('click', function(){
    newList = document.createElement('div')
    newList.classList.add('list-element')
    newList.innerHTML = `<p>${input.value}</p>
    <div class="list-button">
        <button class="btn-check">Check</button>
        <button class="btn-rename">Rename</button>
        <button class="btn-delete">Delete</button>
    </div>`
    todo.appendChild(newList)


    
    
})






for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click',function(){
        btnDelete[i].parentElement.parentElement.style.display = 'none'
        
        
    })
    console.log(btnDelete)
    
}


