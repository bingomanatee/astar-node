var GraphNodeType = require('./graphnodetype');

module.exports = function(x,y,type) {
	this.data = { };
	this.x = x;
	this.y = y;
	this.pos = {x:x, y:y};
	this.type = type;
}

module.exports.prototype.toString = function() {
	return "[" + this.x + " " + this.y + "]";
};
module.exports.prototype.isWall = function() {
	return this.type == GraphNodeType.WALL;
};
