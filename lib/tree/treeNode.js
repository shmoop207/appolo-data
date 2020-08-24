"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(item) {
        this._item = item;
        this._left = null;
        this._right = null;
    }
    get item() {
        return this._item;
    }
    set item(value) {
        this._item = value;
    }
    get left() {
        return this._left;
    }
    set left(value) {
        this._left = value;
    }
    get right() {
        return this._right;
    }
    set right(value) {
        this._right = value;
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=treeNode.js.map