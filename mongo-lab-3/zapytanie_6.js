printjson(db.people.insert({
	"sex" : "Male",
	"first_name" : "Marcin",
	"last_name" : "Kropacz",
	"job" : "Data Scientist",
	"email" : "s22952@pjwstk.edu.pl",
	"location" : {
		"city" : "Wroclaw",
		"address" : {
			"streetname" : "Czarnieckiego",
			"streetnumber" : "41"
		}
	},
	"description" : "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
	"height" : 179.99,
	"weight" : 88.37,
	"birth_date" : new ISODate("1997-05-23T16:10:58Z"),
	"nationality" : "Poland",
	"credit" : [
		{
			"type" : "jcb",
			"number" : "4017957170327",
			"currency" : "PLN",
			"balance" : "4463.86"
		}
	]
}))