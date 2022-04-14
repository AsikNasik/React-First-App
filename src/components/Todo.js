import Modal from "./Modal";
import Backdrop from "./Backdrop";

import { useState } from "react";

function Todo(props) {
  const [isModalOpened, setModalIsOpened] = useState(false);

  function deleteHandler() {
    setModalIsOpened(true);
  }
  
  function closeModalHandler () {
    setModalIsOpened(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModalOpened && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {isModalOpened && <Backdrop />}
    </div>
  );
}

export default Todo;
