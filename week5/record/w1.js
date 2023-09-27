const users = [
    { "id": 1, "username": "admin", "password": "1111", "role": 1 },
    { "id": 2, "username": "aaa", "password": "2222", "role": 2 },
    { "id": 3, "username": "bbb", "password": "333", "role": 2 }
];
const username = document.querySelector('input[id="name"]');
const passwords = document.querySelector('input[id="passwords"]');
const btn = document.querySelector('button[type="submit"]')


btn.addEventListener('click', function() {
    if (username.value == '' || passwords.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }

    if (checkUser(username.value, passwords.value)) {
        Swal.fire(
            'Welcome',
            'You clicked the button!',
            'success'
        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'login failed try aging',
        })
    }
})



function checkUser(name, pass) {
    const user = users.find(user => user.username == name && user.password == pass)
    if(user) {
        return true
    } else {
        return false
    }
}