///////// JOBS

var mapJobs = function() {
    var key = this.job;
    emit(key, {});
 };


 var reduceJobs = function(keys, values) {
	return {}
};


db.people.mapReduce( 
    mapJobs,
	reduceJobs,
    {
        out: { merge: "jobs" },
    }
)

db.jobs.find().toArray()