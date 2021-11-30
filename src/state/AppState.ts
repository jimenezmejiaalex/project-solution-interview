import * as React from "react";
import "configureMobx";
import { observable, action, makeObservable } from "mobx";
import { BinTreeNode } from "models/TreeNode";
import { createContext } from "react";

export class AppState implements IAppState {
    @observable title = "Tree Traversal";

    @observable bodyMessage = "Process the input text to a BinTreeNode";

    @observable treeNode = new BinTreeNode("root", null, null);

    @observable inputTreeKey = 1;

    @observable errorMessage = `
        This is an invalid input, please see here an example of the correct format:
        {
            "id": "3",
            "left" : null,
            "right": {
                "id": "4"
            }
        }
    `;

    @observable showError = false;

    constructor() {
        makeObservable(this)
    }

    @action setState(newState: IAppState) {
        this.title = newState.title;
        this.bodyMessage = newState.bodyMessage;
        this.treeNode = newState.treeNode;
        this.inputTreeKey = newState.inputTreeKey;
        this.errorMessage = newState.errorMessage;
        this.showError = newState.showError;
    }
}

export const AppStateContext = createContext<IAppState>(new AppState());

export const AppStateContextProvider = AppStateContext.Provider;

export const AppStateContextConsumer= AppStateContext.Consumer;

export const useAppStateContext = () => {
    return React.useContext(AppStateContext);
}

