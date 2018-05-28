function addTodo() {
    var li = document.createElement('li');
    
    //add todo text
    var textWrap = document.createElement('span');
    textWrap.classList.add('text-wrap');
    li.appendChild(textWrap);
    var newTodoValue = document.getElementById('new-todo-value').value;
    var text = document.createTextNode(newTodoValue);
    textWrap.appendChild(text);
    if(newTodoValue==='') {
        alert("Please write what you need to do!");
    } else {
        document.getElementById('todos-list').appendChild(li);
    }
    document.getElementById('new-todo-value').value='';
    
    //add circle / done icon before todo text
    var notDoneIcon = document.createElement('span');
    notDoneIcon.innerHTML = '<i class="far fa-circle"></i>';
    notDoneIcon.classList.add('not-done');
    li.appendChild(notDoneIcon);
    
    var notDoneTodo = document.getElementsByClassName('not-done');
    for(var i=0; i<notDoneTodo.length; i++) {
        notDoneTodo[i].onclick = function() {
            var divToBeDone = this.previousSibling;
            divToBeDone.classList.toggle('done');
            if((divToBeDone.className==='text-wrap done') || (divToBeDone.className==='text-wrap editable done')) {
                this.innerHTML = '<i class="far fa-check-circle"></i>';
            } else {
                this.innerHTML = '<i class="far fa-circle"></i>';
            }
        }
    }
    
    //add edit icon
    var editIcon = document.createElement('span');
    editIcon.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editIcon.classList.add('edit');
    li.appendChild(editIcon);
    
    var editTodo = document.getElementsByClassName('edit');
    for(var i =0; i<editTodo.length; i++) {
        editTodo[i].onclick = function() {
            var divToEdit = this.parentElement.firstChild;
            this.classList.toggle('in-edit');
            divToEdit.classList.toggle('editable');
            if((divToEdit.className==='text-wrap editable') || (divToEdit.className==='text-wrap done editable')) {
                divToEdit.spellcheck=false;
                divToEdit.contentEditable=true;
            } else {
                divToEdit.contentEditable=false;
            }
        }
    }
    
    //add delete icon
    var deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteIcon.classList.add('delete');
    li.appendChild(deleteIcon);
    
    var deleteTodo = document.getElementsByClassName('delete');
    for(var i=0; i<deleteTodo.length; i++) {
        deleteTodo[i].onclick = function() {
            var divToDelete = this.parentElement;
            divToDelete.style.display = 'none';
        }
    }
}