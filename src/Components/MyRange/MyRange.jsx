import React, { useState } from 'react';
import { Range } from 'react-range';

const PriceRangeSlider = () => {
  const [values, setValues] = useState([39, 1230]);

  return (
    <div style={{ padding: '5px 20px' }}>
      <Range
        step={1}
        min={39}
        max={1230}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props} // Spread props
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: 'rgba(70, 163, 88, 0.2)', // Unselected track color
              marginTop: '20px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                height: '6px',
                background: 'green', // Selected track color
                left: `${(values[0] - 39) / (1230 - 39) * 100}%`,
                width: `${(values[1] - values[0]) / (1230 - 39) * 100}%`,
              }}
            />
            {/* Fragment ichida children ni render qilamiz */}
            <>
              {children}
            </>
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={index} // Key propini thumbga beramiz
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              borderRadius: '50%',
              backgroundColor: 'green',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          />
        )}
      />
      <div style={{ marginTop: '20px' }}>
        <span>Price: ${values[0]} – ${values[1]}</span>
      </div>
      <button className='btn main-button py-2 px-4 mt-3'>Filter</button>
    </div>
  );
};

export default PriceRangeSlider;
