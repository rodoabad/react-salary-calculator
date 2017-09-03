import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/take-home-monthly';
import TakeHomeMonthly from '../../../../src/take-home/take-home-monthly/take-home-monthly';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeMonthly/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeMonthly: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(TakeHomeMonthly);
        expect(component.props().takeHomeMonthly).equal(mockProps.takeHomeMonthly);

    });

});
