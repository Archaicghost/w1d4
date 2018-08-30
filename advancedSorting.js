var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 } 
  ];

var sortedStudents = students.sort(function(a, b){

	if (a.age < b.age) {
		return a.age

	} else if (a.name === b.name){
     //sort string ascending
        return false 

	}else if (a.name > b.name) {
        return true

    }else { return 0 //default return value (no sorting)

    }
});
console.log(sortedStudents)
