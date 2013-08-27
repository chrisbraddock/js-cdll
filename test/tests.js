(function (global, undefined) {

    // instantiation without seeding
    test("instantiate without seed", function() {
        var cdll = new CDLL();
        equal(cdll.first(), null, "first() should be null");
        equal(cdll.last(), null, "last() should be null");
        throws(function () { cdll.first().next(); }, "first() next() method should not be available");
        throws(function () { cdll.last().next(); }, "last() next() method should not be available");
    });

    // instantiation with seeding, single element array
    test("single element", function() {
        var arr = ['a'],
            cdll = new CDLL(arr);
        equal(cdll.first().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().prev().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().prev().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().prev().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().next().prev().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().next().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().next().next().prev().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().prev().next().data, arr[0], "any reference should point to the first (only) element");
        equal(cdll.first().prev().prev().prev().data, arr[0], "any reference should point to the first (only) element");
    });

    // instantiation with seeding, multiple element array
    test("multiple element", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr);
        equal(cdll.first().data, 1, "first() should point to first element");
        equal(cdll.first().next().data, 2, "first() next() should point to second element");
        equal(cdll.first().prev().data, 9, "first() prev() should point to ninth element");
        equal(cdll.first().next().next().data, 3, "first() next() next() should point to the third element");
        equal(cdll.first().prev().prev().data, 8, "first() prev() prev() should point to the eighth element");
        equal(cdll.first().next().prev().data, 1, "first() next() prev() should point to the first element");
        equal(cdll.first().prev().next().data, 1, "first() prev() next() should point to the first element");
        equal(cdll.first().next().prev().next().data, 2, "first() next() prev() next() should point to the second element");
        equal(cdll.first().prev().next().prev().data, 9, "first() prev() next() prev() should point to the ninth element");
        equal(cdll.first().next().next().next().data, 4, "first() next() next() prev() should point to the fourth element");
        equal(cdll.first().next().next().prev().data, 2, "first() next() next() prev() should point to the second element");
        equal(cdll.first().prev().prev().next().data, 9, "first() prev() prev() next() should point to the ninth element");
        equal(cdll.first().prev().prev().prev().data, 7, "first() prev() prev() prev() should point to the seventh element");
    });

    // post-instantiation seeding
    test("post instantiation seeding", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL();
        cdll.seed(arr);
        equal(cdll.first().data, 1, "first() should point to first element");
        equal(cdll.first().next().data, 2, "first() next() should point to second element");
        equal(cdll.first().prev().data, 9, "first() prev() should point to ninth element");
        equal(cdll.first().next().next().data, 3, "first() next() next() should point to the third element");
        equal(cdll.first().prev().prev().data, 8, "first() prev() prev() should point to the eighth element");
        equal(cdll.first().next().prev().data, 1, "first() next() prev() should point to the first element");
        equal(cdll.first().prev().next().data, 1, "first() prev() next() should point to the first element");
        equal(cdll.first().next().prev().next().data, 2, "first() next() prev() next() should point to the second element");
        equal(cdll.first().prev().next().prev().data, 9, "first() prev() next() prev() should point to the ninth element");
        equal(cdll.first().next().next().next().data, 4, "first() next() next() prev() should point to the fourth element");
        equal(cdll.first().next().next().prev().data, 2, "first() next() next() prev() should point to the second element");
        equal(cdll.first().prev().prev().next().data, 9, "first() prev() prev() next() should point to the ninth element");
        equal(cdll.first().prev().prev().prev().data, 7, "first() prev() prev() prev() should point to the seventh element");
    });

    // chained instantiation/seeding
    test("chaining instantiation and seeding", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL().seed(arr);
        equal(cdll.first().data, 1, "first() should point to first element");
        equal(cdll.first().next().data, 2, "first() next() should point to second element");
        equal(cdll.first().prev().data, 9, "first() prev() should point to ninth element");
        equal(cdll.first().next().next().data, 3, "first() next() next() should point to the third element");
        equal(cdll.first().prev().prev().data, 8, "first() prev() prev() should point to the eighth element");
        equal(cdll.first().next().prev().data, 1, "first() next() prev() should point to the first element");
        equal(cdll.first().prev().next().data, 1, "first() prev() next() should point to the first element");
        equal(cdll.first().next().prev().next().data, 2, "first() next() prev() next() should point to the second element");
        equal(cdll.first().prev().next().prev().data, 9, "first() prev() next() prev() should point to the ninth element");
        equal(cdll.first().next().next().next().data, 4, "first() next() next() prev() should point to the fourth element");
        equal(cdll.first().next().next().prev().data, 2, "first() next() next() prev() should point to the second element");
        equal(cdll.first().prev().prev().next().data, 9, "first() prev() prev() next() should point to the ninth element");
        equal(cdll.first().prev().prev().prev().data, 7, "first() prev() prev() prev() should point to the seventh element");
    });

    // test addition
    test("adding items", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr),
            arrItem;

        // add a single item
        cdll.add('a');
        equal(cdll.last().data, 'a', "add a single item");

        // add an array as a single item
        arrItem = {item: ['b', 'c', 'd']};
        cdll.add(arrItem);
        equal(cdll.last().data, arrItem, "add an array as a single item");

        // add an array of items
        cdll.addArray(['b', 'c', 'd']);
        equal(cdll.last().data, 'd', "adding an array of items");
    });

    // test insertAfter
    test("insert after", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr);

        // basic insertion
        cdll.insertAfter(cdll.first(), 'a');
        equal(cdll.first().data, 1, "first element should equal 1");
        equal(cdll.first().next().data, 'a', "second element should equal 'a'");
        equal(cdll.first().next().next().data, 2, "third element should equal 2");

        // test invalid insertion
        cdll.insertAfter(null, 'b');
        equal(cdll.first().data, 1, "first element should equal 1");
        equal(cdll.first().next().data, 'a', "second element should equal a");
        equal(cdll.first().next().next().data, 2, "third element should equal 2");

        // should return boolean
        equal(typeof cdll.insertAfter(cdll.first(), 'a') === 'boolean', true, "should return a boolean");

    });

    // test remove
    test("remove", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr);

        // basic insertion
        cdll.remove(cdll.first());
        equal(cdll.first().data, 2, "first() element should equal 2");
        equal(cdll.first().next().data, 3, "first() next() element should equal 3");
        equal(cdll.last().data, 9, "last() element should equal 9");
        equal(cdll.last().prev().data, 8, "last() prev() element should equal 8");

        // test insert multiple
        // test insert null/undefined
    });

    // test rotate
    test("rotation", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr);
        // rotate 1, check first and last
        cdll.rotate(1);
        equal(cdll.first().data, 2, "rotate(1) first() should point to second element");
        equal(cdll.last().data, 1, "rotate(1) last() should point to first element");

        // rotate 2, check first
        cdll.setCurrent(arr[0]);
        cdll.rotate(2);
        equal(cdll.first().data, 3, "rotate(2) first() should point to third element");

        // rotate 3, check first
        cdll.setCurrent(arr[0]);
        cdll.rotate(3);
        equal(cdll.first().data, 4, "rotate(3) first() should point to fourth element");

        // rotate 1 and 2, check first
        cdll.setCurrent(arr[0]);
        cdll.rotate(1).rotate(2);
        equal(cdll.first().data, 4, "rotate(1).rotate(2) first() should point to the fourth element");

        // rotate 3 and -1, check first
        cdll.setCurrent(arr[0]);
        cdll.rotate(3).rotate(-1);
        equal(cdll.first().data, 3, "rotate(3).rotate(-1) first() should point to the third element");

        // rotate -5, check first
        cdll.setCurrent(arr[0]);
        cdll.rotate(-5);
        equal(cdll.first().data, 5, "rotate(-5) first() first() should point to the fifth element");
    });

    // test setCurrent
    test("set current item", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr),
            current;
        cdll.setCurrent(arr[1]);
        equal(cdll.first().data, arr[1], "setCurrent(1) should point to the first element");

        cdll.setCurrent(arr[3]);
        equal(cdll.first().data, arr[3], "setCurrent(3) should point to the third element");

        cdll.setCurrent(arr[2]);
        equal(cdll.first().data, arr[2], "setCurrent(2) should point to the second element");

        cdll.setCurrent(arr[4]);
        equal(cdll.first().data, arr[4], "setCurrent(4) should point to the fourth element");

        cdll.setCurrent(arr[8]);
        equal(cdll.first().data, arr[8], "setCurrent(8) should point to the eighth element");

        current = cdll.first().data;
        cdll.setCurrent(null);
        equal(cdll.first().data, current, "setCurrent(null) should maintain the current element when passed null");

        current = cdll.first().data;
        cdll.setCurrent(cdll.first());
        equal(cdll.first().data, current, "setCurrent(null) should maintain the current element when passed a node");
    });

    // test toArray
    test("toArray", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr),
            retArr = cdll.toArray();
        arr.forEach(function (e, idx) {
            equal(arr[idx], retArr[idx], "arr and toArray() return elements at index " + idx + " should be equal");
        });
    });

    // test scope
    test("scope", function() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            cdll = new CDLL(arr);
        equal(typeof cdll._nodeCount, 'undefined', "cdll._nodeCount should be undefined");
        throws(function () { _nodeCount; }, "_nodeCount should be inaccessible");
        equal(typeof cdll._first, 'undefined', "cdll._first should be undefined");
        throws(function () { _first; }, "_first should be inaccessible");
        equal(typeof cdll._last, 'undefined', "cdll._last should be undefined");
        throws(function () { _last; }, "_last should be inaccessible");
        equal('CDLL' in global, true, "CDLL constructor should be global");
        //equal('Node' in global, false, "Node constructor should not be global");
        equal('Node' in cdll, false, "Node constructor should not be accessible");
    });

    // how else could we try to break this?
    // pass nulls & undefined values to every method
    // test passing node to setCurrent
    // test re-seeding a CDLL

    /* test invalid data for
    seed
    add
    addArray
    insertAfter
    remove
    rotate
    setCurrent
    toArray
    first
    last
    Node
    createNode
    findNodeByData
    */

    test("random invalidity", function() {
        var cdll = new CDLL(null);
        throws(function () { _last; }, "_last should be inaccessible");
    });

}(this));
