"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const treeNode_1 = require("./treeNode");
class Tree {
    constructor(comparer) {
        this._root = null;
        this._size = 0;
        this._comparer = comparer || ((a, b) => a < b);
    }
    add(item) {
        let newNode = new treeNode_1.TreeNode(item);
        this._size++;
        if (this._root === null) {
            this._root = new treeNode_1.TreeNode(item);
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
    get size() {
        return this._size;
    }
    contains(item) {
        let node = this._root;
        while (node !== null) {
            if (item === node.item) {
                return true;
            }
            else if (this._comparer(item, node.item)) {
                node = node.left;
            }
            else if (!this._comparer(item, node.item)) {
                node = node.right;
            }
        }
        return false;
    }
    remove(data) {
        this._root = this._removeNode(this._root, data);
    }
    _removeNode(node, item) {
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
        }
        else if (!this._comparer(item, node.item)) {
            node.right = this._removeNode(node.right, item);
        }
        return node;
    }
    ;
    max() {
        let node = this._root;
        if (node === null) {
            return null;
        }
        while (node.right !== null) {
            node = node.right;
        }
        return node.item;
    }
    min() {
        let node = this._root;
        if (node === null) {
            return null;
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node.item;
    }
    inOrder() {
        if (this._root == null) {
            return [];
        }
        let items = [];
        this._inOrder(this._root, items);
        return items;
    }
    _inOrder(node, items) {
        (node.left !== null) && (this._inOrder(node.left, items));
        items.push(node.item);
        (node.right !== null) && (this._inOrder(node.right, items));
    }
    levelOrder() {
        if (this._root == null) {
            return [];
        }
        let items = [];
        this._levelOrder(this._root, items);
        return items;
    }
    _levelOrder(node, items) {
        let queue = [this._root];
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
    preOrder() {
        if (this._root == null) {
            return [];
        }
        let items = [];
        this._preOrder(this._root, items);
        return items;
    }
    _preOrder(node, items) {
        items.push(node.item);
        (node.left !== null) && this._preOrder(node.left, items);
        (node.right !== null) && this._preOrder(node.right, items);
    }
    postOrder() {
        if (this._root == null) {
            return [];
        }
        let items = [];
        this._postOrder(this._root, items);
        return items;
    }
    _postOrder(node, items) {
        (node.left !== null) && (this._postOrder(node.left, items));
        (node.right !== null) && (this._postOrder(node.right, items));
        items.push(node.item);
    }
    isSame(tree) {
        return this._isSameTree(this._root, tree._root);
    }
    _isSameTree(tree1, tree2) {
        if (!tree1 && !tree2) {
            return true;
        }
        if (!tree1 || !tree2) {
            return false;
        }
        return (tree1.item === tree2.item &&
            this._isSameTree(tree1.left, tree2.left) &&
            this._isSameTree(tree1.right, tree2.right));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map