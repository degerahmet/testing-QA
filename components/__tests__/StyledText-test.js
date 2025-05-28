import React from 'react';
import renderer, { act } from 'react-test-renderer'; // Import act from react-test-renderer
import { it, expect } from '@jest/globals';

import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  let tree;
  act(() => {
    tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();
  });

  expect(tree).toMatchSnapshot();
});