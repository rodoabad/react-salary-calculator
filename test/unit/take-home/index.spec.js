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

        chance = new Chance();
        sandbox = sinon.sandbox.create();

    });

    beforeEach(() => {

        testProps = Object.freeze({
            actions: {
                updateSalary: sandbox.stub()
            },
            federalTax: chance.natural(),
            filingstatus: chance.string(),
            salary: chance.natural(),
            socialSecurity: chance.natural(),
            taxableIncome: chance.natural()
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

        it('should show `salary` as the `value`', () => {

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

    describe('and its taxable income section', () => {

        let taxableIncomeEl;

        beforeEach(() => {

            taxableIncomeEl = takeHomeEl.childAt(1);

        });

        it('should be a <section/>', () => {

            expect(taxableIncomeEl.type()).string().equal('section');

        });

        it('should display the taxable income from `taxableIncome`', () => {

            const expectedText = `Taxable Income: $${testProps.taxableIncome}`;

            expect(taxableIncomeEl.text()).string().equal(expectedText);

        });

    });

    describe('and its federal tax section', () => {

        let federalTaxEl;

        beforeEach(() => {

            federalTaxEl = takeHomeEl.childAt(2);

        });

        it('should be a <section/>', () => {

            expect(federalTaxEl.type()).string().equal('section');

        });

        it('should display the federal tax from `federalTax`', () => {

            const expectedText = `Federal Tax: $${testProps.federalTax}`;

            expect(federalTaxEl.text()).string().equal(expectedText);

        });

    });

    describe('and its social security section', () => {

        let socialSecurityEl;

        beforeEach(() => {

            socialSecurityEl = takeHomeEl.childAt(3);

        });

        it('should be a <section/>', () => {

            expect(socialSecurityEl.type()).string().equal('section');

        });

        it('should display the social security from `socialSecurity`', () => {

            const expectedText = `Social Security: $${testProps.socialSecurity}`;

            expect(socialSecurityEl.text()).string().equal(expectedText);

        });

    });

});
