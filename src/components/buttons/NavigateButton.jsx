import React from "react";

export default function NavigateButton({ text, href }) {
  function navigate() {
    window.location.href = href;
  }

  return (
    <button
      onClick={navigate}
      className="bg-gradient-to-r from-gl to-gr w-[120px] h-[45px] rounded-[100px] text-[16px] text-white font-semibold inline-block"
    >
      {text}
    </button>
  );
}
