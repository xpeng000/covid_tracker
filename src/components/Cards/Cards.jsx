import React from 'react';
import { Grid } from '@material-ui/core';

import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.infected_rate}
          cardTitle="Infected Rate Percentage"
          value={confirmed.value/7600000000} //0.5
          lastUpdate={lastUpdate}
          cardSubtitle="Number of current caused by COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.recover_rate}
          cardTitle="Recover Rate Percentage"
          value={(recovered.value/confirmed.value)*100} 
          lastUpdate={lastUpdate}
          cardSubtitle="Number of current caused by COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
        <CardComponent
          className={styles.deaths_rate}
          cardTitle="Death Rate Percentage"
          value={(deaths.value/confirmed.value)*100}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of current caused by COVID-19."
        />
        <CardComponent
          className={styles.current}
          cardTitle="Current Cases"
          value={confirmed.value-deaths.value-recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of current caused by COVID-19."
        />
        <CardComponent
          className={styles.current_rate}
          cardTitle="Current Rate Percentage"
          value={(confirmed.value-deaths.value-recovered.value)/confirmed.value*100}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of current caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
