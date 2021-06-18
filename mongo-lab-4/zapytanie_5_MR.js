///////// POLSIH WOMAN MONEY

var mapPWM = function() {

    if (this.sex == "Female" && this.nationality == "Poland"){
        for (var idx = 0; idx < this.credit.length; idx++) {
            var key = this.credit[idx].currency;
            
            var value = {
                amount: this.credit[idx].balance, 
                count: 1
            
            }
            emit(key, value);
        }
    }
 };

 var reducePWM = function(keys, values) {
    var reduced = {
        total: 0,
        count: 0,
    }

	for (var idx = 0; idx < values.length; idx++) {
        reduced.count += values[idx].count;
        reduced.total += values[idx].amount;
	}

	return reduced;
};

var finalizePWM = function (key, reduced) {
    var finalized = {
        total: reduced.total,
    }

	finalized.avg = reduced.total / reduced.count;
    
    return finalized;
};

db.people.mapReduce( 
    mapPWM,
	reducePWM,
    {
        out: { merge: "polish_women_money" },
        finalize: finalizePWM 
    }
)

db.polish_women_money.find().toArray()