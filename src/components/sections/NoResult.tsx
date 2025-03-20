import React from "react";

interface NoResultProps {
  img: string;
  main: string;
  sub: string;
  desc: string;
  btn: string;
  onClick: () => void;
}

const NoResult: React.FC<NoResultProps> = ({ img, main, sub, desc, btn, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <img src={img} alt="No results" className="w-32 h-32" />

      <p className="font-bold text-[#48464E] text-[20px]">
        {main}{" "}
        <span className="font-bold text-[#E16635] underline text-[20px]">{sub}</span>
      </p>

      <p className="font-normal text-base text-center text-[#6C6975] max-w-md">
        {desc}
      </p>

      <button
        onClick={onClick}
        className="bg-[#E16635] text-white rounded-full px-6 py-2 w-full max-w-[350px] transition duration-300 hover:bg-[#C5542C] focus:ring focus:ring-[#E16635]/50 cursor-pointer" 
      >
        {btn}
      </button>
    </div>
  );
};

export default NoResult;
