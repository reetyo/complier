// Generated from hello.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var helloListener = require('./helloListener').helloListener;
var grammarFileName = "hello.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\f+\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0011\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e\u0004\u0019\u000b",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u001e\n\u0005",
    "\f\u0005\u000e\u0005!\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006)\n\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0004\u0003\u0002\u0003",
    "\u0004\u0003\u0002\u0005\u0006*\u0002\f\u0003\u0002\u0002\u0002\u0004",
    "\u0010\u0003\u0002\u0002\u0002\u0006\u0012\u0003\u0002\u0002\u0002\b",
    "\u001a\u0003\u0002\u0002\u0002\n(\u0003\u0002\u0002\u0002\f\r\u0005",
    "\u0004\u0003\u0002\r\u0003\u0003\u0002\u0002\u0002\u000e\u0011\u0005",
    "\u0006\u0004\u0002\u000f\u0011\u0007\u000b\u0002\u0002\u0010\u000e\u0003",
    "\u0002\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0005\u0003",
    "\u0002\u0002\u0002\u0012\u0017\u0005\b\u0005\u0002\u0013\u0014\t\u0002",
    "\u0002\u0002\u0014\u0016\u0005\b\u0005\u0002\u0015\u0013\u0003\u0002",
    "\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0007\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001f\u0005\n",
    "\u0006\u0002\u001b\u001c\t\u0003\u0002\u0002\u001c\u001e\u0005\n\u0006",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \t\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002\"#",
    "\u0007\u0007\u0002\u0002#$\u0005\u0006\u0004\u0002$%\u0007\b\u0002\u0002",
    "%)\u0003\u0002\u0002\u0002&)\u0007\n\u0002\u0002\')\u0007\t\u0002\u0002",
    "(\"\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002",
    "\u0002\u0002)\u000b\u0003\u0002\u0002\u0002\u0006\u0010\u0017\u001f",
    "("].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "ID", "INT", 
                      "NEWLINE", "WS" ];

var ruleNames =  [ "prog", "stat", "expr", "multExpr", "atom" ];

function helloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

helloParser.prototype = Object.create(antlr4.Parser.prototype);
helloParser.prototype.constructor = helloParser;

Object.defineProperty(helloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

helloParser.EOF = antlr4.Token.EOF;
helloParser.T__0 = 1;
helloParser.T__1 = 2;
helloParser.T__2 = 3;
helloParser.T__3 = 4;
helloParser.T__4 = 5;
helloParser.T__5 = 6;
helloParser.ID = 7;
helloParser.INT = 8;
helloParser.NEWLINE = 9;
helloParser.WS = 10;

helloParser.RULE_prog = 0;
helloParser.RULE_stat = 1;
helloParser.RULE_expr = 2;
helloParser.RULE_multExpr = 3;
helloParser.RULE_atom = 4;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function() {
    return this.getTypedRuleContext(StatContext,0);
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitProg(this);
	}
};




helloParser.ProgContext = ProgContext;

helloParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, helloParser.RULE_prog);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.stat();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatContext.prototype.NEWLINE = function() {
    return this.getToken(helloParser.NEWLINE, 0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitStat(this);
	}
};




helloParser.StatContext = StatContext;

helloParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, helloParser.RULE_stat);
    try {
        this.state = 14;
        switch(this._input.LA(1)) {
        case helloParser.T__4:
        case helloParser.ID:
        case helloParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.expr();
            break;
        case helloParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.match(helloParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.multExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultExprContext);
    } else {
        return this.getTypedRuleContext(MultExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitExpr(this);
	}
};




helloParser.ExprContext = ExprContext;

helloParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, helloParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.multExpr();
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===helloParser.T__0 || _la===helloParser.T__1) {
            this.state = 17;
            _la = this._input.LA(1);
            if(!(_la===helloParser.T__0 || _la===helloParser.T__1)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 18;
            this.multExpr();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_multExpr;
    return this;
}

MultExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultExprContext.prototype.constructor = MultExprContext;

MultExprContext.prototype.atom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AtomContext);
    } else {
        return this.getTypedRuleContext(AtomContext,i);
    }
};

MultExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterMultExpr(this);
	}
};

MultExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitMultExpr(this);
	}
};




helloParser.MultExprContext = MultExprContext;

helloParser.prototype.multExpr = function() {

    var localctx = new MultExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, helloParser.RULE_multExpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.atom();
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===helloParser.T__2 || _la===helloParser.T__3) {
            this.state = 25;
            _la = this._input.LA(1);
            if(!(_la===helloParser.T__2 || _la===helloParser.T__3)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 26;
            this.atom();
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = helloParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AtomContext.prototype.INT = function() {
    return this.getToken(helloParser.INT, 0);
};

AtomContext.prototype.ID = function() {
    return this.getToken(helloParser.ID, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof helloListener ) {
        listener.exitAtom(this);
	}
};




helloParser.AtomContext = AtomContext;

helloParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, helloParser.RULE_atom);
    try {
        this.state = 38;
        switch(this._input.LA(1)) {
        case helloParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.match(helloParser.T__4);
            this.state = 33;
            this.expr();
            this.state = 34;
            this.match(helloParser.T__5);
            break;
        case helloParser.INT:
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(helloParser.INT);
            break;
        case helloParser.ID:
            this.enterOuterAlt(localctx, 3);
            this.state = 37;
            this.match(helloParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.helloParser = helloParser;
