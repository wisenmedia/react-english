//import React from "react";

function Card() {
  return (
    <div class="flex flex-col items-center gap-6 p-8 md:flex-row md:gap-8 rounded-2xl">
      <div>
        <img
          class="size-60 shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/40279274/pexels-photo-40279274.jpeg"
        />
      </div>
      <div class="flex items-center md:items-start">
        <span class="text-2xl font-medium">Class Warfare</span>
        <span class="font-medium text-sky-500 p-2">The Anti-Patterns {""}</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
