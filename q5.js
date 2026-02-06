db.employees.insertMany([{
  name: "Brian Smith",
  email: "brian@gmail.com",
  department: "HR",
  salary: 3000,
  location: ["FL", "TX", "AZ"],
  date: Date()
},
{ name: "Amy G",
  email: "amy@gmail.com",
  department: "HR",
  salary: 2000,
  location: ["AZ", "FL"],
  date: Date()
}]);
