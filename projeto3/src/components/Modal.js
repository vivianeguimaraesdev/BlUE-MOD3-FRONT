import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import './Modal.css'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width:110em;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #181818;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;


const CloseModalButton = styled(MdClose)`
  color: #f30000;
  postion:absolute;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, selectedGame}) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
            <iframe src={(selectedGame.trailerUrl)+("?controls=0&autoplay=1")} title={("Trailer do Jogo:")+(selectedGame.nomeJogo)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="modalContent">
                <img src={selectedGame.logoUrl} alt={("Logomarca do Jogo:")+(selectedGame.nomeJogo)}></img>
                <ul><li><h4>Gênero:</h4></li>
                <li>{selectedGame.gender}</li>
                <br></br>
                <li><h4>Lançamento:</h4></li>
                <li>{selectedGame.releaseYear}</li>
                </ul>
                <p>{selectedGame.description}</p>
              </div>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
