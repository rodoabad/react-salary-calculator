import {FormattedMessage, FormattedNumber} from 'react-intl';
import Chance from 'chance';
import FederalTax from '../../../../src/take-home/social-security/social-security';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <FederalTax/> component', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            socialSecurity: chance.natural()
        };

        component = shallow(<FederalTax {...mockProps}/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('social-security');

    });

    it('should have a label', () => {

        const label = component.children(FormattedMessage);

        expect(label.props().id).equal('SOCIAL_SECURITY');

    });

    it('should display the social security', () => {

        const socialSecurity = component.children(FormattedNumber);

        expect(socialSecurity.props().currency).equal('USD');
        expect(socialSecurity.props().currencyDisplay).equal('symbol');
        expect(socialSecurity.props().style).equal('currency');
        expect(socialSecurity.props().value).equal(mockProps.socialSecurity);

    });

});
