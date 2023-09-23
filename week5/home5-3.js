
const users = [
    { 'id': 1, 'username': 'admin', 'password': '1111', 'role': 1 },
    { 'id': 2, 'username': 'aaa', 'password': '2222', 'role': 2 },
    { 'id': 3, 'username': 'bbb', 'password': '333', 'role': 2 },
]


const username = document.querySelector('input[id="username"]')
const password = document.querySelector('input[id="password"]')
const loginBtn = document.querySelector('button[type="submit"]')

loginBtn.addEventListener('click', () => {
    console.log(username.value)
    if (!username.value || !password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
        return
    }
    login(username.value, password.value)
        .then(user => {
            if (user.role === 1) {
                window.location.href = 'admin.html'
            } else if (user.role === 2) {
                window.location.href = 'user.html'
            }
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login failed, try again!',
            })
        })
})

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.username === username && user.password === password)
        if (user) {
            resolve(user)
        } else {
            reject('User not found')
        }
    })
}