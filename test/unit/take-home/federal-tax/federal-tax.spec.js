import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import FederalTax from '../../../../src/take-home/federal-tax/federal-tax';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <FederalTax/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            federalTax: chance.natural()
        };

        component = shallow(<FederalTax {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('federal-tax');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('FEDERAL_TAX');

    });

    it('should display the federal tax', () => {

        const federalTax = component.children(FormattedNumber);

        expect(federalTax.props().currency).equal('USD');
        expect(federalTax.props().currencyDisplay).equal('symbol');
        expect(federalTax.props().style).equal('currency');
        expect(federalTax.props().value).equal(mockProps.federalTax);

    });

});
