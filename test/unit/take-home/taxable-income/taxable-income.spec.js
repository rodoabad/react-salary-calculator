import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TaxableIncome from '../../../../src/take-home/taxable-income/taxable-income';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TaxableIncome/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            taxableIncome: chance.natural()
        };

        component = shallow(<TaxableIncome {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('taxable-income');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAXABLE_INCOME');

    });

    it('should display the taxable income', () => {

        const taxableIncome = component.children(FormattedNumber);

        expect(taxableIncome.props().currency).equal('USD');
        expect(taxableIncome.props().currencyDisplay).equal('symbol');
        expect(taxableIncome.props().style).equal('currency');
        expect(taxableIncome.props().value).equal(mockProps.taxableIncome);

    });

});
