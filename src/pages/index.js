import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import HelpPrompt from "../components/HelpPrompt";
import H3 from "../components/Typeography/H3";
import H6 from "../components/Typeography/H6";
import SearchFormBasic from "../components/SearchFormBasic";
import CatagoryCard from "../components/CategoryCard";

import {
  GetStartedIcon,
  DomainIcon,
  WebsiteIcon,
  PaymentIcon,
  UserIcon,
  OrganisationIcon,
} from "../components/Icons";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 40px;
  color: #444;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 300px 300px;
  }

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    width: 85vw;
  }
`;
const HelpPromptPadding = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BlueTopSection = styled.div`
  width: 100%;
  height: 480px;
  background: #e9f1f6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  margin-top: -20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
`;

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <BlueTopSection />
      <ContentWrapper>
        <H3
          css={`
            @media only screen and (max-width: 455px) {
              font-size: 30px;
            }
          `}
        >
          How can we help you?
        </H3>

        <SearchFormBasic />

        <>
          <H6>Or browse a help topic…</H6>
          <CategoryGrid>
            <CatagoryCard
              link={"/lets-get-started"}
              title={"Let's get started"}
              description={`Everything you need to know to get your website up and running.`}
            >
              <GetStartedIcon />
            </CatagoryCard>
            <CatagoryCard
              link={"/cat2"}
              title={"Websites"}
              description={`Find out about websites and how to make the most out of
                yours.`}
            >
              <WebsiteIcon />
            </CatagoryCard>
            <CatagoryCard
              link={"/cat3"}
              title={"Connectivity"}
              description={`Learn about potential connectivity issues here.`}
            >
              <DomainIcon />
            </CatagoryCard>
            <CatagoryCard
              link={"/cat4"}
              title={"Billing"}
              description={`If you are having issues with your payment, find your
                solution here.`}
            >
              <PaymentIcon />
            </CatagoryCard>
            <CatagoryCard
              link={"/cat5"}
              title={"My account"}
              description={`Learn about your account, security and all the different
                settings.`}
            >
              <UserIcon />
            </CatagoryCard>
            <CatagoryCard
              link={"/cat6"}
              title={"Members"}
              description={` Learn about your account and all the different settings.`}
            >
              <OrganisationIcon />
            </CatagoryCard>
          </CategoryGrid>
        </>
        <HelpPromptPadding>
          <HelpPrompt />
        </HelpPromptPadding>
      </ContentWrapper>
    </Layout>
  );
};

export default IndexPage;
