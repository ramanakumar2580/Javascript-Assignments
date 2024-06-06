
const allUsers = [{
    firstName: "RamanaKumar",
    gender: "Male",
}, {
    firstName: "Eshwar",
    gender: "Male",
}, {
    firstName: "Sindhu",
    gender: "Female"
}]

for (let i = 0; i < allUsers.length; i++) {
   if (allUsers[i]["gender"] == "Male") {
    console.log(allUsers[i]["firstName"]);
   }
    
}