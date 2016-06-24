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


// Enter a parse tree produced by helloParser#printExpr.
helloListener.prototype.enterPrintExpr = function(ctx) {
};

// Exit a parse tree produced by helloParser#printExpr.
helloListener.prototype.exitPrintExpr = function(ctx) {
};


// Enter a parse tree produced by helloParser#assign.
helloListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by helloParser#assign.
helloListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by helloParser#blank.
helloListener.prototype.enterBlank = function(ctx) {
};

// Exit a parse tree produced by helloParser#blank.
helloListener.prototype.exitBlank = function(ctx) {
};


// Enter a parse tree produced by helloParser#id.
helloListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by helloParser#id.
helloListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by helloParser#int.
helloListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by helloParser#int.
helloListener.prototype.exitInt = function(ctx) {
};


// Enter a parse tree produced by helloParser#AddSub.
helloListener.prototype.enterAddSub = function(ctx) {
};

// Exit a parse tree produced by helloParser#AddSub.
helloListener.prototype.exitAddSub = function(ctx) {
};


// Enter a parse tree produced by helloParser#parens.
helloListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by helloParser#parens.
helloListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by helloParser#MulDiv.
helloListener.prototype.enterMulDiv = function(ctx) {
};

// Exit a parse tree produced by helloParser#MulDiv.
helloListener.prototype.exitMulDiv = function(ctx) {
};



exports.helloListener = helloListener;