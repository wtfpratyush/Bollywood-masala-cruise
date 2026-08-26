import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import FaqSection from "../components/FaqSection";

const FaqPage = () => (
  <Layout>
    <PageBanner
      title="FAQ"
      crumb="FAQ"
      bgImage="https://images.unsplash.com/photo-1511316695145-4992006ffddb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85"
      subtitle="Everything you need to know before you set sail with us."
    />
    <FaqSection showAll />
  </Layout>
);

export default FaqPage;
