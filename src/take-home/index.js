import React, {PropTypes} from 'react';

const handleSalaryChange = actions => event => {

    const newSalary = parseInt(event.target.value, 10);

    actions.updateSalary(newSalary);

};

const TakeHome = props =>
    <section>
        <input
            onChange={handleSalaryChange(props.actions)}
            type='number'
            value={props.salary}
        />
        <section>{`Taxable Income: $${props.taxableIncome}`}</section>
        <section>{`Federal Tax: $${props.federalTax}`}</section>
        <section>{`Social Security: $${props.socialSecurity}`}</section>
    </section>;

TakeHome.displayName = 'TakeHome';
TakeHome.propTypes = {
    actions: PropTypes.object.isRequired,
    federalTax: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    socialSecurity: PropTypes.number.isRequired,
    taxableIncome: PropTypes.number.isRequired
};

export default TakeHome;
