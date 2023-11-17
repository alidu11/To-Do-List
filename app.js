// document.querySelector('#add').onclick = function(){
//     if(document.querySelectorAll('#newtask input').values.length = 0){
//         alert("Hello buddy! Don't be silly")
//     }
// }

const add = document.querySelector('#add');
const input = document.querySelectorAll('#newtask input').value;
const task = document.querySelector('.task');

add.onclick = function(){
    if(input.length == 0){
        alert('Enter a task to add');
    }
    else{
        tasks =+ `
        <div class="task">
                <p>Task</p>
                <button type="button"><i class="fa fa-trash" style="color: #ffffff;"></i></button>
            </div>
        `
    }
}