import React, {PropTypes} from 'react';
import FilingStatus from './filing-status';

const handleSalaryChange = props => event => {

    const newSalary = parseInt(event.target.value, 10);

    props.actions.updateSalary(newSalary, props.filingStatus);

};

const TakeHome = props =>
    <section>
        <section className='gross-income'>
            <input
                onChange={handleSalaryChange(props)}
                type='number'
                value={props.salary}
            />
        </section>
        <FilingStatus/>
        <section className='tax-year'>{`Tax Year: ${props.taxYear}`}</section>
        <section className='taxable-income'>{`Taxable Income: $${props.taxableIncome}`}</section>
        <section className='federal-tax'>{`Federal Tax: $${props.federalTax}`}</section>
        <section className='social-security'>{`Social Security: $${props.socialSecurity}`}</section>
        <section className='take-home-yearly'>{`Take Home (Yearly): $${props.takeHome.yearly}`}</section>
        <section className='take-home-monthly'>{`Take Home (Monthly): $${props.takeHome.monthly}`}</section>
        <section className='take-home-bi-weekly'>{`Take Home (Bi-Weekly): $${props.takeHome.biWeekly}`}</section>
        <section className='take-home-weekly'>{`Take Home (Weekly): $${props.takeHome.weekly}`}</section>
    </section>;

TakeHome.displayName = 'TakeHome';
TakeHome.propTypes = {
    actions: PropTypes.object.isRequired,
    federalTax: PropTypes.number.isRequired,
    filingStatus: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    socialSecurity: PropTypes.number.isRequired,
    takeHome: PropTypes.object.isRequired,
    taxYear: PropTypes.number.isRequired,
    taxableIncome: PropTypes.number.isRequired
};

export default TakeHome;
