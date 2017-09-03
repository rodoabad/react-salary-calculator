import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/take-home-yearly';
import TakeHomeYearly from '../../../../src/take-home/take-home-yearly/take-home-yearly';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeYearly/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeYearly: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(TakeHomeYearly);
        expect(component.props().takeHomeYearly).equal(mockProps.takeHomeYearly);

    });

});
