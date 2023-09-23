const students = [
    {id: 100, name: 'Lisa', age: '25' },
    {id: 101,name: 'Peter', age: '29' },
    {id: 102, name: 'Khaw', age: '21' },
]

const tableBody = document.querySelector('#table-body');
loadData();
function loadData() {
    for (let i = 0; i < students.length; i++) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${students[i].name}</td>
            <td>${students[i].age}</td>
            <td>
                <button class="btn btn-danger" onclick="confirm('Are you sure?') ? DeleteDate(${students[i].id}) : ''">Delete</button>
                <button class="btn btn-warning" onclick="EditData(${students[i].id})">Edit</button>
            </td>
        `
        tableBody.append(row)
    }
}

function DeleteDate(id){
    for (let i = 0; i < students.length; i++) {
        if(students[i].id == id){
            students.splice(i, 1)
        }
    }
    tableBody.innerHTML = ''
    loadData();
}

function EditData(id) {
    const name = prompt('Enter name')
    const age = prompt('Enter age')
    if (name == '' || age == '') {
        return
    }
    for (let i = 0; i < students.length; i++) {
        if(students[i].id == id){
            students[i].name = name
            students[i].age = age
        }
    }
    tableBody.innerHTML = ''
    loadData();
}

function AddData() {
    const name = document.querySelector('input[id="new_name"]').value
    const age = document.querySelector('input[id="new_age"]').value
    if (name == '' || age == '') {
        return
    }
    const id = students[students.length - 1].id + 1
    students.push({id, name, age})
    tableBody.innerHTML = ''
    loadData();
}