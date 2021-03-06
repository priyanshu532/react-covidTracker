import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
    if (!confirmed) {
        return 'Loading'
    }
    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Total cases of COVID 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Active</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value - recovered.value - deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Active cases of COVID 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Death</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color='textSecondary'> {new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Death of COVID 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
}

export default Cards;