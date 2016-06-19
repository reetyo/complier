// Generated from hello.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\f9\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0006\b%\n\b\r\b\u000e\b&\u0003\t\u0006\t*\n\t\r\t\u000e\t+\u0003\n",
    "\u0005\n/\n\n\u0003\n\u0003\n\u0003\u000b\u0006\u000b4\n\u000b\r\u000b",
    "\u000e\u000b5\u0003\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0003\u0002\u0004\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"<\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003\u0002",
    "\u0002\u0002\u0007\u001b\u0003\u0002\u0002\u0002\t\u001d\u0003\u0002",
    "\u0002\u0002\u000b\u001f\u0003\u0002\u0002\u0002\r!\u0003\u0002\u0002",
    "\u0002\u000f$\u0003\u0002\u0002\u0002\u0011)\u0003\u0002\u0002\u0002",
    "\u0013.\u0003\u0002\u0002\u0002\u00153\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0007-\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019",
    "\u001a\u0007/\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0007,\u0002\u0002\u001c\b\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u00071\u0002\u0002\u001e\n\u0003\u0002\u0002\u0002\u001f \u0007*\u0002",
    "\u0002 \f\u0003\u0002\u0002\u0002!\"\u0007+\u0002\u0002\"\u000e\u0003",
    "\u0002\u0002\u0002#%\t\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%",
    "&\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002",
    "\u0002\'\u0010\u0003\u0002\u0002\u0002(*\u00042;\u0002)(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003",
    "\u0002\u0002\u0002,\u0012\u0003\u0002\u0002\u0002-/\u0007\u000f\u0002",
    "\u0002.-\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u000201\u0007\f\u0002\u00021\u0014\u0003\u0002\u0002\u000224",
    "\t\u0003\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u0002",
    "53\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002",
    "\u000278\b\u000b\u0002\u00028\u0016\u0003\u0002\u0002\u0002\u0007\u0002",
    "&+.5\u0003\u0003\u000b\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function helloLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

helloLexer.prototype = Object.create(antlr4.Lexer.prototype);
helloLexer.prototype.constructor = helloLexer;

helloLexer.EOF = antlr4.Token.EOF;
helloLexer.T__0 = 1;
helloLexer.T__1 = 2;
helloLexer.T__2 = 3;
helloLexer.T__3 = 4;
helloLexer.T__4 = 5;
helloLexer.T__5 = 6;
helloLexer.ID = 7;
helloLexer.INT = 8;
helloLexer.NEWLINE = 9;
helloLexer.WS = 10;


helloLexer.modeNames = [ "DEFAULT_MODE" ];

helloLexer.literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];

helloLexer.symbolicNames = [ null, null, null, null, null, null, null, "ID", 
                             "INT", "NEWLINE", "WS" ];

helloLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                         "ID", "INT", "NEWLINE", "WS" ];

helloLexer.grammarFileName = "hello.g4";


helloLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 9:
		this.WS_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

helloLexer.prototype.WS_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		skip();
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.helloLexer = helloLexer;

