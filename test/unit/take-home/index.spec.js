import Dependents from '../../../src/take-home/dependents/';
import FederalTax from '../../../src/take-home/federal-tax';
import FilingStatus from '../../../src/take-home/filing-status';
import React from 'react';
import Salary from '../../../src/take-home/salary';
import SocialSecurity from '../../../src/take-home/social-security';
import TakeHome from '../../../src/take-home/';
import TakeHomeBiWeekly from '../../../src/take-home/take-home-bi-weekly';
import TakeHomeMonthly from '../../../src/take-home/take-home-monthly';
import TakeHomeWeekly from '../../../src/take-home/take-home-weekly';
import TakeHomeYearly from '../../../src/take-home/take-home-yearly';
import TaxableIncome from '../../../src/take-home/taxable-income';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <TakeHome/> component', () => {

    let component;

    beforeEach(() => {

        component = shallow(<TakeHome/>);

    });

    it('should be a section', () => {

        expect(component.type()).equal('section');
        expect(component.props().className).equal('take-home');

    });

    it('should have the following components', () => {

        const expectedComponents = [
            Salary,
            FilingStatus,
            Dependents,
            TaxableIncome,
            FederalTax,
            SocialSecurity,
            TakeHomeYearly,
            TakeHomeMonthly,
            TakeHomeBiWeekly,
            TakeHomeWeekly
        ];

        component.children().forEach((child, index) => {

            expect(child.type()).equal(expectedComponents[index]);

        });

    });

});
