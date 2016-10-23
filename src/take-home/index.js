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
    </section>;

TakeHome.displayName = 'TakeHome';
TakeHome.propTypes = {
    actions: PropTypes.object.isRequired,
    salary: PropTypes.number.isRequired
};

export {
    TakeHome
};
