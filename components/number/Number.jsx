import { IconDashboard } from "@tabler/icons-react";
import React from "react";

const Number = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row justify-around p-8 mb-4">
      <div className="flex flex-col p-4 gap-2">
        <div className="flex gap-1">
          <IconDashboard className="text-blue-600 w-12 h-12" />
          <div className="text-blue-600 text-5xl font-semibold">400+</div>
        </div>
        <div> Lorem ipsum dolor sit amet consectetu</div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex gap-1">
          <IconDashboard className="text-blue-600 w-12 h-12" />
          <div className="text-blue-600 text-5xl font-semibold">6 Hr</div>
        </div>
        <div> Lorem ipsum dolor sit amet consectetu</div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex gap-1">
          <IconDashboard className="text-blue-600 w-12 h-12" />
          <div className="text-blue-600 text-5xl font-semibold">2000+</div>
        </div>
        <div> Lorem ipsum dolor sit amet consectetu</div>
      </div>
    </div>
  );
};

export default Number;
