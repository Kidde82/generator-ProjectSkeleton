function Helper() {
	this.toLower = function(str) {
		return str.toLower();
	}
}

module.exports = new Helper();