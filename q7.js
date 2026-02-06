db.employees.updateOne({ email: "john@gmail.com" }, { $set: { salary: 1500 } });

db.employees.updateOne(
  { email: "abc@gmail.com" },
  { $set: { salary: 2000 } },
  { upsert: true },
);

db.employees.updateOne(
  { email: "abc@gmail.com" },
  { $set: { name: "ABC" } },
  { upsert: true },
);

db.employees.deleteOne(
    { email: "abc@gmail.com" }
);
