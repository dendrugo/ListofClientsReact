import React from 'react';

export default ({ user, update, index }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td><img src={`avatar`} className="user-image" /></td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>8 {phone}</td>
    </tr>
  );
};