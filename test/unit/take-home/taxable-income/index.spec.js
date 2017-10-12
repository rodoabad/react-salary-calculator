import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/taxable-income';
import TaxableIncome from '../../../../src/take-home/taxable-income/taxable-income';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('<TaxableIncome/> connector', () => {

    const chance = new Chance();

    const requiredProps = () => ({
        taxableIncome: chance.natural()
    });

    const render = (props = requiredProps()) => {

        const mockStore = mockReduxStore(props);

        return shallow(<ReduxConnector store={mockStore}/>);

    };

    it('should be connecting the right component', () => {

        const props = {
            ...requiredProps(),
            taxableIncome: chance.natural()
        };

        const component = render(props);

        expect(component.type()).equal(TaxableIncome);
        expect(component.props().taxableIncome).equal(props.taxableIncome);

    });

});
