var student = require('./student')
var teacher = require('./teacher')


function add(techerName, students){
	teacher.add(techerName)
	
	students.forEach(function(item, index){
		student.add(item)
	})
}

exports.add = add

