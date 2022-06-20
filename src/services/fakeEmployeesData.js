const employees = [
     {
        id : 1,
        firstname : "Bhavin",
        lastname : "Bhatewera" ,
        email : "bhavin01b@gmail.com",
        username : "bhavin01",
        password : "bhavin@01",
        department: { id: "103", name: "UI/UX" },
        contact : 9098550856
    },
    {
        id : 2,
        firstname : "Rohit",
        lastname : "Agrawal" ,
        email : "ragrawal@gmail.com",
        username : "rohit12",
        password : "rohit@12",
        department: { id: "102", name: "QA" },
        contact : 8907123456
    },
    {
        id : 3,
        firstname : "Akshat",
        lastname : "Rathore" ,
        email : "akshat@gmail.com",
        username : "rathore23",
        password : "rathore@23",
        department: { id: "102", name: "QA" },
        contact : 9981276345
    },
    {
        id : 4,
        firstname : "Neha",
        lastname : "Sharma" ,
        email : "nsharma01b@gmail.com",
        username : "nsharma",
        password : "nsharma@12",
        department: { id: "103", name: "UI/UX" },
        contact : 8871204563
    },
    {
        id : 5,
        firstname : "Sumiran",
        lastname : "Singh" ,
        email : "sumiranb@gmail.com",
        username : "singh45",
        password : "singh@45",
        department: { id: "103", name: "UI/UX" },
        contact : 9170325648
    },
    {
        id : 6,
        firstname : "Chirag",
        lastname : "Bajaj" ,
        email : "chirag@gmail.com",
        username : "chirag22",
        password : "chirag@22",
        department: { id: "101", name: "Development" },
        contact : 9926843168
    },
    {
        id : 7,
        firstname : "Abhilash",
        lastname : "Sahu" ,
        email : "abhilash@gmail.com",
        username : "abhilash09",
        password : "abhilash@09",
        department: { id: "101", name: "Development" },
        contact : 8901295693
    },
    {
        id : 8,
        firstname : "Tarun",
        lastname : "Sharma" ,
        email : "tarunsharma@gmail.com",
        username : "tarun09",
        password : "tarun@09",
        department: { id: "101", name: "Development" },
        contact : 9821305864
    },
    {
        id : 9,
        firstname : "Harshita",
        lastname : "Porwal" ,
        email : "harshita@gmail.com",
        username : "hporwal76",
        password : "hporwal@76",
        department: { id: "103", name: "UI/UX" },
        contact : 7789013452
    },
    {
        id : 10,
        firstname : "Aarav",
        lastname : "Rathore" ,
        email : "aarav@gmail.com",
        username : "aarav34",
        password : "aarav@34",
        department: { id: "102", name: "QA" },
        contact : 9045812934
    },
    {
        id : 11,
        firstname : "Jaspreet Singh",
        lastname : "Rajpal" ,
        email : "jaspreet@gmail.com",
        username : "jaspreet33",
        password : "jsapreet@33",
        department: { id: "101", name: "Development" },
        contact : 9826731414
    },
]

export function getEmployees(){
    return employees.filter(g => g);
}