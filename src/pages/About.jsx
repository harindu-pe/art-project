import React from "react";

export default function About() {
  return (
    <section className="h-screen flex flex-col gap-3 items-center p-4 mx-auto">
      <h2 className="text-4xl  font-extrabold text-center text-gray-900 ">
        About Me
      </h2>

      <p className="mb-8 lg:mb-16  text-center text-gray-900  sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum
        error voluptatum ea tempora eum exercitationem dicta officia
        reprehenderit molestias consequuntur hic voluptate aspernatur ex
        consequatur accusantium esse, illum reiciendis?
      </p>
      <img
        className="w-full rounded-md"
        src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
      />
    </section>
  );
}
