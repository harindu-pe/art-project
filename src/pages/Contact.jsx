import React from "react";

export default function Contact() {
  return (
    <section className="bg-white ">
      <div className=" py-4 px-10 mx-auto max-w-screen-md">
        <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact Me
        </h2>
        <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 ">
          Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your email
              <input
                type="email"
                id="email"
                className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Subject
              <input
                type="text"
                id="subject"
                className="mt-2 block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your message
              <textarea
                id="message"
                rows="6"
                className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
