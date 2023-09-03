import React from "react";
import Image from "next/image";

const FeaturedProject = () => {
  return (
    <div className="h-72 w-8/12 mt-5">
      <h1 className="text-off-white">Featured Project</h1>
      <Image
        src="https://picsum.photos/4000/4000"
        alt="photo of said project"
        height="500"
        width="700"
        className="ml-4 rounded-lg"
      />
    </div>
  );
};

export default FeaturedProject;
