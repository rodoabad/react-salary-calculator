import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TaxableIncome from '../../../../src/take-home/taxable-income/taxable-income';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<TaxableIncome/>', () => {

    const chance = new Chance();

    const requiredProps = () => ({
        taxableIncome: chance.natural()
    });

    const render = (props = requiredProps()) => shallow(<TaxableIncome {...props}/>);

    it('should be a section', () => {

        const component = render();

        expect(component.type()).equal('section');
        expect(component.props().className).equal('taxable-income');

    });

    it('should have a label', () => {

        const component = render();
        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAXABLE_INCOME');

    });

    it('should display the taxable income', () => {

        const props = requiredProps();

        const component = render(props);
        const taxableIncome = component.children(FormattedNumber);

        const expectedTaxableIncomeProps = {
            currency: 'USD',
            currencyDisplay: 'symbol',
            style: 'currency',
            value: props.taxableIncome
        };

        expect(taxableIncome.props()).equal(expectedTaxableIncomeProps);

    });

});
