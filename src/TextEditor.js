import React, { useCallback, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
const TextEditor = () => {
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];
  const [documentName, setDocumentName] = useState("");
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    const toolbar = document.getElementsByClassName("ql-toolbar");
    console.log(toolbar);

    wrapper.append(editor);
    new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);

  return (
    <>
      <div className="flex p-2">
        <div>
          <img
            src={process.env.PUBLIC_URL + "./images/docs-icon.png"}
            className="h-9 mt-3 mb-1 ml-2"
            alt=""
          />
        </div>
        <div className="w-[100%]">
          <div className="flex w-[100%]">
            <div className="flex xl:w-[80%] lg:w-[70%]">
              <input
                spellcheck="false"
                type="text"
                autocomplete="off"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                className="visible w-40 inline  h-6 text-center py-2 bg-slate-50 px-[1px]  placeholder:text-black  text-lg placeholder:leading-none"
                placeholder="Untitled document"
              />
              <div className="mx-2">
                <span class="material-symbols-outlined px-2">star</span>
                <span class="material-symbols-outlined px-2">
                  drive_file_move
                </span>
                <span class="material-symbols-outlined px-2">cloud_done</span>
              </div>
            </div>
            <div className="flex justify-between xl:w-[20%] lg:w-[30%]  absolute right-4 py-2">
              <span class="material-symbols-outlined text-2xl">history</span>
              <span className="material-symbols-outlined text-2xl">chat</span>

              <div className="mr-4">
                <span className="material-symbols-outlined text-2xl">
                  video_call
                </span>
                <i
                  class="fa fa-sort-desc top-3 absolute ml-3"
                  aria-hidden="true"
                ></i>
              </div>
              <button className="px-6  rounded-[100px] bg-blue-200 flex items-center -my-2 ">
                <span class="material-symbols-outlined text-lg ">lock</span>
                <span>&nbsp;Share</span>
              </button>
              <img
                src={process.env.PUBLIC_URL + "./images/girl-avatar.webp"}
                className="w-8 h-8 rounded-full bg-black "
                alt=""
              />
            </div>
          </div>
          <div>
            <ul className="list-none max-w-[424px] flex justify-between  cursor-pointer text-sm">
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                File
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Edit
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                View
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Insert
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Format
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Tools
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Extensions
              </li>
              <li className="hover:bg-slate-200 px-2 py-[0.12rem] hover:rounded">
                Help
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex relative w-[100%]">
        <div className="flex flex-col w-[95%]">
          <div className="container h-full w-full " ref={wrapperRef}></div>
        </div>
        <div className="flex flex-col w-[5%]  ">
          <ul className="absolute top-2 right-3">
            <li className="">
              <a href=" https://calendar.google.com/calendar/u/0/r">
                <img
                  src={process.env.PUBLIC_URL + "./images/gcalendar-icon.png"}
                  alt=""
                  className="h-6"
                />
              </a>
            </li>
            <li className="py-10">
              <a href="https://keep.google.com/u/0/ ">
                <img
                  src={process.env.PUBLIC_URL + "./images/gkeep-icon.jpg"}
                  alt=""
                  className="h-6"
                />
              </a>
            </li>
            <li className="pb-10">
              <a href="https://developers.google.com/tasks">
                <img
                  src={process.env.PUBLIC_URL + "./images/gtasks-icon.png"}
                  alt=""
                  className="h-6"
                />
              </a>
            </li>
            <li className="pb-10">
              <a href="https://contacts.google.com/">
                <img
                  src={process.env.PUBLIC_URL + "./images/gcontacts-icon.png"}
                  alt=""
                  className="h-6"
                />
              </a>
            </li>
            <li className="pb-10">
              <a href="https://www.google.com/maps">
                <img
                  src={process.env.PUBLIC_URL + "./images/gmaps-icon.png"}
                  alt=""
                  className="h-6"
                />
              </a>
            </li>

            <p className="material-symbols-outlined ">add</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
