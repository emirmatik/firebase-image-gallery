import React from "react";
import { motion } from "framer-motion";

function ImageModal({ selected, setSelected }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("modal-div")) {
      setSelected(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal-div"
      onClick={handleClick}
    >
      <img src={selected.url} alt="selected-img" />
    </motion.div>
  );
}

export default ImageModal;
