import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Texts from '../../locales/textFields.json';
import './TableUbi.css';

class TableUbi extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <table className="table-content">
          <thead className="table-title-container">
            <tr>
              {
                Object.values(Texts.tableFields)
                  .map(item => <th key={item} className="table-title">{item}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableUbi;
