import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/take-home-weekly';
import TakeHomeWeekly from '../../../../src/take-home/take-home-weekly/take-home-weekly';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeWeekly/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeWeekly: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(TakeHomeWeekly);
        expect(component.props().takeHomeWeekly).equal(mockProps.takeHomeWeekly);

    });

});
