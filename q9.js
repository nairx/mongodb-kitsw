db.employees.aggregate(
  { $match: { department: "HR" } },
);

db.employees.aggregate(
  { $project: { _id:1,name: 1 } },
);

db.employees.aggregate(
  { $match: { department: "HR" } },
  { $project: { _id:1,name: 1 } },
);

db.employees.aggregate(
    {$group: 
        { 
            _id: "$department",
             total: { $sum: "$salary" } 
        },
});
