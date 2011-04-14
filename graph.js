/* 	graph.js http://github.com/bgrins/javascript-astar
	MIT License
	
	Creates a Graph class used in the astar search algorithm.
	Includes Binary Heap (with modifications) from Marijn Haverbeke 
		URL: http://eloquentjavascript.net/appendix2.html
		License: http://creativecommons.org/licenses/by/3.0/
*/

var GraphNodeType = require('./graphnodetype');
var GraphNode     = require('./graphnode');

module.exports = function(grid) {
	this.elements = grid;
	this.nodes = [];

	for (var x = 0, len = grid.length; x < len; ++x) {
		var row = grid[x];
		this.nodes[x] = [];
		for (var y = 0, l = row.length; y < l; ++y) {
			console.log('setting grid item ', x, ',', y);
			this.nodes[x].push(new GraphNode(x, y, row[y]));
		}
	}
}
module.exports.prototype.toString = function() {
	var graphString = "\n";
	var nodes = this.nodes;
	this.max_x = nodes.length
	for (var x = 0, len = max_x; x < len; ++x) {
		var rowDebug = "";
		var row = nodes[x];
		if (!this.max_y){this.max_y = row.length;};
		
		for (var y = 0, l = this.max_y; y < l; ++y) {
			rowDebug += row[y].type + " ";
		}
		graphString = graphString + rowDebug + "\n";
	}
	return graphString;
};

module.exports.prototype.get_node = function(x, y){
	if ((x < 0) || (x > this.max_x)){
		throw  new Error(__filename + ':: get_node - x(' + x + ') is outside the range [0..' + this.max_x + ']');
	}
	if ((y < 0) || (y > this.max_y)){
		throw  new Error(__filename + ':: get_node - x(' + x + ') is outside the range [0..' + this.max_y + ']');
	}
	
	var row = this.nodes[x];
	if (!row) throw new Error(__filename + ':: cannot get row ' + x);
	
	var node = row[y];
	if (!node) throw new Error(__filename + ':: cannot get cell ' + y);
	
	return node;
}




