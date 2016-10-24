import Chance from 'chance';
import React from 'react';
import TakeHome from '../../../src/take-home/';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe('Given the <TakeHome/> component', () => {

    let chance,
        sandbox,
        takeHomeEl,
        testProps;

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

    });

    beforeEach(() => {

        chance = new Chance();

        testProps = Object.freeze({
            actions: {
                updateSalary: sandbox.stub()
            },
            salary: chance.natural()
        });

        takeHomeEl = shallow(<TakeHome {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should have a <section/>', () => {

        expect(takeHomeEl.type()).string().equal('section');

    });

    describe('and its salary input', () => {

        let inputSalaryEl;

        beforeEach(() => {

            inputSalaryEl = takeHomeEl.childAt(0);

        });

        it('should be an <input/>', () => {

            expect(inputSalaryEl.type()).string().equal('input');

        });

        it('should have `salary` as the `value`', () => {

            expect(inputSalaryEl.props().value).number().equal(testProps.salary);

        });

        it('should update the salary on change', () => {

            const expectedValue = chance.natural();

            const mockEvent = {
                target: {
                    value: expectedValue
                }
            };

            inputSalaryEl.props().onChange(mockEvent);

            sinon.assert.calledOnce(testProps.actions.updateSalary);
            sinon.assert.calledWithExactly(testProps.actions.updateSalary, expectedValue);

        });

    });

});
