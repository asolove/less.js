(function (tree) {

tree.Anonymous = function (string) {
    this.value = string.value || string;
};
tree.Anonymous.prototype = {
    toCSS: function () {
        return this.value;
    },
    eval: function () { return this },
    toGraph: function(env){
        if(this.value.toGraph) this.value.toGraph(env);
    }
};

})(require('../tree'));
