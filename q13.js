//Write an aggregate query
//to display only name,salary
//from employees collection

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $cond:[{$gt:["$salary",3000]},"Grade A","Grade B"]
        }
    }}
])