// Text Editer Component
import React from "react";
// import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.scss";

// Main Component
const TextEditer = (props) => {
  return (
    <div className="text-editor p-0">
      <ReactQuill 
        value={props.value} 
        onChange={props.onChange} 
        modules={TextEditer.modules}
        formats={TextEditer.formats}
        placeholder={props.placeholder}
      />
    </div>
  );  
};

TextEditer.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
TextEditer.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]


export default React.memo(TextEditer, isEqual);