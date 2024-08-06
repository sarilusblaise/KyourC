import React from "react";

const loading = () => {
  return (
    <div className="flex w-[30vw] flex-col gap-4">
      <div class="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  );
};

export default loading;
