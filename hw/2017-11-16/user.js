function User(event) {
	//event是从tcpmain传来的一个全局变量
	this.event = event;
	console.log('user: constructor');
}
User.prototype.register = function(username, password, email) {
	console.log("user: register");
	this.username = username;
	this.password = password;
	this.email = email;
};
exports.User = User;