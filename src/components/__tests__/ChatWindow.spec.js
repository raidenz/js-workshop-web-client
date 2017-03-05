import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import ChatWindow from '../ChatWindow';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it('should has predefined state', () => {
  const subject = mount(<ChatWindow />);

  expect(subject.state('messages').length).toBe(1);
  expect(subject.state('messages')[0].text).toBe('Hello there! You can ask me to remember what will you do');
});

it('should able to send message to server', () => {
  const subject = mount(<ChatWindow />);

  return moxios.wait(() => {
    const request = moxios.requests.mostRecent();

    request.respondWith({
      status: 200,
      response: {
        answer: 'Okay',
      }
    }).then(() => {
      expect(subject.state('messages').length).toBe(2);
      expect(subject.state('messages')[1].text).toBe('Okay');
    });
  })
});
