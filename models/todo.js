
//model

var fs = require('fs');

var Todo = {};

Todo.find = function(cb) {
  fs.readFile('db/todos.json', function (err, data) {
    if(err){
      cb(err);
    } else {
      var todos = JSON.parse(data);
      cb(null, todos);
    }
  });
};

Todo.create = function(todo, cb){
	Todo.find(function(err, todos){
		// since the below is a one line if, so
		// no brackets are required and it can be written 
		// on one line
		if(err) return cb(err);
		//below will be defaulted as an else because
		// the if will return and kick out
		cb(null)
		//find (above) will return an array of todos and
		//that is where we will be pushing it
		todos.push(todo);

		var data = JSON.stringify(todos);

		fs.writeFile("db/todos.json", data, function(err){
			if(err) return cb(err);

		cb(null)
		//find (above) will return an array of todos and
		//that is where we will be pushing it

		});
	})
};

module.exports = Todo;

/*
/// for local file storage (JSON)
1 read data
2 parse data
3 modify the data
4 stringify data
5 write data
*/
