import React, { Component } from 'react';
import ChatBot, { mergeMessage } from '../../src';

import '../../dist/index.css';

import { switchField } from './utils';

import options from './options';
import config from './config';

class AsyncDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.setField = this.setField.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(msg) {
    this.setState(mergeMessage(this.state, msg));
  }

  render() {
    const { messages, wait } = this.state;
    return (
      <div className="chat">
        <ChatBot
          welcomeId="welcome"
          messages={messages}
          options={options}
          onSendMessage={this.handleMessage}
          avatars={config.avatars}
          delay={config.delay}
        />
      </div>
    );
  }
}

export default AsyncDemo;
