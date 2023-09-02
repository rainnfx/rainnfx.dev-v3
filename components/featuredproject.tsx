import React from "react";
import Image from "next/image";

const FeaturedProject = () => {
  return (
    <div className="h-72 w-8/12 mt-5">
      <h1 className="text-off-white">Featured Project</h1>
      <Image
        src="/"
        alt="photo of me"
        height="400"
        width="400"
        className="ml-4 rounded-lg"
      />
    </div>
  );
};

export default FeaturedProject;
