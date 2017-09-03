import Chance from 'chance';
import React from 'react';
import ReduxConnector from '../../../../src/take-home/social-security';
import SocialSecurity from '../../../../src/take-home/social-security/social-security';
import {expect} from 'code';
import {mockReduxStore} from '../../../utils';
import {shallow} from 'enzyme';

describe('Given the <SocialSecurity/> connector', () => {

    const chance = new Chance();

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            socialSecurity: chance.natural()
        };

        const mockStore = mockReduxStore(mockProps);

        component = shallow(<ReduxConnector store={mockStore}/>);

    });

    it('should be connecting the right component', () => {

        expect(component.type()).equal(SocialSecurity);
        expect(component.props().socialSecurity).equal(mockProps.socialSecurity);

    });

});
