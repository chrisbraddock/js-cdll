(function (global, undefined) {

    // a circular doubly-linked list JavaScript implementation
    //
    // http://en.wikipedia.org/wiki/Doubly_linked_list
    //
    // influenced by:
    //     http://blog.jcoglan.com/2007/07/23/writing-a-linked-list-in-javascript/ and
    //     http://www.nczonline.net/blog/2009/04/21/computer-science-in-javascript-doubly-linked-lists/
    //     and Brophdawg (https://github.com/brophdawg11) for the object structuring pattern
    //
    // license: The MIT License (MIT)
    //  author: Chris Braddock (braddock.chris@gmail.com)

    // Constructor
    function CDLL(datum) {

        // Private variables
        // -----------------

        var self = this,

            // the number of nodes in the CDLL
            _nodeCount = 0,

            // pointer to the first node in the CDLL
            _first = null,

            // pointer to the last node in the CDLL
            _last = null;

        // Public functions
        // ----------------

        // populate the CDLL
        // TODO currently does not empty the CDLL; probably should
        this.seed = function (datum) {
            if (!Array.isArray(datum)) { return this; }
            datum.forEach(function (data) {
                self.add(data);
            });
            return this;
        };

        // adds (appends) an object to the end of the CDLL
        // takes an item or an array of items
        this.add = function (data) {
            addOne(this, data);
            return this;
        };

        // adds (appends) an array of objects to the end of the CDLL
        this.addArray = function (data) {
            var self = this;
            if (Array.isArray(data)) {
                data.forEach(function (datum) {
                    addOne(self, datum);
                });
            }
            return this;
        };

        // inserts an object after another object in the CDLL
        this.insertAfter = function (node, data) {
            var newNode;
            if (!isChildNode(this, node)) { return false; }
            newNode = createNode(this, data);
            newNode.prev(node);
            newNode.next(node.next());
            node.next().prev(newNode);
            node.next(newNode);
            if (newNode.prev() === _last) { _last = newNode; }
            _nodeCount++;
            return true;
        };

        // remove an object from the CDLL
        this.remove = function (node) {
            if (_nodeCount > 1) {
                node.prev().next(node.next());
                node.next().prev(node.prev());
                if (node === _first) { _first = node.next(); }
                if (node === _last) { _last = node.prev(); }
            } else {
                _first = null;
                _last = null;
            }
            node.prev(null);
            node.next(null);
            _nodeCount--;
            return this;
        };

        // rotate the CDLL (like a carousel) - changes first() and last()
        // offset param is positive or negative integer indicating the
        // number of positions by which the CDLL is moved
        this.rotate = function (offset) {
            var current = _first,
                index = 0;
            if (offset === 0) { return this; }
            if (offset > 0) {
                while (index < offset) {
                    current = current.next();
                    index++;
                }
            } else if (offset < 0) {
                while (index > offset) {
                    current = current.prev();
                    index--;
                }
            }
            _first = current;
            _last = current.prev();
            return this;
        };

        // set the current node; true on success; false on failure
        this.setCurrent = function (data) {
            var node = findNodeByData(data),
                count = 1;
            if (node === null) { return false; }
            while (this.first() !== node) {
                this.rotate(1);
                if (count > _nodeCount) { return false; }
                count++;
            }
            return true;
        };

        // returns the CDLL objects in an Array
        this.toArray = function () {
            var result = [],
                current = _first;
            while (current) {
                result.push(current.data);
                current = current.next() !== _first ? current.next() : null;
            }
            return result;
        };

        // gets the first node in the CDLL
        this.first = function first () {
            return _first;
        };

        // gets the last node in the CDLL
        this.last = function last () {
            return _last;
        };

        // Private functions
        // -----------------

        // Node constructor
        function Node (cdll, data) {
            var _next = null,
                _prev = null;

            this.cdll = cdll;
            this.data = data;

            // getter/setter
            this.next = function (node) {
                if (node instanceof Node && isChildNode(this.cdll, node)) { _next = node; }
                return _next;
            };

            // getter/setter
            this.prev = function (node) {
                if (node instanceof Node && isChildNode(this.cdll, node)) { _prev = node; }
                return _prev;
            };
        }

        // create a node
        function createNode (cdll, data) {
            return new Node(cdll, data);
        }

        // find a node based on its data
        function findNodeByData (data) {
            var count = 0,
                tryNode = _first,
                foundNode = null;
            while (count < _nodeCount) {
                if (tryNode.data === data) {
                    foundNode = tryNode;
                    break;
                }
                tryNode = tryNode.next();
                count++;
            }
            return foundNode;
        }

        // check that a node exists in this CDLL
        function isChildNode(cdll, node2) {
            return (cdll != null &&
                    node2 != null &&
                    'cdll' in node2 &&
                    cdll === node2.cdll);
        }

        // adds one item to the CDLL
        function addOne(cdll, data) {
            var node = createNode(cdll, data);
            if (_first === null) {
                node.prev(node);
                node.next(node);
                _first = node;
                _last = node;
            } else {
                node.prev(_last);
                node.next(_first);
                _first.prev(node);
                _last.next(node);
                _last = node;
            }
            _nodeCount++;
        }

        // Initialization
        // -----------------

        // if initialized with data, seed the CDLL now
        if (datum) { this.seed(datum); }

        // allow chaining
        return this;

    }

    // Static functions
    // ----------------
    // (currently none)

    // expose the object
    global.CDLL = CDLL;

}(this));
