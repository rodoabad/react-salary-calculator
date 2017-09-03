import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TakeHomeBiWeekly from '../../../../src/take-home/take-home-bi-weekly/take-home-bi-weekly';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeBiWeekly/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeBiWeekly: chance.natural()
        };

        component = shallow(<TakeHomeBiWeekly {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('take-home-bi-weekly');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAKE_HOME_BI_WEEKLY');

    });

    it('should display the bi-weekly salary', () => {

        const takeHomeBiWeekly = component.children(FormattedNumber);

        expect(takeHomeBiWeekly.props().currency).equal('USD');
        expect(takeHomeBiWeekly.props().currencyDisplay).equal('symbol');
        expect(takeHomeBiWeekly.props().style).equal('currency');
        expect(takeHomeBiWeekly.props().value).equal(mockProps.takeHomeBiWeekly);

    });

});
