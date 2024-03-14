import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Message = ({ message, show }) => {
    return (
        <CSSTransition in={show} classNames="message" unmountOnExit>
            <div className="message-container">
                <div className="message-text">{message}</div>
            </div>
        </CSSTransition>
    );
};

export default Message;