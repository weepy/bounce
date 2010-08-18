Bounce
====

Simple program that runs a child process whilst watching a directory for file changes.
If a file within that dir is modified, the child process is restarted.

Usage
----

bin/bounce path/to/watch/dir prog/to/run arg1 arg2

Install
-----

sudo cp bin/bounce /usr/local/bin


Why?
---

It was written for use with Node (which doesn't auto restart)

Test
----

Run:

bin/bounce test/watch node test/test.js

Changes to test/watch/file.js should cause the counter to restart