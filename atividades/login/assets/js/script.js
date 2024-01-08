let fakeData = [
    {
        id: 1,
        name: "Emilly",
        user: "emilly@gmail.com",
        password: "123456"
    },
    {
        id: 2,
        name: "Ciclano",
        user: "ciclano@gmail.com",
        password: "123456"
    },
    {
        id: 3,
        name: "Fulano",
        user: "fulano@gmail.com",
        password: "123456"
    }
]


let userData = document.getElementById("user").value
let passwordData = document.getElementById("password").value
let login = document.getElementById("button")

let success = document.getElementById("success")
let error = document.getElementById("error")

login.addEventListener("click", auth)


function auth() {

    console.log("user: ", userData)
    console.log("password: ", passwordData)

    fakeData.map((element) => {
        if (element.user === user && element.password === password) {
            success.style.removeProperty("display")
        } else {
            success.style.removeProperty("display")
        }
    })

}


