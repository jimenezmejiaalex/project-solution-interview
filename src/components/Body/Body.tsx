import * as React from 'react';
import { observer } from "mobx-react";
import "./Body.scss"
import { useAppStateContext } from 'state/AppState';
import { BinTreeNode } from 'models/TreeNode';
import { findSmallestSubTreeNode, getBinTreeNode } from 'utils/binTreeUtils';
import { TreeInput, TreeOutput, FileInput, ErrorMessage } from 'components';
interface BodyProps {
    appState: IAppState
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer((props) => {

    const parseFile = (file: File) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            if(reader.result !== null && typeof reader.result !== 'object') {
                const treeArrayFormat: any[] = JSON.parse(reader.result);
                const binTreeNode: BinTreeNode | null =  getBinTreeNode(treeArrayFormat);
                if(binTreeNode !== null){
                    handleTreeChange(binTreeNode);
                }
            }
        };
    }

    const handleTreeChange = (newVal: BinTreeNode) => {
        props.appState.setState({
            ...props.appState,
            treeNode: newVal,
            inputTreeKey: props.appState.inputTreeKey + 1,
            showError: false,
        });
    }

    const handleError = (error: string) => {
        props.appState.setState({
            ...props.appState,
            showError: true,
        });
    }

    return (
        <main className="App-body">
            {props.appState!.bodyMessage}
            <h4>Tree Source</h4>
            <FileInput onChange={(files) => parseFile(files[0])}/>
            <h4>Tree Text</h4>
            <TreeInput
                key={props.appState.inputTreeKey}
                onChange={(newVal) => handleTreeChange(newVal)} 
                onError={(error) => handleError(error)}
                treeText={props.appState.treeNode} />
            {props.appState.showError && <ErrorMessage/>}
            <h4>Output</h4>
            <div className="OutputContainer">
                <TreeOutput
                    smallestTree={findSmallestSubTreeNode(props.appState.treeNode)}
                    treeNode={props.appState.treeNode} />
            </div>
        </main>
    );
})

export const Body: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <BodyRenderer appState={appState} />
}

export default Body;