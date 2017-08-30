import {IntlProvider} from 'react-intl';
import React from 'react';
import {Provider as ReactReduxProvider} from 'react-redux';
import SalaryCalculator from '../../src/';
import StateConnector from '../../src/state-connector';
import TakeHome from '../../src/take-home';
import {expect} from 'code';
import localizedMessages from '../../src/i18n/en.json';
import {shallow} from 'enzyme';
import sinon from 'sinon';

const sandbox = sinon.sandbox.create();

describe('Given the <SalaryCalculator/> component', () => {

    let salaryCalculatorEl,
        testProps;

    beforeEach(() => {

        testProps = Object.freeze({
            store: {
                dispatch: sandbox.stub(),
                getState: sandbox.stub(),
                subscribe: sandbox.stub()
            }
        });

        salaryCalculatorEl = shallow(<SalaryCalculator {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should have localization', () => {

        const intlProviderEl = salaryCalculatorEl.find(IntlProvider);

        expect(intlProviderEl.props().locale).equal('en');
        expect(intlProviderEl.props().messages).equal(localizedMessages);

    });

    it('should have a state manager', () => {

        const reactReduxProvider = salaryCalculatorEl.find(ReactReduxProvider);

        expect(reactReduxProvider.props().store).equal(testProps.store);

    });

    it('should have <TakeHome/>', () => {

        const takeHomeEl = salaryCalculatorEl.find(StateConnector);

        expect(takeHomeEl.type().WrappedComponent).equal(TakeHome);

    });

});
