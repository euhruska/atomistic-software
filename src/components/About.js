// import Chart from './Dashboard/Chart';
// import Deposits from './Dashboard/Deposits';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';

import useStyles from './Dashboard/Styles';
import Title from './Dashboard/Title';

const acknowledgementsMD = `
This project was inspired by the ["Major codes in electronic-structure theory, quantum chemistry, and molecular-dynamics"](https://www.nomad-coe.eu/old-pages/externals/codes) collection maintained by the [NOMAD Center of Excellence](https://www.nomad-coe.eu) from 2017-2019.
Thanks go to Luca Ghiringelli for being supportive of this effort to transform the static list into an interactive app and a collaborative project.

The project draws upon further great resources, including:
 * The [Google Scholar](https://scholar.google.com/) search engine for citation counts
 * Wikipedia's [List of quantum chemistry and solid-state physics software](https://en.wikipedia.org/wiki/List_of_quantum_chemistry_and_solid-state_physics_software)
 * Wikipedia's [Comparison of software for molecular mechanics modelling](https://en.wikipedia.org/wiki/Comparison_of_software_for_molecular_mechanics_modeling)
 * SklogWiki's [Materials modelling and computer simulation codes](https://en.wikipedia.org/wiki/Comparison_of_software_for_molecular_mechanics_modeling)
`;

const aboutMD = `
This is a collaboratively edited list of atomistic simulation codes, together with citation information of the past couple of years.

Please visit the [source code repository on GitHub](https://github.com/ltalirz/atsim-trends) for instructions on how to fix mistakes, add new simulation engines, and provide feedback.
`;

export default function Home() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            {}
            {/* About */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        <Title>About</Title>
                        <Typography component="p" variant="body1">
                            <ReactMarkdown source={aboutMD} />
                        </Typography>
                    </React.Fragment>
                </Paper>
            </Grid>
            {/* Acknowledgements */}
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <React.Fragment>
                        <Title>Acknowledgements</Title>
                        <Typography component="p" variant="body1">
                            <ReactMarkdown source={acknowledgementsMD} />
                        </Typography>
                    </React.Fragment>
                </Paper>
            </Grid>
        </Grid>);
}

// {/* Chart */}
// <Grid item xs={12} md={8} lg={9}>
//     <Paper className={fixedHeightPaper}>
//         <Chart />
//     </Paper>
// </Grid>
// {/* Recent Deposits */}
// <Grid item xs={12} md={4} lg={3}>
//     <Paper className={fixedHeightPaper}>
//         <Deposits />
//     </Paper>
// </Grid>