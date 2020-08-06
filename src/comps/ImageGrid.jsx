import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelected }) {
  const { docs } = useFirestore("images");
  return (
    <div className="image-grid">
      {docs.map((doc) => (
        <motion.div
          whileHover={{ opacity: 1 }}
          layout
          key={doc.id}
          className="image"
          onClick={() => setSelected(doc)}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            src={doc.url}
            alt="uploaded-img"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageGrid;
