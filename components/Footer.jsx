import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
// import '../styles/globals.css'

function Footer() {
  return (
    <div className="bg-gray-100 text-zinc-800  pt-4 b-0 font-body footer">
      <div className=" flex justify-around">
        <span className="m-1">Contact Me - </span>
        <span className="m-1 hover:text-red-300">
          <a
            href="https://www.instagram.com/its_trick_master/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </span>
        <span className="m-1 hover:text-red-300">
          <a
            href="https://github.com/ArpitBodana"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </span>
      </div>
      <hr />
      <div className="flex justify-around">
        <Link href={"/disclamier"}>
          <a>
            <span className="m-1 hover:text-red-300">Disclaimer</span>
          </a>
        </Link>
        <Link href={"/policies"}>
          <a>
            <span className="m-1 hover:text-red-300">Privacy Policy</span>
          </a>
        </Link>
        <Link href={"/terms"}>
          <a>
            <span className="m-1 hover:text-red-300">Terms And Conditions</span>
          </a>
        </Link>
        <Link href={"/about"}>
          <a>
            <span className="m-1 hover:text-red-300">About</span>
          </a>
        </Link>
        <br />
      </div>
      <div className="text-center">
        <span className="">
          {" "}
          &#169; 2021 ThoughtBook WebSite Designed By ArpitBodana .
        </span>
      </div>
    </div>
  );
}

export default Footer;
