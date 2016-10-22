import React from 'react';
import {TakeHome} from '../../../src/take-home/';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHome/> component', () => {

    let takeHomeEl;

    beforeEach(() => {

        takeHomeEl = shallow(<TakeHome/>);

    });

    it('should have a <section/>', () => {

        expect(takeHomeEl.type()).string().equal('section');

    });

    it('should have text', () => {

        expect(takeHomeEl.text()).string().equal('Hello world');

    });

});
