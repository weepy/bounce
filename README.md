Bounce
====

Reloads process upon changes to source files and exceptions. 
Great for development.

How?
----

Runs node as child process whilst watching specified files changes.
If a change is detected, the child process is restarted.

All STDOUT AND STDERR should be piped back to the console, so it shouldn't look any different.

Install
-----

npm install bounce

Usage
----

bounce [-r] [-g] -w 'dir1,dir2' 'command_to_run -a -b arg1 arg2' 

-w: watch paths, comma separated. If using globs (*) then must be wrapped in quotes, e.g. 'lib/*.*' 
-r: respawn on child process exit
-g: growl notify on child process exit (needs growlnotify)
-h: show this usage

Running Tests
-----

* bin/bounce -r -g -w "*" "test/*.js,test/*/*.js" "node test/test.js"

  Changes to test.js and watch/file.js should cause the counter to restart.
  Counter should restart after 10 s (due to exception being thrown)

* bin/bounce "node test/error.js"
  Should throw an error and exit immediately

Tested on Ubuntu/OSX on Node 0.2.3