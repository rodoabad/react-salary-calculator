import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/take-home-bi-weekly';
import TakeHomeBiWeekly from '../../../../src/take-home/take-home-bi-weekly/take-home-bi-weekly';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeBiWeekly/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeBiWeekly: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(TakeHomeBiWeekly);
        expect(component.props().takeHomeBiWeekly).equal(mockProps.takeHomeBiWeekly);

    });

});
