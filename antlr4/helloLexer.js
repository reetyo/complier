// Generated from hello.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\r=\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0006\t)\n\t\r\t\u000e\t*\u0003\n\u0006\n.",
    "\n\n\r\n\u000e\n/\u0003\u000b\u0005\u000b3\n\u000b\u0003\u000b\u0003",
    "\u000b\u0003\f\u0006\f8\n\f\r\f\u000e\f9\u0003\f\u0003\f\u0002\u0002",
    "\r\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0003\u0002\u0005\u0004\u0002",
    "C\\c|\u0003\u00022;\u0004\u0002\u000b\u000b\"\"@\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0003\u0019\u0003\u0002\u0002\u0002\u0005\u001b\u0003\u0002",
    "\u0002\u0002\u0007\u001d\u0003\u0002\u0002\u0002\t\u001f\u0003\u0002",
    "\u0002\u0002\u000b!\u0003\u0002\u0002\u0002\r#\u0003\u0002\u0002\u0002",
    "\u000f%\u0003\u0002\u0002\u0002\u0011(\u0003\u0002\u0002\u0002\u0013",
    "-\u0003\u0002\u0002\u0002\u00152\u0003\u0002\u0002\u0002\u00177\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007?\u0002\u0002\u001a\u0004\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007,\u0002\u0002\u001c\u0006\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u00071\u0002\u0002\u001e\b\u0003\u0002",
    "\u0002\u0002\u001f \u0007-\u0002\u0002 \n\u0003\u0002\u0002\u0002!\"",
    "\u0007/\u0002\u0002\"\f\u0003\u0002\u0002\u0002#$\u0007*\u0002\u0002",
    "$\u000e\u0003\u0002\u0002\u0002%&\u0007+\u0002\u0002&\u0010\u0003\u0002",
    "\u0002\u0002\')\t\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+\u0012\u0003\u0002\u0002\u0002,.\t\u0003\u0002\u0002-,\u0003\u0002",
    "\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003",
    "\u0002\u0002\u00020\u0014\u0003\u0002\u0002\u000213\u0007\u000f\u0002",
    "\u000221\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u000234\u0003\u0002",
    "\u0002\u000245\u0007\f\u0002\u00025\u0016\u0003\u0002\u0002\u000268",
    "\t\u0004\u0002\u000276\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u0002",
    "97\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;<\b\f\u0002\u0002<\u0018\u0003\u0002\u0002\u0002\u0007\u0002",
    "*/29\u0003\b\u0002\u0002"].join("");


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
helloLexer.T__6 = 7;
helloLexer.ID = 8;
helloLexer.INT = 9;
helloLexer.NEWLINE = 10;
helloLexer.WS = 11;


helloLexer.modeNames = [ "DEFAULT_MODE" ];

helloLexer.literalNames = [ null, "'='", "'*'", "'/'", "'+'", "'-'", "'('", 
                            "')'" ];

helloLexer.symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ID", "INT", "NEWLINE", "WS" ];

helloLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                         "T__6", "ID", "INT", "NEWLINE", "WS" ];

helloLexer.grammarFileName = "hello.g4";



exports.helloLexer = helloLexer;

