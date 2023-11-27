import React from "react";

export default function NavigateButton({ text, type,customStyle }) {
  return (
    <button
      type={type}
      className={`bg-gradient-to-r from-gl to-gr w-[120px] h-[45px] rounded-[100px] text-[16px] text-white font-semibold inline-block ${customStyle}`}
    >
      {text}
    </button>
  );
}
