import React, { Component } from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find ny name
    <input
      type="text"
      name="filter"
      value={value}
      required
      onChange={onChange}
    />
  </label>
);

export default Filter;
