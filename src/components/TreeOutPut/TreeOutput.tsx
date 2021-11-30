import * as React from "react";
import { BinTreeNode } from "models/TreeNode";

import "./TreeOutput.scss"

export interface TreeOutputProps {
    treeNode: BinTreeNode | null,
    smallestTree: BinTreeNode | null
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = (props) => {
    if (!props.treeNode || !props.treeNode.id) {
        return <div className="treeNode"></div>;
    }

    return (
        <div className="treeNode">
            <div className="nodeId">
                <span
                    className={
                        `id-text ${props.treeNode === props.smallestTree ? 'id-text--smallest' : ''}`
                    }
                >{props.treeNode.id}</span>
            </div>
            {props.treeNode.left || props.treeNode.right ?
                <div className="nodeChildren">
                    <TreeOutput
                        smallestTree={props.smallestTree}
                        treeNode={props.treeNode.left} />
                    <TreeOutput
                        smallestTree={props.smallestTree}
                        treeNode={props.treeNode.right} />
                </div> :
                null}
        </div>
    );
}