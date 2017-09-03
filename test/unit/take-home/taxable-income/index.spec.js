import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/taxable-income';
import TaxableIncome from '../../../../src/take-home/taxable-income/taxable-income';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <TaxableIncome/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            taxableIncome: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(TaxableIncome);
        expect(component.props().taxableIncome).equal(mockProps.taxableIncome);

    });

});
