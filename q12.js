db.customers.insertMany([
  { _id: "c1", name: "John" },
  { _id: "c2", name: "Mike" },
]);

db.orders.insertMany([
  { _id: "o1", customerId: "c1", product: "Laptop", price: 57000 },
  { _id: "o2", customerId: "c1", product: "Mouse", price: 1000 },
  { _id: "o3", customerId: "c2", product: "Desktop", price: 35000 },
  { _id: "o4", customerId: "c2", product: "Keyboard", price: 1200 },
  { _id: "o5", customerId: "c2", product: "Mouse", price: 1000 },
]);


db.customers.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"customerId",
        as:"orders"
    }}
])