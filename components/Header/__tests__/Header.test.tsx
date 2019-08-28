import * as React from 'react';
import { shallow } from 'enzyme'
import Header from '..';

it('Header should renders without crash', () => {
    shallow(<Header />);
})