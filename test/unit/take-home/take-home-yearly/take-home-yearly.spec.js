import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TakeHomeYearly from '../../../../src/take-home/take-home-yearly/take-home-yearly';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeYearly/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeYearly: chance.natural()
        };

        component = shallow(<TakeHomeYearly {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('take-home-yearly');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAKE_HOME_YEARLY');

    });

    it('should display the yearly salary', () => {

        const takeHomeYearly = component.children(FormattedNumber);

        expect(takeHomeYearly.props().currency).equal('USD');
        expect(takeHomeYearly.props().currencyDisplay).equal('symbol');
        expect(takeHomeYearly.props().style).equal('currency');
        expect(takeHomeYearly.props().value).equal(mockProps.takeHomeYearly);

    });

});
