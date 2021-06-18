printjson(db.people.aggregate([
    {
        $project : {
            "nationality": 1,
            "bmi": { $multiply: [{
                         $divide: [ 
                            "$weight", { 
                                $multiply: [ "$height", "$height"] 
                            }
                    ]
                },
                    10000]
            }
         } 
     },
     {
        $group : {
            _id: "$nationality", 
            "maxBmi": {"$max": "$bmi"},
            "minBmi": {"$min": "$bmi"},
            "avgBmi": {"$avg": "$bmi"},
        }
     }
]).toArray())
