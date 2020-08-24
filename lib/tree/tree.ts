import {TreeNode} from "./treeNode";

export class Tree<T> {
    private _root: TreeNode<T> = null;

    private readonly _comparer: (a: T, b: T) => boolean;

    private _size: number = 0;

    constructor(comparer?: (a: T, b: T) => boolean) {
        this._comparer = comparer || ((a, b) => a < b)
    }

    public add(item: T) {

        let newNode = new TreeNode(item);
        this._size++;

        if (this._root === null) {
            this._root = new TreeNode(item);
            return;
        }

        let node = this._root;

        while (node !== null) {

            if (this._comparer(item, node.item)) {
                if (node.left === null) {
                    node.left = newNode;
                    return;
                }

                node = node.left;
            }

            if (!this._comparer(item, node.item)) {
                if (node.right === null) {
                    node.right = newNode;
                    return;
                }

                node = node.right;
            }
        }


    }

    public get size(): number {
        return this._size
    }

    public contains(item: T): boolean {
        let node = this._root;

        while (node !== null) {
            if (item === node.item) {
                return true;
            } else if (this._comparer(item, node.item)) {
                node = node.left;
            } else if (!this._comparer(item, node.item)) {
                node = node.right;
            }
        }

        return false;
    }

    public remove(data) {
        this._root = this._removeNode(this._root, data);
    }

    private _removeNode(node: TreeNode<T>, item: T) {
        if (node === null) {
            return null;
        }

        if (item === node.item) {

            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            let currentNode = node.left;
            let currentParent = node;

            while (currentParent.right !== null) {
                currentParent = currentNode;
                currentNode = currentNode.right;
            }

            node.item = currentParent.item;
            node.left = this._removeNode(node.left, currentParent.item);

            this._size--;
        }

        if (this._comparer(item, node.item)) {
            node.left = this._removeNode(node.left, item);
        } else if (!this._comparer(item, node.item)) {
            node.right = this._removeNode(node.right, item);
        }

        return node;
    };

    public max() {
        let node = this._root;
        if (node === null) {
            return null
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node.item;
    }

    public min() {
        let node = this._root;

        if (node === null) {
            return null
        }

        while (node.left !== null) {
            node = node.left;
        }
        return node.item;
    }

    public inOrder(): T[] {
        if (this._root == null) {
            return []
        }
        let items = [];

        this._inOrder(this._root, items);
        return items;
    }

    public _inOrder(node: TreeNode<T>, items: T[]) {


        (node.left !== null) && (this._inOrder(node.left, items));

        items.push(node.item);

        (node.right !== null) && (this._inOrder(node.right, items));

    }

    public levelOrder(): T[] {
        if (this._root == null) {
            return []
        }
        let items = [];

        this._levelOrder(this._root, items);

        return items;
    }

    public _levelOrder(node: TreeNode<T>, items: T[]) {

        let queue:TreeNode<T>[] = [this._root]

        while (true) {

            for (let i = 0; i < queue.length; i++) {
                let node = queue.shift();

                items.push(node.item);

                (node.left !== null) && (queue.push(node.left));

                (node.right !== null) && (queue.push(node.right));
            }

            if (queue.length === 0) {
                return;
            }

        }
    }


    public preOrder(): T[] {
        if (this._root == null) {
            return []
        }
        let items = [];

        this._preOrder(this._root, items);

        return items;
    }

    public _preOrder(node: TreeNode<T>, items: T[]) {

        items.push(node.item);

        (node.left !== null) && this._preOrder(node.left, items);

        (node.right !== null) && this._preOrder(node.right, items);


    }

    public postOrder(): T[] {
        if (this._root == null) {
            return []
        }

        let items = [];

        this._postOrder(this._root, items);

        return items;
    }

    public _postOrder(node: TreeNode<T>, items: T[]) {

        (node.left !== null) && (this._postOrder(node.left, items));

        (node.right !== null) && (this._postOrder(node.right, items));

        items.push(node.item);
    }

    public isSame(tree: Tree<T>): boolean {
        return this._isSameTree(this._root, tree._root)
    }


    private _isSameTree(tree1: TreeNode<T>, tree2: TreeNode<T>): boolean {
        if (!tree1 && !tree2) {
            return true;
        }
        if (!tree1 || !tree2) {
            return false;
        }

        return (
            tree1.item === tree2.item &&
            this._isSameTree(tree1.left, tree2.left) &&
            this._isSameTree(tree1.right, tree2.right)
        );
    }
}

