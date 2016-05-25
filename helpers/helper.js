var _ = require("lodash");

// Result: helloworld
// TODO: Remove spaces
String.prototype.lower = function () {
	return _.lowerCase(this);
};

// Result: HELLOWORLD
String.prototype.upper = function () {
	return _.upperCase(this);
};

// Result: HelloWorld
String.prototype.pascal = function () {
	return _.upperFirst(this);
};

// Result: helloWorld
String.prototype.camel = function () {
	return _.camelCase(this);
};

String.prototype.removeWhitespaces = function () {
	return this.replace(/\s+/g, '');
}