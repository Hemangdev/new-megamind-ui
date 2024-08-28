import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-phone-number-input/style.css";
import Modal from "react-modal";
// import axios from 'axios';
// import $ from 'jquery';


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Model() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
          <button
              type="submit"
              onClick={openModal}
              class="px-4 mr-3 btn btn-primary"
            >
              Download Brochure
            </button>

      <div className="makin">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="btn btn-primary float-right">
            x
          </button>

          <form action="https://megamindonline.com/Megamind-Brochure.pdf" target="_blank" className="py-3" style={{ width: "300px" }}>
            <div class="form-group">
              <label for="name" className="py-2">
                {"Full Name"}
              </label>
              <input
                type="name"
                id="name"
                class="form-control"
                name="name"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div class="form-group pb-4">
              <label for="Email" className="py-2">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <input
              type="submit"
              onclick="downloadFile()"
              className="btn py-3 btn-primary w-100"
              value="Download Brochure"
            />
          </form>
        </Modal>
      </div>
    </>
  );
}

export default Model;
