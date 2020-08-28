import React from "react";

const ImageInput = ({ onInputChange, onSubmit }) => {
  return (
    <div className="ma4 mt0 w-50 center">
      <p className="f3">Deze magische website ziet alle mooie gezichtjes!</p>
      <div>
        <input
          className="f4 pa2 w-70 center"
          onChange={onInputChange}
          type="text"
        ></input>
        <button
          onClick={onSubmit}
          className="w-30 grow f4 link ph3 pv2 dib white bg-black pointer"
        >
          Vind!
        </button>
      </div>
    </div>
  );
};

export default ImageInput;
