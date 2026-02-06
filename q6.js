// db.employees.find();
// db.employees.findOne();
// db.employees.find().skip(1);
// db.employees.find().limit(2);

db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });

db.employees.find({}, { _id: 0, name: 1 });

db.employees.find().sort({ name: 1 });

db.employees.find().sort({ name: -1 });

db.employees.find({}, { _id: 0, name: 1 }).sort({ name: 1 }).limit(3).skip(1);

db.employees.find({ salary: 3000 });

db.employees.find({ salary: { $gt: 5000 } });

db.employees.find({ salary: { $lt: 5000 } });

db.employees.find({ salary: { $gte: 5000 } });

db.employees.find(
  {
    salary: { $lt: 3000 },
    department: "HR",
  },
  { _id: 0, name: 1, email: 1 },
);


db.employees.find(
    {department:"HR"}
)

db.employees.find(
    {department:{$eq:"HR"}}
)

db.employees.find(
    {department:{$ne:"HR"}}
)