import {IntlProvider} from 'react-intl';
import React from 'react';
import {Provider as ReactReduxProvider} from 'react-redux';
import SalaryCalculator from '../../src/';
import TakeHome from '../../src/take-home';
import {expect} from 'code';
import localizedMessages from '../../src/i18n/en.json';
import {shallow} from 'enzyme';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();

describe('Given the <SalaryCalculator/> component', () => {

    let component,
        mockProps;

    beforeEach(() => {

        mockProps = {
            store: {
                dispatch: sandbox.stub(),
                getState: sandbox.stub(),
                subscribe: sandbox.stub()
            }
        };

        component = shallow(<SalaryCalculator {...mockProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should have localization', () => {

        const intlProviderEl = component.find(IntlProvider);

        expect(intlProviderEl.props().locale).equal('en');
        expect(intlProviderEl.props().messages).equal(localizedMessages);

    });

    it('should have a state manager', () => {

        const reactReduxProvider = component.find(ReactReduxProvider);

        expect(reactReduxProvider.props().store).equal(mockProps.store);

    });

    it('should have <TakeHome/>', () => {

        const takeHomeEl = component.find(TakeHome);

        expect(takeHomeEl.length).equal(1);

    });

});
