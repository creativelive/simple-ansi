/*eslint handle-callback-err:0 */
'use strict';
var test = require('tape');
var ansi = require('..');

test('should make a request', function(t) {
  t.plan(1);

  var str = ansi.bold + ansi.red + 'HELLO' + ansi.reset;
  t.equal(str, '\x1b[1m\x1b[31mHELLO\x1b[0m');
});
