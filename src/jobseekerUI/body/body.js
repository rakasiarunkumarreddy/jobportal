import React from 'react';
import './Body.css'; // Optional CSS file to style the table

const Body = () => {
  return (
    <div className="body-container">
      <h2>Sample Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>25</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bob</td>
            <td>30</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Charlie</td>
            <td>22</td>
            <td>Chicago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Body;
