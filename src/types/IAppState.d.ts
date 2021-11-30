interface IAppState {
    title: string;
    bodyMessage: string;
    treeNode: BinTreeNode;
    inputTreeKey: number;
    errorMessage: string;
    showError: boolean;
    
    setState(newState: IAppState)
}