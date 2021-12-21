import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const ProductdeleteModal = ({ productObject, push }) => {
  const [open, setOpen] = useState(false);
  const [exceptionMessage, setExceptionMessage] = useState("");
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then(() => {
        //clearin exceptionMessage
        setExceptionMessage("");
        //close the modal
        close();
        //push
        push(`http://localhost:8080/product`);
      })
      .catch(() => {
        setExceptionMessage("There is an error deleting.");
      });
  };

  const show = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="red" onClick={show}>
        Delete
      </Button>
      <Modal size="mini" open={open} onclose={close}>
        <Modal.Header>Delete the Companent</Modal.Header>
        <Modal.Content>
          <p>Are you sure that want to delete the component?</p>
          {exceptionMessage && <p>{exceptionMessage}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={close}>
            No
          </Button>
          <Button
            positive
            icon="delete"
            labelPosition="right"
            content="Yes, delete"
            onClick={() => handleDelete(productObject.id)}
          ></Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};
export default ProductdeleteModal;
