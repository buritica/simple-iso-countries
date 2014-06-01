DEFAULT:
	make test

test:
	./node_modules/.bin/mocha test/**/*.spec.js

.PHONY: \
	DEFAULT \
	test \