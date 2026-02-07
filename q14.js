db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ["$salary", 3000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);
