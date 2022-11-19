import React from "react";
import { css } from "@emotion/css";
// import '../styles/dashboard.css'
import bg from "../assets/bg.jpg";
import Link from "next/link";

function Dashboard() {
  return (
    <main className="landing">
      <h1>Your Go to Platform for Decentralized Ticketing</h1>
      <Link href="/nft">
        <button>Get Started</button>
      </Link>
    </main>
  );
}

export default Dashboard;
