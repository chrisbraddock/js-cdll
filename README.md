JS CDLL
=======

A JavaScript implementation of the [Circular Doubly-Linked List data structure](http://en.wikipedia.org/wiki/Doubly_linked_list#Circular_doubly-linked_lists)

Influenced by:

* [http://blog.jcoglan.com/2007/07/23/writing-a-linked-list-in-javascript/](http://blog.jcoglan.com/2007/07/23/writing-a-linked-list-in-javascript/) and
* [http://www.nczonline.net/blog/2009/04/21/computer-science-in-javascript-doubly-linked-lists/](http://www.nczonline.net/blog/2009/04/21/computer-science-in-javascript-doubly-linked-lists/)
* and [Brophdawg](https://github.com/brophdawg11) for the object structuring pattern

license: The MIT License (MIT)

author: Chris Braddock ([braddock.chris@gmail.com](mailto:braddock.chris@gmail.com))

CDLL provides the following methods:
	
* **seed(Array)** - populate the CDLL
* **add(item)** - add an item to the CDLL
* **addArray(Array)** - add an array of items to the CDLL
* **insertAfter(node, item)** - insert an item after another item in the CDLL
* **remove(node)** - remove an item from the CDLL
* **rotate(+/-Integer)** - rotate the CDLL (like a corousel)
* **setCurrent(node)** - set the current item in the CDLL
* **toArray()** - return the items of the CDLL in an array
* **first()** - get the first item in the CDLL
* **first().next() [.next()|.prev()] [.next()|.prev()] [...]** - get subsequent items in the CDLL
* **first().prev() [.next()|.prev()] [.next()|.prev()] [...]** - get previous items in the CDLL

### Example Usage:

    // Instantiate a CDLL (separate seeding step)
    var cdll = new CDLL();
    cdll.seed(['a', 'b', 'c']);				// ['a', 'b', 'c']

    // Instantiate and seed a CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']

	// Add an item to the CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.add('d');							// ['a', 'b', 'c', 'd']

	// Add an array of items to the CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.add(['x', 'y', 'z']);			    // ['a', 'b', 'c', 'x', 'y', 'z']

	// Insert an item in to the CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.insertAfter(cdll.first(), '1');	// ['a', '1', 'b', 'c']

	// Remove an item from the CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.remove(cdll.first());				// ['b', 'c']

	// Rotate the CDLL (forward)
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.rotate(1);
	cdll.first();							// 'b'
    cdll.last(); 							// 'a'

	// Rotate the CDLL (backward)
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.rotate(-1);
	cdll.first();							// 'c'
	cdll.last();							// 'a'

	// Set the current CDLL item
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.first();							// 'a'
	cdll.setCurrent(cdll.first().next());
	cdll.first();							// 'b'
	
	// Get the CDLL as an array
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
	cdll.toArray();         			    // ['a', 'b', 'c'] (as the return value of the fn)

	// Get items of the CDLL
    var cdll = new CDLL(['a', 'b', 'c']]);	// ['a', 'b', 'c']
    cdll.first(); 							// 'a'
    cdll.first().next(); 					// 'b'
    cdll.last(); 							// 'c'
    cdll.first().next().next();				// 'c'
    cdll.first().prev(); 					// 'b'

### Contributing:

Fork. Write one or more tests and maybe some code. Submit a pull request.

### TODO:

* bower.js registration
* checkout https://github.com/chenglou/data-structures/wiki/LinkedList for comparison
* html demo page
* more tests
* jsperf tests
* example on jsbin
* make work as a node module
* destroy() method