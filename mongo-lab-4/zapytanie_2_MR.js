/////// MONEY

var mapMoney = function() {
    for (var idx = 0; idx < this.credit.length; idx++) {
        var key = this.credit[idx].currency;
        var value = this.credit[idx].balance;
        emit(key, value);
     }
 };


 var reduceMoney = function(keys, values) {
	return Array.sum(values);
};


db.people.mapReduce( 
    mapMoney,
	reduceMoney,
    {
        out: { merge: "money" },
    }
)

db.money.find().toArray()