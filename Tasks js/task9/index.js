const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email')
const userImage = document.getElementById('user-image')
const baseUrl = 'https://randomuser.me/api/'
const userInfo = document.querySelectorAll('.cont-buttons button')
const info = document.getElementById('info')
const newUser = document.querySelector('#new-user .btn')
let data = []

function getUserData() {
    info.textContent = 'Loading...'
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', baseUrl)
    xmlHttp.send()
    xmlHttp.onload = function () {
        data = JSON.parse(xmlHttp.responseText).results[0]
        console.log(data);
        userImage.src = data.picture.large;
        userName.textContent = data.name.first + ' ' + data.name.last
        userEmail.textContent = data.email
        info.textContent = ''


    }
}
getUserData()
userInfo.forEach(function (item) {
    item.addEventListener('click', function () {
        if (this.dataset.info == 'phone') {
            info.textContent = data[this.dataset.info]

        } else {
            info.textContent = 'Country: ' + data.location.country + ' | City: ' + data.location.city
        }

    })
})
newUser.addEventListener('click', getUserData)
