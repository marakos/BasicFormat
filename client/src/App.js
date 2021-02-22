import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

//import components


const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container >
            <AppBar >
                <Typography ></Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid >
                        <Grid>
                        </Grid>
                        <Grid >
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;

