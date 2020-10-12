import React from 'react';

import { Cards, CountryPicker, Chart, CovidTable } from './components';
import { fetchData, fetchAllData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    tableData: [],
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    const allData = await fetchAllData();
    const tableData = [];
    allData.forEach(async country => {
      const countryData = await fetchData(country.iso3);
      tableData.push({
        name: country.name,
        ...countryData
      });
    });
    console.log("table:", tableData);
    this.setState({ 
      data, 
      tableData 
    });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country, tableData } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <CovidTable countryData={tableData} />
      </div>
    );
  }
}
//set as state and pass as covid table 
//passing in the data to the coivd table and starts as emoty array, need to rerender covid table
export default App;