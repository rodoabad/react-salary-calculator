import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import React from 'react';
import TakeHomeWeekly from '../../../../src/take-home/take-home-weekly/take-home-weekly';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHomeWeekly/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            takeHomeWeekly: chance.natural()
        };

        component = shallow(<TakeHomeWeekly {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('take-home-weekly');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('TAKE_HOME_WEEKLY');

    });

    it('should display the weekly salary', () => {

        const takeHomeWeekly = component.children(FormattedNumber);

        expect(takeHomeWeekly.props().currency).equal('USD');
        expect(takeHomeWeekly.props().currencyDisplay).equal('symbol');
        expect(takeHomeWeekly.props().style).equal('currency');
        expect(takeHomeWeekly.props().value).equal(mockProps.takeHomeWeekly);

    });

});
