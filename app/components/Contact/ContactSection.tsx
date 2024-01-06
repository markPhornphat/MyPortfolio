"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/image/GitHub-Mark-ea2971cee799.png";
import InstagramIcon from "../../../public/image/instagram-icon-2048x2048-uc6feurl.png";
import LinkedInIcon from "../../../public/image/LinkedInIcon.png";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData: Record<string, string> = {};

    // const data = {
    //   email: formData.email,
    //   subject: formData.subject,
    //   message: formData.message,
    // };
    // const data = {
    //   email: e.target.email.value,
    //   subject: e.target.subject.value,
    //   message: e.target.message.value,
    // };
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // console.log(data);

    const JSONdata = JSON.stringify(data);
    const endPoint = "api/send";
    const options = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endPoint, options);

    if (response.status === 200) {
      console.log("Message sent!");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div className="xl:ml-24">
        <h5 className="text-xl font-bold my-2">Let's connect</h5>
        <p className="text-slate-500 mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          reiciendis cum earum nemo eaque unde odit perferendis, molestias
          dignissimos possimus, architecto vel mollitia ipsum, laudantium ipsa
          commodi! Eius, repellendus hic.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href={"https://github.com/markPhornphat"}>
            <Image src={GithubIcon} alt="GithubIcon" width={50} />
          </Link>
          <Link href={"https://www.instagram.com/marklileo/"}>
            <Image src={InstagramIcon} alt="InstagramIcon" width={50} />
          </Link>
          <Link href={"https://www.linkedin.com/in/marklileo/"}>
            <Image src={LinkedInIcon} alt="LinkedInIcon" width={50} />
          </Link>
        </div>
      </div>

      {/* form section */}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              {" "}
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-white border border-slate-600 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="YourEmail@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              {" "}
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-white border border-slate-600 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              {" "}
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-white border border-slate-600 placeholder-gray-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-slate-400 hover:opacity-80 font-medium py-2.5 px-5 rounded-full w-full"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
