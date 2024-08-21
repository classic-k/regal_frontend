"use client"
import Image from "next/image";
//import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main>
     
          <div className="logo">Regal Mark</div>
          <div className="saia-widget-container center"></div>

<Script onLoad={() => console.log("Get measure loaded")} id="saia-mtm-integration" async src="https://mtm-widget.3dlook.me/integration.js" data-public-key="OTkxMA:1sVZFP:Gm2sx8FOzBxNsrIWg4Wex3fNb3osqEZk1N3NfVtLiSA">
</Script>


    </main>
  );
}
