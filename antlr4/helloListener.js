// Generated from hello.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by helloParser.
function helloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

helloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
helloListener.prototype.constructor = helloListener;

// Enter a parse tree produced by helloParser#prog.
helloListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by helloParser#prog.
helloListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by helloParser#stat.
helloListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by helloParser#stat.
helloListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by helloParser#expr.
helloListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by helloParser#expr.
helloListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by helloParser#multExpr.
helloListener.prototype.enterMultExpr = function(ctx) {
};

// Exit a parse tree produced by helloParser#multExpr.
helloListener.prototype.exitMultExpr = function(ctx) {
};


// Enter a parse tree produced by helloParser#atom.
helloListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by helloParser#atom.
helloListener.prototype.exitAtom = function(ctx) {
};



exports.helloListener = helloListener;