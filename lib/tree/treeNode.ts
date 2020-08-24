export class TreeNode<T> {

    private _left :TreeNode<T>
    private _right :TreeNode<T>
    private  _item:T

    constructor(item:T) {
        this._item = item;
        this._left = null;
        this._right = null;
    }

    public get item(): T {
        return this._item;
    }
    public set item(value:T) {
      this._item = value;
    }

    public get left(): TreeNode<T> {
        return this._left;
    }

    public set left(value: TreeNode<T>) {
        this._left = value;
    }

    public get right(): TreeNode<T> {
        return this._right;
    }

    public set right(value: TreeNode<T>) {
        this._right = value;
    }
}
