import * as React from "react";
import './TreeInput.scss'
import { BinTreeNode } from "models/TreeNode";
import { getBinTreeNode } from "utils/binTreeUtils";

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode) => void
    onError: (errorMessage: string) => void;
    treeText: string;
}
interface TreeInputState {
    treeText: string
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState>{
    private textAreaRef: any;
    constructor(props: TreeInputProps) {
        super(props);
        this.textAreaRef = React.createRef();
        this.state = {
            treeText: ""
        }
    }

    componentDidMount(){
        this.textAreaRef.current.value = JSON.stringify(this.props.treeText, undefined, 4);
    }

    /**
     * Converts array format binary tree notation to BinTreeNode data structure
     * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
     * @returns TreeNode format
     * */
    parseArrayToTree(arrayFormat: any[]): BinTreeNode {
        const binTreeNode: BinTreeNode | null =  getBinTreeNode(arrayFormat);
        return binTreeNode ? binTreeNode : new BinTreeNode('', null, null);
    }

    convert = () => {
        try {
            let treeArrayFormat: BinTreeNode = JSON.parse(this.state.treeText);
            this.props.onChange(treeArrayFormat);
        } catch (error) {
            this.props.onError(`${error}`);
        }
    }

    handleOnChange = (value: string | null) => {
        if(value !== null) {
            this.setState({
                treeText: value
            });
        }
    }

    render() {
        return (
            <div className="tree-input">
                <textarea 
                    ref={this.textAreaRef}
                    className="tree-input__text-area" 
                    rows={20} 
                    onChange={(ev) => this.handleOnChange(ev.target.value)}>
                </textarea>
                <button className="tree-input__button" onClick={this.convert}>Process</button>
            </div>
        )
    }
}