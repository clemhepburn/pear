import React from 'react';
import { createUseStyles } from 'react-jss';

export default function Grass() {
  const useStyles = createUseStyles({
    grass: {
      height: '100vh',
      width: '100%',
      backgroundColor: '#FFFEF7',
      color: '#1f1f1f',
      '& h1': {
        fontFamily: 'Apple Garamond Light',
        fontWeight: 'normal',
        fontSize: '8rem',
        marginLeft: '3rem',
        marginRight: '10rem'
      }
    },
    grassFooter: {
      width: '100%',
      textAlign: 'right',
      padding: '0 5rem',
      fontSize: '2rem',
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.grass}>
      <h1>The warming sun on the tip of my nose as 
        I doze off mid-day in the park. I hear
        the cars, the people, faint saxophone.</h1>
      <div className={classes.grassFooter}>(2)</div>
    </div>
  );
}
