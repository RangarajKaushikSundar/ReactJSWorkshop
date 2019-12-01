import * as React from 'react';
import "./modal.css";

export interface ModalProps {
  heading: string;
  message: string;
  onClose: () => void;
}

export default class Modal extends React.Component<ModalProps, {}> {
  render() {
    return <>
      <div className="modal">
        <h1>{this.props.heading}</h1>
        <p className="modal-content">{this.props.message}</p>
        <button className="closeButton" onClick={this.props.onClose}>Close</button>
      </div>
    </>;
  }
}