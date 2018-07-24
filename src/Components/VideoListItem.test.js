import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import VideoListItem from './VideoListItem';

const startState = {
   key: 1, title: 'cool gif', images: { downsized_small: {mp4: 'https://media2.giphy.com/media/7TbzWMCgati4vJkAjx/giphy-downsized-small.mp4'}
 }};

it('has a video and a title', () => {
  const wrapped = mount(<VideoListItem gif={startState}/>);

  expect(wrapped.find('video').length).toEqual(1);
  expect(wrapped.find('h4').length).toEqual(1);
});
