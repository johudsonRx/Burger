var orm = require('../config/orm.js');


var burger = {
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	}
};


module.exports = burger;

// orm.all('burgers', function(data){
// 	console.log(data);
// 	// callback(result);
// })

// orm.create('burgers', 'burger_name' [req.body.name], function(data){
//    console.log(data)
// })

// orm.update()



// module.exports = burgers;

// orm.create('burgers', '', '', function(data){
// 	console.log(data);
// })

// orm.update('')

// orm.create('burgers', 'burger_name',  )

// orm.update('')

// orm.delete()



