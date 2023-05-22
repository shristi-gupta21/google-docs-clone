import React, { useEffect,useRef } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
const TextEditor = () => {
    const wrapperRef= useRef()
  useEffect(() => {
    const editor  = document.createElement('div');
    wrapperRef.current.append(editor)
    new Quill(editor, { theme: "snow" });
  }, []);
  return <div id="container" ref={wrapperRef}></div>;
};

export default TextEditor;
