////////// AVERAE WEIGHT AND HEIGHT

var mapAvgWeightHeight = function() {
    var key = this.sex;
    var value = {
                  countH: 1,
                  height: this.height,
                  countW: 1,
                  weight: this.weight
                };

    emit(key, value);
 };


 var reduceAvgWeightHeight = function(keys, values) {
    var value = {
        countH: 0,
        height: 0,
        countW: 0,
        weight: 0
    }

	for (var idx = 0; idx < values.length; idx++) {
		value.countH += values[idx].countH;
		value.height += values[idx].height;
        value.countW += values[idx].countW;
		value.weight += values[idx].weight;
	}

	return value;
};

var finalizeAvgWeightHeight = function (key, reduced) {
    var finalized = {
        avgHeight: 0,
        avgWeight: 0
    }

	finalized.avgHeight = reduced.height/reduced.countH;
	finalized.avgWeight = reduced.weight/reduced.countW;

    return finalized;
};

db.people.mapReduce( 
    mapAvgWeightHeight,
	reduceAvgWeightHeight,
    {
        out: { merge: "avg_height_weight" },
	    finalize: finalizeAvgWeightHeight
    }
)

db.avg_height_weight.find().toArray()
