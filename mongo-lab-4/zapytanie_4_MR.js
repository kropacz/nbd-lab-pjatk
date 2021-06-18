//////// BMI

var mapBMI = function() {
    var key = this.nationality;
    var bmi = this.weight / Math.pow((this.height/100), 2) ;
    var value = {
        sumBmi: bmi,
        maxBmi: bmi,
        minBmi: bmi,
        count: 1
    }
    
    emit(key, value);
 };

var reduceBMI = function(keys, values) {
    var reduced = {
        sumBmi: 0,
        maxBmi: 0,
        minBmi: 1000000000,
        count: 0
    }

	for (var idx = 0; idx < values.length; idx++) {
        reduced.count += values[idx].count;
        reduced.sumBmi += values[idx].sumBmi;

        if (values[idx].maxBmi > reduced.maxBmi){
            reduced.maxBmi = values[idx].maxBmi
        } 

        if (reduced.minBmi == 0 || values[idx].minBmi < reduced.minBmi){
            reduced.minBmi = values[idx].minBmi
        } 
	}

	return reduced;
};

var finalizeBMI = function (key, reduced) {
    var finalized = {
        minBmi: reduced.minBmi,
        maxBmi: reduced.maxBmi,
    }

	finalized.avgBmi = reduced.sumBmi/ reduced.count;
    
    return finalized;
};

db.people.mapReduce( 
    mapBMI,
	reduceBMI,
    {
        out: { merge: "bmi" },
        finalize: finalizeBMI
    }
);

db.bmi.find().toArray()