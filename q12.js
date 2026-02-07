db.employees.aggregate([
  { $match: { department: "IT" } },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      department:1
    },
  },
  { $sort: { name: 1 } },
  { $limit: 3 },
]);
