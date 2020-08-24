"use strict";
import chai = require('chai');
import {PriorityQueue} from "../lib/priorityQueue";
import {Tree} from "../lib/tree/tree";
import {List} from "../lib/list/list";

let should = chai.should();

describe("data", function () {


    it('should have valid linked list', async () => {

        let list = new List<string>();

        list.add("aa");
        list.add("bb");
        list.add("cc");
        list.addAt(1, "dd");
        list.addAt(10, "ff");

        list.head.should.be.eq("aa")
        list.tail.should.be.eq("ff")

        list.indexOf("dd").should.be.eq(2)
        list.itemAt(3).should.be.eq("cc")

        should.not.exist(list.itemAt(5))

        list.remove("aa")

        list.size.should.be.eq(4)
        list.head.should.be.eq("bb")
        list.itemAt(1).should.be.eq("dd")

        list.removeAt(1)

        list.size.should.be.eq(3)
        list.itemAt(1).should.be.eq("cc")
    });

    it('should have valid priority queue', async () => {
        let queue = new PriorityQueue<string>();

        queue.enqueue("aa")
        queue.enqueue("bb",100)
        queue.enqueue("cc",1)
        queue.enqueue("dd",2)
        queue.enqueue("fff",1)

        queue.dequeue().should.be.eq("bb")
        queue.dequeue().should.be.eq("dd")
        queue.dequeue().should.be.eq("cc")
        queue.dequeue().should.be.eq("fff")
        queue.dequeue().should.be.eq("aa")
    })

    it("should add items to bts",()=>{
        let tree = new Tree()
        tree.add(5);
        tree.add(1);
        tree.add(8);
        tree.add(10);
        tree.add(7);

        tree.min().should.be.eq(1)
        tree.max().should.be.eq(10)

        tree.contains(3).should.be.eq(false)
        tree.contains(8).should.be.eq(true)
        tree.size.should.be.eq(5)
        tree.inOrder().should.be.deep.equals([1, 5, 7, 8, 10])
        tree.postOrder().should.be.deep.equals([1, 7, 10, 8, 5])
        tree.preOrder().should.be.deep.equals([5, 1, 8, 7, 10])

        tree.remove(8)

        tree.inOrder().should.be.deep.equals([1, 5, 7, 10])
        tree.size.should.be.eq(4)
    })

    it("should add items to bts and delete",()=>{
        let tree = new Tree()
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(1);
        tree.add(4);
        tree.add(7);
        tree.add(6);
        tree.add(8);
        tree.add(15);

        tree.min().should.be.eq(1)
        tree.max().should.be.eq(15)

        tree.contains(3).should.be.eq(true)
        tree.contains(11).should.be.eq(false)
        tree.size.should.be.eq(9)
        tree.inOrder().should.be.deep.equals([1, 3, 4, 5, 6, 7, 8, 10, 15])
        tree.postOrder().should.be.deep.equals([1, 4, 3, 6, 8, 7, 5, 15, 10])
        tree.preOrder().should.be.deep.equals([10, 5, 3, 1, 4, 7, 6, 8, 15])
        tree.levelOrder().should.be.deep.equals([10, 5, 15, 3, 7, 1, 4, 6, 8])


        tree.remove(5)

        tree.preOrder().should.be.deep.equals([10, 4, 3, 1, 7, 6, 8, 15])
        tree.levelOrder().should.be.deep.equals([10, 4, 15, 3, 7, 1, 6, 8])

        tree.size.should.be.eq(8)
    })


});
