var sys = require("sys");
var less = require('./lib/less');

var lessString = "@blue: #00f; html { body { div { &.active { color: @blue; }}}}";
var parser = new less.Parser();

parser.parse(lessString, function(e, tree){
    if(e) return console.log("Error parsing: " + e.toString());
    var graph = {};
    tree.toGraph([], "", graph);
    console.log(sys.inspect(graph));
    return true;
});