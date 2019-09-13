import React, { Fragment } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import {List, ListItem, ListItemText} from '@material-ui/core';

const styles = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 , height: 500, overflowY: 'auto'}
}

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default ({ exercises }) =>
    <Grid container item={true}>
        <Grid item sm >
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    <Fragment>
                        <Typography
                            variant="subtitle1"
                            style={{ textTransform: 'capitalize' }}
                        >
                            {group}
                        </Typography>
                        <List component="ul" aria-label="secondary mailbox folders">
                            {exercises.map(exercise => 
                                <ListItem button>
                                    <ListItemText primary={exercise.title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>

        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="h5"
                >
                    Welcome !
                </Typography>

                <Typography
                    variant="subtitle1"
                    style={{marginTop: 20}}
                >
                    Please select an exercise from de list of the left.
                </Typography>
        </Paper>
        </Grid>
    </Grid>