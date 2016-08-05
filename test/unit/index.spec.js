import {Provider} from 'react-redux';
import React from 'react';
import SalaryCalculator from '../../src/';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <SalaryCalculator/> component', () => {

    let salaryCalculatorEl,
        sandbox,
        testProps;

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

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

    it('should be using <Provider/>', () => {

        expect(salaryCalculatorEl.type()).function().equal(Provider);

    });

    it('should have `store`', () => {

        expect(salaryCalculatorEl.props().store).equal(testProps.store);

    });

});
