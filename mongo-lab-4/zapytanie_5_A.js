db.people.aggregate(
    [ 
        { 
            $match : { 
                sex : "Female", 
                nationality: "Poland"
            } 
        },
        { 
            $unwind : "$credit" 
        },
        {
            $group : {
                _id: "$credit.currency", 
                "total": {"$sum": "$credit.balance"},
                "mean": {"$avg": "$credit.balance"}
            }
        }, 
    ]
).toArray();