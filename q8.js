db.employees.updateMany(
    {},
    {$set:{points:0}}
)
db.employees.updateMany(
    {department:"IT"},
    {$set:{points:5}}
)

db.employees.updateMany(
    {},
    {$inc:{points:1}}
)

db.employees.updateMany(
    {},
    {$rename:{"points":"score"}}
)

db.employees.updateMany(
    {},
    {$unset:{"score":""}}
)

db.products.drop()

db.dropDatabase("flipcart")

