import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-y-2 justify-center">
          <div className="flex gap-x-3 text-lg text-black">
            <a href="https://github.com/rohit212002">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rohit-parmar-746135222">
              <FaLinkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
