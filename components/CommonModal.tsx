import { Button, Modal } from "flowbite-react";
import React from "react";

interface CommonModalProps {
  openModal: boolean;
  setOpenModal: (arg0: boolean) => void;
  heading: string;
  color: string;
  submitHandler: () => void;
  submitTitle: string;
  clearHandler: () => void;
}

const CommonModal = ({
  openModal,
  setOpenModal,
  heading,
  color,
  submitHandler,
  submitTitle,
  children,
  clearHandler,
}: React.PropsWithChildren<CommonModalProps>): React.JSX.Element => {
  const handleSubmitModal = () => {
    submitHandler();
  };

  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => {
        setOpenModal(false);
        if (clearHandler) {
          clearHandler();
        }
      }}
    >
      <Modal.Header>{heading}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          color={color ? color : undefined}
          onClick={() => handleSubmitModal()}
        >
          {submitTitle}
        </Button>
        <Button
          color="gray"
          onClick={() => {
            setOpenModal(false);
            if (clearHandler) {
              clearHandler();
            }
          }}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
