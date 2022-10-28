import React from "react";
interface Props {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: Props) => (
  <div className=" shadow-lg p-4 rounded-lg flex flex-col gap-2 bg-white">
    <div className="flex justify-between items-center">
      <div className="font-bold">{title}</div>
      <div className="bg-gray-200 rounded py-1 px-3" title="code">
        <a
          href={`https://github.com/ahmed-sudani/404-pages/blob/master/src/components/${title}/index.tsx`}
        >
          {"</>"}
        </a>
      </div>
    </div>
    <hr />
    {children}
  </div>
);

export default Card;
