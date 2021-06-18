
// Lista 
// Cwiczenie 1

def workOrNotToWork(dayName: String) : String = {
  val workingDays = Set("poniedzialek", "wtorek", "sroda", "czawartek", "piatek")
  val weekend = Set("sobota", "niedziela") 
  dayName match {
    case dayName if workingDays contains dayName.toLowerCase() => "Praca"
    case dayName if weekend contains dayName.toLowerCase() => "Weekend"
    case _ => "Nie ma takiego dnia"
  }
}


println("1 Result: " + workOrNotToWork("niedziela") + " " + workOrNotToWork("Piatek") + " " + workOrNotToWork("dsahkjdhjkd"))

println()

// Cwiczenie 2

class BankAccount(private var _balance: Double = 0) {

  
  def makeDeposit(amount: Double) : Double = {
      this._balance += amount
      
      return this._balance
  }
  
  def withdraw(amount: Double) : Double = {
      if (this._balance >=amount)
          this._balance -= amount
      else
        println("Brak odpowiednich środków na koncie")
    
      return this.balance
  }
  
  def balance = this._balance
}

val myAccount = new BankAccount()
println(myAccount.balance)

println(myAccount.withdraw(1000))
println(myAccount.makeDeposit(1000))
println(myAccount.withdraw(300))

val newAccount = new BankAccount(32189389)
println(newAccount.balance)
// println(newAccount._balance) // cannot acces, variable is private, wil caues an error
// newAccount._balance = 1000 // same as the above
println()
// Cwiczenie 3

case class Person(var name: String, var surname: String){}

def greet(person: Person): String = {
  person match {
    case Person("Tomasz", "Pieciuklewicz") => "Dzień dobry Panie Profesorze!"
    case Person("Marcin", "Kropacz") => "Cześć!"
    case Person("Andrzej","Kropacz") => "Hej!"
    case _ => "Dzień Dobry"
  }
}

println(greet(new Person("Tomasz", "Pieciuklewicz")))
println(greet(new Person("Marcin", "Kropacz")))
println(greet(new Person("Andrzej", "Kropacz")))
println(greet(new Person("Andrzej", "Kowalski")))
println()

// // Cwiczenie 4

def applyThreeTimes(integer: Int, function: (Int) => Int): Int = {
  return function(function(function(integer)))
}

print(applyThreeTimes(3, (x) => (x + 1)))


println()

// Cwiczenie 5

abstract class NewPerson (val name: String, val surname: String){
  def tax: Double
}

trait Student extends NewPerson {
   override def tax = 0.0
}

trait Employee extends NewPerson {
  private var _salary = 0.0
  def salary = _salary
  def salary_= (value: Double): Unit = _salary = value
  override def tax = _salary * 0.2
}

trait Teacher extends Employee {
  override def tax = salary * 0.1
}


var janek = new NewPerson("Jan", "Kowalski") with Student
var ania = new NewPerson("Anna", "Nowak") with Employee
var seba = new NewPerson("Sebastian", "Luczak") with Teacher
ania.salary = 1000
seba.salary = 1000
println(ania.tax)
println(seba.tax)

var me = new NewPerson("Marcin", "Kropacz") with Student with Employee
var brother = new NewPerson("Andrzej", "Kropacz") with Employee with Student

me.salary = 1000
brother.salary = 1000
println(me.tax)
println(brother.tax)
