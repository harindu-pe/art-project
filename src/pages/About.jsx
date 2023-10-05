import React from "react";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col gap-3 items-center py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        <img
          className="w-4/5"
          src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
        />
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          rerum error voluptatum ea tempora eum exercitationem dicta officia
          reprehenderit molestias consequuntur hic voluptate aspernatur ex
          consequatur accusantium esse, illum reiciendis?
        </p>
      </div>
    </section>
  );
}
