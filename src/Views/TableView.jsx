import React, { Component, Fragment } from 'react';
import { TableUbi } from '../components';
import Texts from '../plane_text.txt';
import Locales from '../locales/textFields.json';
import './TableView.css';

class TableView extends Component {
  state = {}

  componentDidMount() {
      this.getText()
  }

  getText = () => {
    fetch(Texts)
    .then((response) => response.text())
    .then(text  => {
      const splitPlaces = text.split('\n');
      const newPlaces = splitPlaces.map(place => place
                          .split(/\W{2,3}/)
                          .filter(i => i !== (undefined || null || ''))
                          .reverse()
                        );
      this.setState({ places: newPlaces });
    })
  }

  showUbigeos = (length) => {
    const { places } = this.state;

    return places && places.map((item, index) => {
      if (item.length === length) {
        const removeLast = length === 3 ? item.slice(0, 2) : item;
        return (
          <tr key={index}>
            {removeLast.map((item, index) => {
              const splitting = item.split(/(?<=^\S+)\s/);
              return splitting.map((text, index) => <td key={index}>{text}</td>);
            })}
          </tr>
        );
      }
      return null;
    });

  }

  render() {
    const { places } = this.state;
    const {
      tableTitles: {
        department,
        province,
        district
      }
    } = Locales;

    if (places) console.log(places);

    return(
      <Fragment>
        <header className="ubi-header">
          <h1>UBIGEOS</h1>
        </header>
        <section className="table-section">
          <TableUbi title={department}>
            {this.showUbigeos(1)}
          </TableUbi>
          <TableUbi title={province}>
            {this.showUbigeos(2)}
          </TableUbi>
          <TableUbi title={district}>
            {this.showUbigeos(3)}
          </TableUbi>
        </section>
      </Fragment>
    );
  };
}

export default TableView;
