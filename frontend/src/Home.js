import React from "react";
import "./Home.css";
import Link from "@material-ui/core/Link";
import VerticalLineStepper from "./VerticalLineStepper";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="home">
      <div>
        <img
          className="home__image"
          src="https://secure.skypeassets.com/content/dam/scom/home-new/hero-banner/3-3grid-main-page-min.png"
          alt=""
        />
      </div>
      <div className="home__header">
        <h2>Meet Like Minded Students on Example Now.</h2>
        <h3>
          Join hundreds of other University Students on Example Now. Group
          Allocations generated in under 3 minutes!
        </h3>
        <Link href="/register">
          <button className="home__bannerButton">Register Now</button>
        </Link>
      </div>
      <div className="home__stepper">
        <h2>How it works</h2>
        <VerticalLineStepper className="home__test" />
      </div>
    </div>
  );
}
