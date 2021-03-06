import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'

import SwatchesColor from './SwatchesColor'

export const SwatchesGroup = ({ onClick, onSwatchHover, group, active, swatchWidth, swatchHeight }) => {
  const styles = reactCSS({
    'default': {
      group: {
        paddingBottom: '5px',
        width: swatchWidth ? swatchWidth : '40px',
        float: 'left',
        marginRight: '5px',
      },
    },
  })

  return (
    <div style={ styles.group }>
      { map(group, (color, i) => (
        <SwatchesColor
          key={ color }
          color={ color }
          active={ color.toLowerCase() === active }
          first={ i === 0 }
          last={ i === group.length - 1 }
          onClick={ onClick }
          onSwatchHover={ onSwatchHover }
          width={ swatchWidth }
          height={ swatchHeight }
        />
      )) }
    </div>
  )
}

export default SwatchesGroup
