import { useState } from "react";
import { Button, Modal } from "rsuite";
import { useSelector, useDispatch } from "react-redux";
import { changeTemp } from "../../../store/davaSlice";

function ModalWindow(props) {
  const dispatch = useDispatch();
  const disabled = useSelector((state) => state["dava"].tempData.disabled);
  const data = useSelector((state) => state["dava"].tempData.data);
  //const [disabled, setDisabled] = useState(true);

  const handleClose = () => {
    dispatch(changeTemp({ data: undefined, disabled: true }));
    props.close();
  };

  const handleSave = () => {
    props.edit
      ? /* edit */ dispatch(
        props.task({ edit: true, index: props.editIndex, data: data })
      )
      : /* add */ dispatch(props.task(data));
    props.close();
  };
  return (
    <>
      <Modal
        backdrop="static"
        open={props.open}
        onClose={props.close}
        enforceFocus={true}
      >
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer className="mobile__center">
          <Button
            onClick={handleSave}
            appearance="primary"
            color="blue"
            disabled={disabled}
            className="mobile__widen"
          >
            {props.edit ? "Save" : "Add"}
          </Button>
          <Button className="mobile__widen" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
