import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { ArrowRight } from "../Icons";
import styled from "styled-components";
import useScrollPosition from "../../hooks/useScrollPosition";

const HeaderOuterWrapper = styled.div`
  z-index: 999;
  width: 100%;
  height: 90px;
  background: #e9f1f6;

  ${(props) =>
    props.isScrolled &&
    `box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.1), 0 0 12px 0 rgba(0, 0, 0, 0.15),
        0 0 2px 0 rgba(0, 0, 0, 0.21);`}

  @media only screen and (max-width: 767px) {
    align-items: center;
    box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.2),
      0 0 22px 4px rgba(0, 0, 0, 0.12);
  }
`;

const LogoWrapper = styled.div`
  margin-top: -2px;
  padding-left: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const InnerBreadCrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const HeaderInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1360px;
  padding-top: 30px;
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 2px;
  height: 30px;
  border-radius: 1px;
  background-color: #000000;
  margin-left: 20px;
`;
const HelpCenterLink = styled.p`
  width: 94px;
  height: 29px;
  font-size: 20px;
  font-weight: bold;
  color: #2875aa;
  padding-left: 20px;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const BreadCrumbLink = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2875aa;
  padding-left: 10px;
  padding-right: 10px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const BreadCrumbLinkDisabled = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #848484;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
`;

const BreadCrumbWrapper = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: row;
`;

const ArrowPadding = styled.div`
  padding-top: 2px;
`;

const AppBar = ({ location }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState([]);

  useEffect(() => {
    if (location) {
      setBreadCrumbs(location.pathname.split("/"));
    }
  }, [setBreadCrumbs, location]);

  for (var i = breadCrumbs.length - 1; i >= 0; i--) {
    if (breadCrumbs[i] === "") {
      breadCrumbs.splice(i, 1);
    }
  }

  const AllBreadCrumbs = breadCrumbs.map((item, index) => {
    let kebabCaseToStandardLink = item.replace(/-/g, " ");
    let LinkFirstLetterCaps =
      kebabCaseToStandardLink.charAt(0).toUpperCase() +
      kebabCaseToStandardLink.substring(1);

    return (
      <InnerBreadCrumbWrapper key={Math.random()}>
        <ArrowPadding>
          <ArrowRight />
        </ArrowPadding>
        {index === breadCrumbs.length - 1 ? (
          <BreadCrumbLinkDisabled>{LinkFirstLetterCaps}</BreadCrumbLinkDisabled>
        ) : (
          <Link to={"/" + item}>
            <BreadCrumbLink>{LinkFirstLetterCaps}</BreadCrumbLink>
          </Link>
        )}
      </InnerBreadCrumbWrapper>
    );
  });

  useScrollPosition(
    ({ currPos }) => {
      const isScrolledFarEnough = currPos.y > 0;
      if (isScrolledFarEnough !== isScrolled) {
        setIsScrolled(isScrolledFarEnough);
      }
    },
    [isScrolled],
    true
  );

  return (
    <HeaderOuterWrapper isScrolled={isScrolled}>
      <HeaderInnerWrapper>
        <a href="https://attackingpixels.com">
          <LogoWrapper>
            <svg
              width="70"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 650.92 312.12"
              fill="var(--logo)"
            >
              <title>Attacking Pixels - Adam Robinson</title>
              <path
                d="M-77.5,207q-94.75,0-189.5,0c-1.94,0-4.23,0-5.75-.91-3.66-2.29-2.13-5.34-.45-8.24q18.61-32.23,37.18-64.48Q-205,79.46-173.88,25.59c3.81-6.6,7.34-6.63,11.1-.13q39.38,68.12,78.66,136.27c2.35,4.09,4.91,6.07,9.76,5.86,7.82-.33,15.66,0,23.5,0,5.79,0,6.26-.86,3.29-6q-28.38-49.08-56.8-98.13-45.91-79.32-91.8-158.67c-4-6.91-2.33-9.78,5.63-9.78,41,0,82,.09,123,0,8,0,13.45,3.06,17.46,10Q33.55,51.12,117.37,197.09c4.09,7.14,2.42,9.91-5.88,9.91Z"
                transform="translate(275 105.03)"
              />
              <path
                d="M178.73-105h189c8.61,0,10.19,2.77,5.89,10.23L275,76.16c-4,7-7.34,7-11.32.17q-39-67.44-78-134.95c-2.77-4.83-5.65-7.46-11.62-7-7.46.57-15,0-22.49.08-5.43,0-6,1-3.24,5.73q29,50.15,58.08,100.29,45.3,78.26,90.57,156.51c4.14,7.17,2.47,10-5.77,10-40.5,0-81-.2-121.5.08-9.34.07-15.17-3.65-19.67-11.58Q114.24,132.29,77.93,69.35,30.59-13.19-16.8-95.72c-3.57-6.22-1.76-9.27,5.54-9.27Q83.74-105,178.73-105Z"
                transform="translate(275 105.03)"
              />
            </svg>
          </LogoWrapper>
        </a>
        <Divider />
        <Link to="/">
          <HelpCenterLink>Help center</HelpCenterLink>
        </Link>
        <BreadCrumbWrapper>{AllBreadCrumbs}</BreadCrumbWrapper>
      </HeaderInnerWrapper>
    </HeaderOuterWrapper>
  );
};

export default AppBar;
