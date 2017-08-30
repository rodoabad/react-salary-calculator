import Chance from 'chance';
import React from 'react';
import TakeHome from '../../../src/take-home/';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon';

const chance = new Chance();
const sandbox = sinon.sandbox.create();

describe('Given the <TakeHome/> component', () => {

    let takeHomeEl,
        testProps;

    beforeEach(() => {

        testProps = Object.freeze({
            actions: {
                updateSalary: sandbox.stub()
            },
            federalTax: chance.natural(),
            filingStatus: chance.string(),
            salary: chance.natural(),
            socialSecurity: chance.natural(),
            takeHome: chance.natural(),
            taxYear: chance.natural(),
            taxableIncome: chance.natural()
        });

        takeHomeEl = shallow(<TakeHome {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <section/>', () => {

        expect(takeHomeEl.type()).string().equal('section');

    });

    describe('and its gross income section', () => {

        let grossIncomeEl;

        beforeEach(() => {

            grossIncomeEl = takeHomeEl.find('.gross-income');

        });

        it('should have a gross income input', () => {

            const inputSalaryEl = grossIncomeEl.find('input');

            expect(inputSalaryEl.type()).string().equal('input');
            expect(inputSalaryEl.props().value).number().equal(testProps.salary);

        });

        it('should update the salary on change', () => {

            const inputSalaryEl = grossIncomeEl.find('input');

            const expectedValue = chance.natural();

            const mockEvent = {
                target: {
                    value: expectedValue
                }
            };

            inputSalaryEl.props().onChange(mockEvent);

            sinon.assert.calledOnce(testProps.actions.updateSalary);
            sinon.assert.calledWithExactly(testProps.actions.updateSalary, expectedValue, testProps.filingStatus);

        });

    });

    describe('and its taxable income section', () => {

        let taxableIncomeEl;

        beforeEach(() => {

            taxableIncomeEl = takeHomeEl.find('.taxable-income');

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

            federalTaxEl = takeHomeEl.find('.federal-tax');

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

            socialSecurityEl = takeHomeEl.find('.social-security');

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
