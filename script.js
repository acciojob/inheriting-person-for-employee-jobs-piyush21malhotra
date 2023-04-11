// complete this js code
function Person(name, age) {
	constructor(name, age){
		this.name = name
		this.age = age
	}

	greet() {
		console.log("Hello, my name is , ", this.name ," I am ", this.age,  " years old.")
	}
}

function Employee(name, age, jobTitle) extends Person{
	super(name,age)
	constructor(name, age, jobTitle){
		this.name = super.name
		this.age = super.age
		this.jobTitle = jobTitle
	}

	jobGreet() {
		console.log("Hello, my name is , ", super.name ," I am ", super.age,  " years old, and my job title is ", this.jobTitle)
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
