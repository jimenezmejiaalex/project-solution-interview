import * as React from 'react';
import { observer } from "mobx-react";
import { useAppStateContext } from 'state/AppState';
import './ErrorMessage.scss'

interface ErrorMessageProps {
    appState?: IAppState
}

@observer
class ErrorMessageRender extends React.Component<ErrorMessageProps>{
    render() {
        return (
            <div className="error-message">
                <strong>Error</strong> - 
                {this.props.appState!.errorMessage}
            </div>
        )
    }
}

export const ErrorMessage: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <ErrorMessageRender appState={appState} />
}

export default ErrorMessage;