import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleCloseModal);
    window.addEventListener('keydown', this.handleESCWindow);
    // antiBodyScrolling
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-opened');
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseModal);
    window.removeEventListener('keydown', this.handleESCWindow);
    // !antiBodyScrolling
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-opened');
  }

  handleCloseModal = ({ target }) => {
    const { onClose } = this.props;
    if (target !== this.containerRef.current) return;
    onClose();
  };

  handleESCWindow = e => {
    const { onClose } = this.props;
    const keyDown = e.keyCode;
    if (keyDown !== 27) return;
    onClose();
  };

  render() {
    const { onClose, children } = this.props;
    const CloseModalBtn = () => (
      <button className={styles.closeContainer} type="button" onClick={onClose}>
        <div className={styles.closeLeftRight} />
        <div className={styles.closeRightLeft} />
        <label className={styles.close}>close</label>
      </button>
    );
    return (
      <div className={styles.backdrop} ref={this.containerRef}>
        <div className={styles.modal}>
          <> {children} </>
          <CloseModalBtn />
        </div>
      </div>
    );
  }
}
