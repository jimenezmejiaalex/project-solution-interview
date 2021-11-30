import { BinTreeNode } from "models/TreeNode";

// Problem #1
function getBinTreeNode(binTreeNode: any[]) : BinTreeNode | null {
    if (
        binTreeNode &&
        binTreeNode.length &&
        binTreeNode.length > 0 &&
        (typeof binTreeNode[0] === 'number' || typeof binTreeNode[0] === 'string')
    ) {
        let data: BinTreeNode = new BinTreeNode(
            String(binTreeNode[0]), 
            getBinTreeNode(binTreeNode[1]),
            getBinTreeNode(binTreeNode[2])
        );
        return data;
    } else {
        return null;
    }
}

function findHeight(root: BinTreeNode | null): number {
    if (!root) 
        return 0;
    if (root.left === null && root.right === null) 
        return 1;
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
}

function findSmallestSubTreeNode(root: BinTreeNode | null): BinTreeNode | null {
    if (!root)
        return null;

    const leftHeight = findHeight(root.left);
    const rightHeight = findHeight(root.right);

    if (leftHeight > rightHeight) 
        return findSmallestSubTreeNode(root.left);
    else if (rightHeight > leftHeight) {
        return findSmallestSubTreeNode(root.right);
    }
    else
        return root;
}

export {
    getBinTreeNode,
    findHeight,
    findSmallestSubTreeNode
}