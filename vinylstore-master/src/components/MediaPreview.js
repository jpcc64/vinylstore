import React, { useState } from "react";
import { render } from "react-dom";
import PreviewModal from "react-media-previewer";
import "../../public/css/styles.css";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button onClick={() => setVisible(true)}>view media</button>
      </div>
      <PreviewModal
        visible={visible}
        name="image.png"
        setVisible={setVisible}
        urls={[
          "https://assets.ruilisi.com/attachment-8de9464b-d286-43a9-b18e-f8a984bf8623.jpg",
          "https://www.google.com/favicon.ico",
          "https://baidu.com/favicon.ico",
        ]}
      />
    </div>
  );
}

render(<App />, document.getElementById("media"));
