import React from "react";
import Banner from "../../components/home/Banner";
import ProxyLocation from "../../components/proxy-location/ProxyLocationComponent";
import Proxy from "../../components/proxy/Proxy";
import Navbar from "../../components/common/Navbar";

function LandingPage() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Banner />
      <ProxyLocation />
      <Proxy />
    </div>
  );
}

export default LandingPage;
