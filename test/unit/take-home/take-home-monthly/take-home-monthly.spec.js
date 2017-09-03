import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TakeHomeMonthly from '../../../../src/take-home/take-home-monthly/take-home-monthly';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeMonthly/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeMonthly: chance.natural()
        };

        component = shallow(<TakeHomeMonthly {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('take-home-monthly');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAKE_HOME_MONTHLY');

    });

    it('should display the monthly salary', () => {

        const takeHomeMonthly = component.children(FormattedNumber);

        expect(takeHomeMonthly.props().currency).equal('USD');
        expect(takeHomeMonthly.props().currencyDisplay).equal('symbol');
        expect(takeHomeMonthly.props().style).equal('currency');
        expect(takeHomeMonthly.props().value).equal(mockProps.takeHomeMonthly);

    });

});
