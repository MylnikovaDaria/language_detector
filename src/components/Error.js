import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: 50,
    paddingBottom: 50,
    height: 300,
  },
});

export default function Types() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        404
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
    </div>
  );
}
