Bounce
====

Reloads node upon changes to source files. 
Great for development.

How?
----

Runs node as child process whilst watching JS file in the current directory and below for changes.
If a change is detected, the node child process is restarted. It also looks for new files JS every 10s.

All STDOUT AND STDERR should be piped back to the console, so it shouldn't look any different.

Install
-----

sudo bin/install

Usage
----

simply replace 'node' for 'bounce'. E.g.

bounce lib/server.js


Running Tests
----

* bin/bounce test/test.js

  Changes to test.js and watch/file.js should cause the counter to restart.

* bin/bounce test/error.js
  Should throw an error and exit immediately

Tested on Ubuntu/OSX on Node 0.2.0 and 0.1.104

Todo
----

* how to handle watching different directories than CWD ?
