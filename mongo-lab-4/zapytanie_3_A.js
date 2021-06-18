db.people.aggregate([
    {
        $group : {
            _id: "$_id", 
            "jobs": {"$addToSet": "$job"},
        }
    }, 
]).toArray()
