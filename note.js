noteArr = [{
    name : 'Dhruv',
    dueDate : '12-9-2000'
},
{
    name : 'shah',
    dueDate : '4-9-2024'

}];


function renderList() {
    let ListinnerHTML = '';
    for (let i =2 ; i<noteArr.length; i++) {
        const temp = noteArr[i];
        const name=temp.name;
        const duedate=temp.dueDate;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div> 
        <button onclick="
        noteArr.splice(${i},1);
        renderList();"
        class="delete-section"
        >Delete</button>
        `;
        ListinnerHTML += html;
    }
    document.querySelector('.Display').innerHTML = ListinnerHTML;

}

function AddNote() {
    const Note = document.querySelector('.Note');
    const date=document.querySelector('.project-Date');
    const name = Note.value;
    const dueDate=date.value;
    noteArr.push({
        name,
        dueDate
    });
    console.log(noteArr);
    Note.value = '';
    renderList();
}
