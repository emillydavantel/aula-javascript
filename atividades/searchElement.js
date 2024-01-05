const arr = [
    {
        name: "Emilly",
        age: 35
    },
    {
        name: "Joe",
        age: 32
    },
    {
        name: "Doe",
        age: 36
    },
]


arr.map((element) => {
    if(element.name === "Joe"){
        console.log(element.age)
    }
})

