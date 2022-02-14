import { InviteForm } from "./InviteForm";
import { Modal } from "../shared/Modal";

export const InviteModal = () => {
  const onModalClose = ({ modalState, modalSetOpen }) => {
      console.log(modalState);
      modalSetOpen(false);
  };
  return (
    <Modal onModalClose={onModalClose}>
      <InviteForm></InviteForm>
    </Modal>
  );
};
