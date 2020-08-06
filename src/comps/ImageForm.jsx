import React, { useState } from "react";
import Loadingbar from "./Loadingbar";

function ImageForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];
    const styles = ["image/jpeg", "image/png"];
    if (selected && styles.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please choose an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label>
        <input type="file" id="input-file" onChange={handleChange} />
        <span className="file-choose-icon">+</span>
      </label>
      <div className="output">
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <Loadingbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default ImageForm;
