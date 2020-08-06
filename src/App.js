import React, { useState } from "react";
import "./App.css";
import Title from "./comps/Title";
import ImageForm from "./comps/ImageForm";
import ImageGrid from "./comps/ImageGrid";
import ImageModal from "./comps/ImageModal";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="App">
      <Title />
      <ImageForm />
      <ImageGrid setSelected={setSelected} />
      {selected && <ImageModal selected={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
