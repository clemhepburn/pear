import React from 'react';
import { createUseStyles } from 'react-jss';
import pear from '../../assets/pear.png';
import grass from '../../assets/grass.png';
import flower from '../../assets/flower.png';

export default function Top() {
  const useStyles = createUseStyles({
    top: {
      backgroundColor: '#1f1f1f',
      color: '#fafafa',
      height: '100vh',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      '& h1': {
        fontFamily: 'Apple Garamond Light',
        fontWeight: '300',
        fontSize: '8rem',
      },
      pearImg: {
        width: '100%'
      },
    },
    grassImg: {
    },
    flowerImg: {
      position: 'absolute',
      zIndex: '12',
      marginLeft: '-150px',
      marginTop: '25%'
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <main className={classes.main}>
        <h1>Objects and Memories</h1>
        <div>
          <img className={classes.pearImg} src={pear} alt="pear" />
          <img className={classes.grassImg} src={grass} alt="grass" />
          <img className={classes.flowerImg} src={flower} alt="flower" />
        </div>
        <h1>You Could Hold or Release</h1>
      </main>
    </div>
  );
}
