import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { CircularProgress } from "@material-ui/core";

function ImageGrid({ setSelected }) {
  const { docs } = useFirestore("images");
  return (
    <>
      {!docs || docs.length === 0 ? (
        <CircularProgress id="loading-gif" />
      ) : (
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
      )}
    </>
  );
}

export default ImageGrid;
