db.employees.aggregate({ $sort: { name: 1 } });

db.employees.aggregate({ $limit: 3 });

db.employees.aggregate({ $skip: 1 });

db.employees.aggregate(
  { $match: { department: "HR" } },
  { $sort: { name: 1 } },
  { $limit: 3 },
  { $skip: 1 },
  { $project: { name: 1, email: 1 } },
);
