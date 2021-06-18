printjson(db.people.aggregate([
    {
        $group : {
            _id: "$sex", 
            "AvgWeight": {"$avg": "$weight"},
            "AvgHeight": {"$avg": "$height"}
        }
    }, 
]).toArray())