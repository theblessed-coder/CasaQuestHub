import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white text-center p-4 mt-auto">
        <div className="flex justify-evenly pt-10">
          <div>
            <h1 className="text-xl font-bold">Quick Links</h1>
            <div className="flex flex-col p-4">
              <a href="/" className="text-white hover:text-yellow-500 p-1">
                Home
              </a>
              <a href="/about" className="text-white hover:text-yellow-500 p-1">
                About Us
              </a>
              <a
                href="/contact"
                className="text-white hover:text-yellow-500 p-1"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Follow Us</h1>
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-white hover:text-yellow-500"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="text-white hover:text-yellow-500"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="text-white hover:text-yellow-500"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="pt-3">CasaQuestHub &copy; 2023. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
