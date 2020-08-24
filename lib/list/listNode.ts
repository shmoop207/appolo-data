export class ListNode<T> {
    private _item: T;
    private _next: ListNode<T>;
    private _prev: ListNode<T>;

    constructor(item: T) {
        this._item = item;
    }

    public get item(): T {
        return this._item;
    }

    public set item(value: T) {
        this._item = value;
    }

    public get next(): ListNode<T> {
        return this._next;
    }

    public set next(value: ListNode<T>) {
        this._next = value;
    }

    public get prev(): ListNode<T> {
        return this._prev;
    }

    public set prev(value: ListNode<T>) {
        this._prev = value;
    }


}
