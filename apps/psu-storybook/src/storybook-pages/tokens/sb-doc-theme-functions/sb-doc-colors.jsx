import { theme, colorThemes } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex, Select, Tooltip } from '@psu-flex/core-ui';
import { Item } from 'react-stately';
import { ThemeUIProvider } from 'theme-ui';
import { copyToken } from './copy-token.ts';

const { colors } = theme;

const categoryKeys = {
  'Primary & Secondary': ['nittanyNavy', 'beaverBlue', 'white', 'pughBlue'],
  Links: ['link', 'linkLight'],
  Neutrals: ['coalyGray', 'potentialMidnight'],
  'Accents w/ Light & Max Light Versions': [
    'limestoneGray',
    'limestoneLight',
    'limestoneMaxLight',
    'slateGray',
    'slateLight',
    'slateMaxLight',
    'creekTeal',
    'creekLight',
    'creekMaxLight',
    'skyBlue',
    'skyLight',
    'skyMaxLight',
    'shrineTan',
    'shrineLight',
    'shrineMaxLight',
    'roarGolden',
    'roarLight',
    'roarMaxLight',
  ],
  'Additional Accents': [
    'original87Pink',
    'discoveryCoral',
    'wonderPurple',
    'athertonViolet',
    'inventOrange',
    'keystoneYellow',
    'opportunityGreen',
    'futureLime',
    'forestGreen',
    'landgrantBrown',
  ],
  'Theme Accents': ['Pugh Blue', 'Global', 'Coral', 'Creek'],
  Overlays: [
    'beaver70',
    'beaver80',
    'navy40',
    'navy60',
    'navy65',
    'navy70',
    'navy80',
    'link80',
    'potential0',
    'potential50',
    'potential70',
    'potential75',
    'white85',
    'white65',
  ],
  'Alert Banner': [
    'alertImmediate',
    'alertUrgent',
    'alertAllClear',
    'alertNonEmergency',
  ],
};

const categorizedColors = Object.entries(colors).reduce(
  (acc, [key, value]) => {
    let matchedCategory = null;

    Object.keys(categoryKeys).forEach((category) => {
      if (categoryKeys[category].includes(key)) {
        matchedCategory = category;
        acc[category].push({ name: key, value: value });
      }
    });

    if (!matchedCategory) {
      // Exclude 'accent' and 'global' from the 'Miscellaneous' category
      if (key !== 'accent' && key !== 'global') {
        acc.Miscellaneous.push({ name: key, value: value });
      }
    }

    return acc;
  },
  {
    'Primary & Secondary': [],
    Links: [],
    Neutrals: [],
    'Accents w/ Light & Max Light Versions': [],
    'Additional Accents': [],
    'Theme Accents': [], // Initialize the Theme Accents array
    Overlays: [],
    Miscellaneous: [],
    'Alert Banner': [],
  }
);

categoryKeys['Theme Accents'].map((themeAccent) => {
  const accentColor = colorThemes[themeAccent];
  categorizedColors['Theme Accents'].push({
    name: themeAccent,
    value: accentColor,
  });
});

const ColorsComponent = () => {
  let [category, setCategory] = React.useState(null);

  // Create an object to store unique locations and unique types
  let uniqueCategoryMap = {};
  uniqueCategoryMap[0] = { category: 'Clear filter' };
  Object.entries(categorizedColors).forEach((option) => {
    uniqueCategoryMap[option[0]] = {
      category: option[0],
    };
  });

  // Extract the values of the uniqueLocationsMap object to get unique locations with IDs
  let uniqueCategoryArray = Object.values(uniqueCategoryMap);

  let filteredOptions = Object.entries(categorizedColors).filter((option) => {
    // Check if type is provided and if option type matches
    const typeMatch = category === null || option[0] === category;
    // Check if location is provided and if option location matches
    return typeMatch;
  });

  return (
    <ThemeUIProvider theme={theme}>
      <Flex style={{ fontFamily: 'Roboto' }} gap={4} direction="column">
        <h3>All available color tokens are listed here. </h3>
        <p>
          Each color is defined in figma and pushed into the tokens branch&nbsp;
          <a
            style={{ textDecoration: 'underline' }}
            href="https://github.com/Penn-State-Web-and-Digital/psu-flex/blob/tokens/theme/src/figma/theme.json"
          >
            here.
          </a>
          &nbsp;These are then exposed by theme.ui and accessible through the sx
          prop using the names listed below.
        </p>
        <div
          style={{ borderBottom: '1px solid gray', marginBottom: '24px' }}
        ></div>

        <div style={{ maxWidth: '320px', marginBottom: '40px' }}>
          <Select
            label="Filter by category"
            items={uniqueCategoryArray}
            selectedKey={category}
            onSelectionChange={(selected) =>
              selected === 'Clear filter'
                ? setCategory(null)
                : setCategory(selected)
            }
          >
            {(item) => <Item key={item.category}>{item.category}</Item>}
          </Select>
        </div>
        <p
          style={{
            fontWeight: '500',
            marginBottom: '12px',
            textAlign: 'left',
            fontSize: '16px',
          }}
        >
          *Click to copy color key token*
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '36px',
          }}
        >
          {filteredOptions.map(([category, colors]) => (
            <div style={{ gridColumn: 'auto/span 10' }} key={category}>
              <h2 style={{ marginBottom: '28px' }}>{category}</h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(10, 1fr)',
                  gap: '36px',
                  marginBottom: '8px',
                }}
              >
                {colors.map((colorObj, index) => {
                  const [name, nameItem] = Object.entries(colorObj)[0]; // Extract key and value
                  const [value, valueItem] = Object.entries(colorObj)[1]; // Extract key and value

                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: 'white',
                        gridColumn: 'auto/span 2',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        borderRadius: '8px',
                      }}
                    >
                      <Tooltip
                        extraContainerSx={{ width: '100%' }}
                        content="Click to copy"
                      >
                        <div
                          onClick={() => copyToken(`'${nameItem}'`)}
                          style={{
                            cursor: 'pointer',
                            backgroundColor: `${valueItem}`,
                            height: '110px',
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                          }}
                        ></div>
                      </Tooltip>
                      <div
                        style={{
                          backgroundColor: 'white',
                          padding: '8px 12px 12px 12px',
                          borderBottomLeftRadius: '8px',
                          borderBottomRightRadius: '8px',
                        }}
                      >
                        <div>{nameItem}</div>
                        <div>{valueItem}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Flex>
    </ThemeUIProvider>
  );
};

export { categorizedColors, ColorsComponent };
