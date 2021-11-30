import * as React from "react";
import './FileInput.scss'

export interface FileInputProps {
    onChange: (newSelectorFiles: FileList) => void
}
interface FileInputState {
    selectorFiles: FileList | null
}

export class FileInput extends React.Component<FileInputProps, FileInputState>{
    constructor(props: FileInputProps) {
        super(props);
        this.state = {
            selectorFiles: null
        }
    }

    handleFileChange = (selectorFiles: FileList | null) => {
        this.setState({
            ...this.state,
            selectorFiles
        })
    };

    fetchData = () => {
        if (this.state.selectorFiles !== null) {
            console.log(this.state.selectorFiles)
            this.props.onChange(this.state.selectorFiles);
        }
    }

    render() {
        return (
            <div className="file-input">
                <div className="file-input__button-wrap">
                    <input 
                        type="file" 
                        name="file" 
                        id="file" 
                        onChange={(e) => this.handleFileChange(e.target.files)}
                        />
                </div>
                <button onClick={this.fetchData}>Fetch</button>
            </div>
        )
    }
}