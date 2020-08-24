import {ListNode} from "./listNode";

export class List<T> {
    private _size: number = 0;
    private _head: ListNode<T> = null;
    private _tail: ListNode<T> = null;

    public get size(): number {
        return this._size;
    }

    public get head(): T {
        return this._head ? this._head.item : null;
    }

    public get tail(): T {
        return this._tail ? this._tail.item : null;
    }


    public add(item: T) {
        this.addAt(this._size, item);
    }

    public addAt(index: number, item: T) {

        let node = new ListNode(item),
            currentIndex = 0;

        if (this._head == null) {
            this._head = node;
        }

        if (this._tail == null) {
            this._tail = node;
        }

        let currentNode = this._head;

        while (currentNode.next && currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        }

        this._size++

        if (currentNode === node) {
            return;
        }

        node.next = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;

        if (this._tail === currentNode) {
            this._tail = node
        }
    }


    public remove(item: T) {
        let currentNode = this._head;

        while (currentNode.item !== item) {
            currentNode = currentNode.next;
        }

        if (!currentNode) {
            return;
        }

        this._removeNode(currentNode);
    }

    public removeAt(index: number) {
        let node = this._itemAt(index);

        if(!node){
            return;
        }

        this._removeNode(node);
    }

    private _removeNode(node: ListNode<T>) {
        node.prev && (node.prev.next = node.next);
        node.next && (node.next.prev = node.prev);

        this._size--;

        if (this._head === node) {
            this._head = node.next;
        }

        if (this._tail === node) {
            this._tail = node.prev;
        }
    }


    public isEmpty(): boolean {
        return this._size === 0;
    }


    private _itemAt(index: number): ListNode<T> {

        if(index > this._size){
            return null;
        }

        let currentNode = this._head;
        let count = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode || null;
    }

    public itemAt(index: number): T {
        let node = this._itemAt(index)

        return node ? node.item : null;
    }

    public indexOf(item: T): number {
        let currentNode = this._head;
        let index = 0;

        while (currentNode.item !== item) {
            currentNode = currentNode.next;
            index++;
        }

        return currentNode ? index : -1;
    }

}
