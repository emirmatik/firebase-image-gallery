import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import Notiflix from "notiflix-react";
import { motion } from "framer-motion";

function Loadingbar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
      Notiflix.Notify.Success("Uploaded Successfuly!");
    }
  }, [url]);
  console.log(progress, url);
  return (
    <motion.div
      initial={{ width: "0" }}
      animate={{ width: progress + "%" }}
      className="loading-bar"
    ></motion.div>
  );
}

export default Loadingbar;
