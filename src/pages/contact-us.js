import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Layout from "../components/Layout";
import TextField from "../components/TextField";
import CategoryTitle from "../components/CategoryTitle";
import HelpPrompt from "../components/HelpPrompt";

import {
  MessageIcon,
  ChatIcon,
  EmailIcon,
  ContactIcon,
  TickIcon,
} from "../components/Icons";

import H4 from "../components/Typeography/H4";
import H6 from "../components/Typeography/H6";

import Body2 from "../components/Typeography/Body2";
import Body1 from "../components/Typeography/Body1";
import SearchFormBasic from "../components/SearchFormBasic";

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 40px;
  padding-bottom: 30px;
  margin: auto;
  margin-bottom: 20px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const MessageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding-top: 20px;
  padding-bottom: 30px;
  margin: auto;
  width: 420px;
`;

const CategoryCard = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  border-radius: 4px;
  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.2), 0 0 10px 0 rgba(0, 0, 0, 0.12),
    0 0 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1024px) {
    margin: 20px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const BlueTopSection = styled.div`
  width: 100%;
  height: 340px;
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

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CardDescription = styled.div`
  padding-top: 10px;
  width: 250px;
  text-align: center;
`;
const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background-color: #e9f1f6;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HorizontalDivider = styled.div`
  width: 352px;
  height: 2px;
  border-radius: 1px;
  background-color: #d8d8d8;
`;

const ButtonWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
`;

const TickIconWrapper = styled.div`
  padding-top: 4px;
  padding-right: 10px;
`;

const SendMessageWrapper = styled(ColumnWrapper)``;

const PillAvailable = styled.div`
  width: 72px;
  height: 19px;
  border-radius: 100px;
  background-color: #60c0a5;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: 900;
  color: #ffffff;
  position: absolute;
  top: 15px;
  right: 15px;
  text-transform: uppercase;
`;
const PillUnvailable = styled(PillAvailable)`
  background-color: #dddddd;
  width: 87px;
  color: #848484;
`;

const SendMessage = ({ handleSendMessage }) => {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  return (
    <SendMessageWrapper>
      <H4
        css={`
          padding-bottom: 20px;
        `}
      >
        Send a message
      </H4>
      <Body1>
        Enter your details and your message to our team and they will response
        shortly.
      </Body1>
      <MessageGrid>
        <TextField
          isHoverLabelVisible={true}
          placeholder="Name"
          type="text"
          value={usersName}
          handleChange={setUsersName}
        />
        <TextField
          isHoverLabelVisible={true}
          placeholder="Email"
          type="text"
          value={usersEmail}
          handleChange={setUsersEmail}
        />
        <TextField
          isHoverLabelVisible={true}
          placeholder="Your message"
          type="text"
          value={usersMessage}
          handleChange={setUsersMessage}
        />
      </MessageGrid>
      <ButtonWrapper>
        <Button
          onClick={() => {
            handleSendMessage(true);
          }}
          theme={{ main: "#2875aa", fontColor: "#fff" }}
        >
          Send message
        </Button>
      </ButtonWrapper>
      <HorizontalDivider />
    </SendMessageWrapper>
  );
};

const MessageSent = ({ handleNewMessage }) => {
  return (
    <SendMessageWrapper>
      <H4
        css={`
          padding-bottom: 20px;
        `}
      >
        Send a message
      </H4>
      <RowWrapper>
        <TickIconWrapper>
          <TickIcon />
        </TickIconWrapper>
        <Body1
          css={`
            color: #60c0a5;
          `}
        >
          Your message has been sent successfully.
        </Body1>
      </RowWrapper>

      <ButtonWrapper>
        <Button
          onClick={() => {
            handleNewMessage(true);
          }}
          outline
          theme={{ main: "#2875aa", fontColor: "#2875aa" }}
        >
          Send new message
        </Button>
      </ButtonWrapper>
      <HorizontalDivider />
    </SendMessageWrapper>
  );
};

const ContactPage = ({ location }) => {
  const [isSendMessageSelected, setIsSendMessageSelected] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isChatAvailable, setIsChatAvailable] = useState(true);

  const sendNewMessage = () => {
    setIsMessageSent(false);
    setIsSendMessageSelected(true);
  };

  return (
    <Layout location={location}>
      <>
        <BlueTopSection />
        <>
          <ContentWrapper>
            <RowWrapper>
              <CategoryTitle title={"Contact us"}>
                <ContactIcon />
              </CategoryTitle>
            </RowWrapper>
            <H6>Select one of the following options:</H6>
            <CategoryGrid>
              <CategoryCard
                css={`
                  position: relative;
                `}
                onClick={() => {
                  setIsSendMessageSelected(false);
                  setIsChatAvailable(!isChatAvailable);
                }}
              >
                <ColumnWrapper>
                  <IconCircle>
                    <ChatIcon />
                  </IconCircle>
                  <CardDescription>
                    <H6>Chat</H6>

                    <Body2>
                      Chat with a team member now. Average response time: 1 hr.
                    </Body2>
                  </CardDescription>
                </ColumnWrapper>
                {isChatAvailable ? (
                  <PillAvailable>Available</PillAvailable>
                ) : (
                  <PillUnvailable>Unavailable</PillUnvailable>
                )}
              </CategoryCard>

              <CategoryCard
                onClick={() => {
                  setIsSendMessageSelected(!isSendMessageSelected);
                }}
              >
                <ColumnWrapper>
                  <IconCircle>
                    <MessageIcon />
                  </IconCircle>
                  <H6>Send a message</H6>
                  <CardDescription>
                    <Body2>
                      Send a message to the team directly and we will get back
                      to you.
                    </Body2>
                  </CardDescription>
                </ColumnWrapper>
              </CategoryCard>

              <CategoryCard
                onClick={() => {
                  setIsSendMessageSelected(false);
                }}
              >
                <ColumnWrapper>
                  <IconCircle>
                    <EmailIcon />
                  </IconCircle>
                  <H6>Email</H6>
                  <CardDescription>
                    <Body2>Email us and we will get back to you shortly.</Body2>
                  </CardDescription>
                </ColumnWrapper>
              </CategoryCard>
            </CategoryGrid>
            {isSendMessageSelected && !isMessageSent ? (
              <SendMessage handleSendMessage={setIsMessageSent} />
            ) : (
              <></>
            )}
            {isMessageSent ? (
              <MessageSent handleNewMessage={sendNewMessage} />
            ) : (
              <></>
            )}
            <H6
              css={`
                padding-bottom: 40px;
                padding-left: 20px;
                padding-right: 20px;
                margin-top: 40px;
                text-align: center;
              `}
            >
              You can also try searching our help section for a solution
            </H6>
          </ContentWrapper>
        </>
        <ContentWrapper>
          <SearchFormBasic />
          <div
            css={`
              padding-top: 20px;
              padding-bottom: 20px;
            `}
          >
            <HelpPrompt />
          </div>
        </ContentWrapper>
      </>
    </Layout>
  );
};

export default ContactPage;
