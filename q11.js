db.employees.find({
  salary: { $gt: 2000 },
  department: "HR",
});

db.employees.find({ $or: [{ salary: { $gt: 2000 } }, { department: "HR" }] });

db.employees.find(
  { $and: [{ salary: { $gt: 2000 } }, { department: "HR" }] },
  { name: 1, email: 1 },
);

db.employees.find(
  { $nor: [{ salary: { $gt: 2000 } }, { department: "HR" }] },
  { name: 1, email: 1 },
);
