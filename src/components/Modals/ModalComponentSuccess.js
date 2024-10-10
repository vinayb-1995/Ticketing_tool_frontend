import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const ModalComponentSuccess = ({ isOpen, onClose, title, bodyText, onOk }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{bodyText}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onOk}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponentSuccess;
