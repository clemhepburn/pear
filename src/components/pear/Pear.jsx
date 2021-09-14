/* eslint-disable max-len */
import React from 'react';
import { createUseStyles } from 'react-jss';
import pear from '../../assets/pear.png';

export default function Pear() {
  const useStyles = createUseStyles({
    pear: {
      width: '100vw',
      height: '105vh',
      backgroundColor: '#E7D5D1',
      backgroundImage: `url(${pear})`,
      backgroundSize: '200px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pearText: {
      columnCount: 2,
      columnFill: 'auto',
      fontSize: '1.6rem',
      padding: '0 5rem',
      color: '#1f1f1f',
      fontFamily: 'Helvetica',
      marginBottom: '2rem',
    },
    pearFooter: {
      width: '100%',
      textAlign: 'right',
      padding: '0 5rem',
      fontSize: '2rem',
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.pear}>
      <div className={classes.pearText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et tincidunt augue, at volutpat metus. In hac habitasse platea dictumst. Praesent ut aliquam tellus, nec tempor mi. Donec nec pulvinar velit. Nulla aliquam iaculis lectus at vulputate. Cras sed justo egestas, mattis diam at, imperdiet urna. Vivamus viverra ullamcorper ante vitae finibus. In at felis non turpis tempor ultrices. Cras mattis orci lectus, vitae pharetra turpis molestie eu. Morbi ut iaculis mi. Proin nec mollis quam.
  
  Maecenas posuere ultricies tortor faucibus pellentesque. Sed rutrum placerat sapien in tempus. Praesent sit amet libero interdum, maximus est sit amet, feugiat justo. Suspendisse malesuada sapien eu purus imperdiet, ut ultricies ex luctus. Ut volutpat fringilla purus sed gravida. Nullam nec eleifend felis, vitae blandit urna. Vivamus tristique in nunc nec vulputate. Sed non vestibulum dui, vitae venenatis turpis. Pellentesque rhoncus ac elit laoreet consequat. Quisque a elementum ex. Maecenas feugiat condimentum elit sit amet porttitor.
  
  Aliquam nec euismod lorem, vitae eleifend justo. Etiam pellentesque augue lacinia ligula sollicitudin pretium. Donec elementum massa ut arcu dictum, sed ullamcorper massa dapibus. Phasellus a facilisis ante. Quisque tempor in justo a pulvinar. Sed eleifend metus nec ligula efficitur egestas. Fusce in convallis dui. Nunc ornare dignissim dolor, a posuere nibh. Vivamus vel congue enim. Fusce feugiat iaculis ipsum nec placerat. Cras ut tellus luctus, varius augue vel, porttitor orci.
  
  Nam ligula urna, dignissim nec velit eu, gravida gravida mi. Proin lacinia eget orci sit amet scelerisque. Nulla facilisi. Sed congue ultrices ex at iaculis. Integer in euismod orci. Praesent sit amet ex pharetra, tempor erat et, molestie est. Vivamus quis ex massa. Suspendisse placerat eget nisi eget consequat. Phasellus nec sagittis quam, sed tempus mauris. Aliquam eleifend ex ut orci hendrerit mattis.
  
  Phasellus venenatis nibh leo, eget ullamcorper est iaculis eu. Vivamus vel elit in lacus varius rhoncus a eget ante. Maecenas tristique luctus ligula, eget accumsan risus aliquam a. Cras suscipit turpis a faucibus tincidunt. In consequat augue quis leo rutrum accumsan. Vivamus fermentum, ante quis fermentum rhoncus, nisl diam aliquam nisi, non eleifend metus lorem at elit. Cras sed est sed felis tincidunt vehicula. Nam eu dolor sit amet mauris euismod feugiat quis eget lectus. Donec eget hendrerit enim, at posuere odio. Quisque ullamcorper arcu eget finibus efficitur.
      </div>
      <div className={classes.pearFooter}>(1)</div>
    </div>
  );
}
