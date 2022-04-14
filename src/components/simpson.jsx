import React from 'react';

function quotesimpson({ employee }) {
  return (
    employee && (
      <div className='quotesimpson'>
        <img src={employee.picture.medium} alt={employee.name.first} />
        <ul>
          <li>Gender: {employee.gender}</li>
          <li>
            Name: {employee.name.title} {employee.name.last}{' '}
            {employee.name.first}
          </li>
          <li>E-mail: {employee.email}</li>
          <li>
            Location: {employee.location.street.number}{' '}
            {employee.location.street.name}, {employee.location.postcode}{' '}
            {employee.location.city}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplayEmployee;