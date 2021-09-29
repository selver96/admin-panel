import { Divider, TextField } from "@material-ui/core";
import React from "react";
import "./Conversation.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Mood, Send } from "@material-ui/icons";
import ScrollArea from "react-scrollbar";
import { useRef, useEffect } from "react";
import { Input } from "@material-ui/core";

const parseTextForComponent = (data: string) => {
  let newData = "";
  if (data.length > 60) {
    let index = 50;
    for (let i = 0; i < data.length; i++) {
      if (i == index) {
        newData += "\n";
        index += 50;
      } else {
        newData += data[i];
      }
    }
    return newData;
  } else {
    return data;
  }
};

const RenderConversationList = () => {
  return (
    <List>
      <div className="conversationList">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mood />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Conversation Name" secondary="Jan 9, 2014" />
        </ListItem>
      </div>
      <Divider variant="inset" component="li" />
      <div className="conversationList">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mood />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Conversation Name" secondary="Jan 9, 2014" />
        </ListItem>
      </div>
      <Divider variant="inset" component="li" />
      <div className="conversationList">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Mood />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Conversation Name" secondary="Jan 9, 2014" />
        </ListItem>
      </div>
      <Divider variant="inset" component="li" />
    </List>
  );
};

const RequestMessage = () => {
  return (
    <div className="box">
      <div className="messageBox right">
        <div className="message request">
          <p className="messageText">
            {parseTextForComponent(
              "Sweet! So, what do you wanna do today???????????????????????????????////////////////////////////aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            )}
          </p>
        </div>
        <img
          className="profileImage right"
          src="https://eitopi.com/wp-content/uploads/2015/06/s_157245116-680x464.jpg"
        />
      </div>
    </div>
  );
};

const ResponseMessage = () => {
  return (
    <div className="box">
      <div className="messageBox left">
        <img
          className="profileImage left"
          src="https://www.w3schools.com/w3images/avatar_g2.jpg"
        />
        <div className="message response">
          <p className="messageText">
            {parseTextForComponent(
              "Hello. How are you gdfgdhdfhdfhdfhdfhdfhdfhdfhdfhdfhdf today?///////////////////////////////////////////////////////fdssdfsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffferqwwwwwwwwwwwwwtwrt"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserInput = () => {
  let message = React.createRef<HTMLElement>();
  const addRequestMessage = () => {};

  return (
    <div className="userInput">
      <div className="inputText">
        <TextField className="inputText" />
      </div>
      <div className="userSend">
        <button onClick={addRequestMessage} className="buttonSend">
          <Send />
        </button>
      </div>
    </div>
  );
};

export const Conversation = () => {
  return (
    <div className="container">
      <div className="conversation">
        <h3 className="conversationTitle">All Conversations</h3>
        <Divider />
        <RenderConversationList />
      </div>
      <div className="chat">
        <h3 className="conversationTitle">Conversation Name</h3>
        <Divider />
        <div className="messageList">
          <ResponseMessage />
          <RequestMessage />
        </div>
        <UserInput />
      </div>
    </div>
  );
};
