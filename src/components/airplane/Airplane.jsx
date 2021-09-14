import React from 'react';
import { createUseStyles } from 'react-jss';

export default function Airplane() {
  const useStyles = createUseStyles({
    airplane: {
      height: '80vh',
      backgroundColor: '#1f1f1f',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.airplane}>
    </div>
  );
}
