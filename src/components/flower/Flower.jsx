/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { createUseStyles } from 'react-jss';

export default function Flower() {
  const useStyles = createUseStyles({
    flower: {
      backgroundColor: '#1f1f1f',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& p': {
        width: '90%',
        color: 'floralwhite',
        fontSize: '2.2rem',
        textAlign: 'justify',
        marginTop: '3rem',
      },
    },
    flowerFooter: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      textAlign: 'right',
      padding: '0 5rem',
      fontSize: '2rem',
      color: 'floralwhite'
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.flower}>
      <p>
      The species of Taraxacum are tap-rooted, perennial, herbaceous plants, native to temperate areas of the Northern Hemisphere. The genus contains many species, which usually (or in the case of triploids, obligately) reproduce by apomixis, resulting in many local populations and endemism. In the British Isles alone, 234 microspecies are recognised in nine loosely defined sections, of which 40 are "probably endemic". A number of species of Taraxacum are seed-dispersed ruderals that rapidly colonize disturbed soil, especially the common dandelion (T. officinale), which has been introduced over much of the temperate world. After flowering is finished, the dandelion flower head dries out for a day or two. The dried petals and stamens drop off, the bracts reflex (curve backwards), and the parachute ball opens into a full sphere. When development is complete, the mature seeds are attached to white, fluffy "parachutes" which easily detach from the seedhead and glide by wind, dispersing.
The seeds are able to cover large distances when dispersed due to the unique morphology of the pappus which works to create a unique type of vortex ring that stays attached to the seed rather than being sent downstream. In addition to the creation of this vortex ring, the pappus can adjust its morphology depending on the moisture in the air. This allows the plume of seeds to close up and reduce the chance to separate from the stem, waiting for optimal conditions that will maximize dispersal and germination.
      </p>
      <div className={classes.flowerFooter}>(3)</div>
    </div>
  );
}
