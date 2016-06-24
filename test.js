   var antlr4 = require('/usr/local/lib/node_modules/antlr4')
   var helloLexer = require('/Users/cairo/Documents/WorkSpace/Node.js/complier/antlr4/helloLexer')
   var helloParser = require('/Users/cairo/Documents/WorkSpace/Node.js/complier/antlr4/helloParser')

   var input = "1+2 \r\n"
   var chars = new antlr4.InputStream(input);
   var lexer = new helloLexer.helloLexer(chars);
   var tokens  = new antlr4.CommonTokenStream(lexer);
   var parser = new helloParser.helloParser(tokens);
   var tree = parser.prog();
   parser.buildParseTrees = true;
   console.log(tree.toStringTree(parser));
   // parser.buildParseTrees = true;
   // var tree = parser.MyStartRule();