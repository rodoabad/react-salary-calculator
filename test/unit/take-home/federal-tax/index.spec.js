import Chance from 'chance';
import FederalTax from '../../../../src/take-home/federal-tax/federal-tax';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/federal-tax';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <FederalTax/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            federalTax: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(FederalTax);
        expect(component.props().federalTax).equal(mockProps.federalTax);

    });

});
