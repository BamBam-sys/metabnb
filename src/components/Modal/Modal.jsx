import { useEffect } from 'react';
import metamask from '../../assets/metamaskWallet.png';
import walletConnect from '../../assets/walletConnect.png';
import { IoCloseOutline } from 'react-icons/io5';
import { IoChevronForwardOutline } from 'react-icons/io5';

import styles from './modal.module.scss';

const Modal = ({ modalOpen, handleModal }) => {
  useEffect(() => {
    !modalOpen
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden');
  }, [modalOpen]);

  return (
    <>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>Connect Wallet</h2>
            <IoCloseOutline
              className={styles.closeIcon}
              onClick={() => handleModal()}
            />
          </div>
          <div className={styles.wallets}>
            <p>choose your preferred wallet:</p>
            <div className={styles.wallet}>
              <img src={metamask} alt="metamask" />
              Metamask
              <IoChevronForwardOutline className={styles.forwardIcon} />
            </div>
            <div className={styles.wallet}>
              <img src={walletConnect} alt="walletConnect" />
              WalletConnect
              <IoChevronForwardOutline className={styles.forwardIcon} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
