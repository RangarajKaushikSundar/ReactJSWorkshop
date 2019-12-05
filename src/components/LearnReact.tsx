import * as React from "react";
import Modal from './Modal/Modal';
import './LearnReact.css';
export interface LearnReactProps { instructor1: string; instructor2: string; }

export class LearnReact extends React.Component<LearnReactProps, {showModal:boolean;}> {
    constructor(props: LearnReactProps){
      super(props);
      this.state = {
        showModal: false
      };
      this.showModal = this.showModal.bind(this);
    }
    toggleModal = (): void => {
      const {showModal} = this.state;
      this.setState({
        showModal: !showModal
      })
    }

    showModal = () => {
      return (this.state.showModal)? <>
        <Modal
          heading="Hello World"
          message="Simple Modal"
          onClose={this.toggleModal}>
        </Modal>
      </>: null;
    }

    render() {
        const bodyBg = (this.state.showModal)? "common dark":"common light";
        return <div className={bodyBg}>
          <h1>Hello from {this.props.instructor1} and {this.props.instructor2}!</h1>
          <button type="button" className="defaultButton grayButton" data-toggle="modal" data-target="#myModal" onClick={this.toggleModal}>Show Modal</button>
          {this.showModal()}
        </div>;
    }
}