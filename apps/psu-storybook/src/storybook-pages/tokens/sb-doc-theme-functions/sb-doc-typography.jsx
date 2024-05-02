/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme, Tooltip } from '@psu-flex/core-ui';
import React, { useState } from 'react';
import { Flex } from '@psu-flex/core-ui';
import { ThemeUIProvider } from 'theme-ui';
import './doc.css';
import { copyToken } from './copy-token.ts';

const SbTypographyComponent = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <Flex sx={{ fontFamily: 'Roboto', mb: 12 }} gap={12} direction="column">
        <div className="w-fit">
          <p sx={{ fontWeight: 'medium', mb: 8, mt: 4 }}>
            *Click any table row to copy Component with variant.*
          </p>
          <h3
            sx={{
              mb: 2,
              backgroundColor: '#F8F8F8',
              textAlign: 'center',
              padding: 2,
              border: '1px solid #e4e5e7',
            }}
          >
            Body
          </h3>
          <div sx={{ display: 'flex', flexDirection: 'row' }}>
            <table className="table-styles">
              <tc></tc>
              <tr className="tr-th-styles tr-styles tr-td-styles">
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Variant Key
                </th>
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Example
                </th>
              </tr>
              {Object.entries(theme.text.bodyStyle.full).map(([k, v]) => {
                const [keyText, setKeyText] = useState(k);

                const handleCopy = (k) => {
                  copyToken(`<Body variant={${k}}>Body</Body>`);
                  setKeyText('Copied!');
                  setTimeout(() => {
                    setKeyText(k);
                  }, 1500);
                };
                return (
                  <tr
                    className="pointer tr-th-styles tr-styles tr-td-styles"
                    onClick={() => handleCopy(k)}
                  >
                    <td className="tr-td-styles">
                      <Tooltip content="Click to copy">{keyText}</Tooltip>
                    </td>
                    <td className="tr-td-styles" sx={{ ...v }}>
                      PSU-Flex
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <div className="w-fit">
          <h3
            sx={{
              mb: 2,
              backgroundColor: '#F8F8F8',
              textAlign: 'center',
              padding: 2,
              border: '1px solid #e4e5e7',
            }}
          >
            Heading
          </h3>
          <div sx={{ display: 'flex', flexDirection: 'row' }}>
            <table className="table-styles">
              <tc></tc>
              <tr className="tr-th-styles tr-styles tr-td-styles">
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Variant Key
                </th>
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Example
                </th>
              </tr>
              {Object.entries(theme.text.headingStyle.full).map(([k, v]) => {
                const [keyText, setKeyText] = useState(k);

                const handleCopy = (k) => {
                  copyToken(`<Heading variant={${k}}>Heading</Heading>`);
                  setKeyText('Copied!');
                  setTimeout(() => {
                    setKeyText(k);
                  }, 1500);
                };
                return (
                  <tr
                    className="pointer tr-th-styles tr-styles tr-td-styles"
                    onClick={() => handleCopy(k)}
                  >
                    <td className="tr-td-styles">
                      <Tooltip content="Click to copy">{keyText}</Tooltip>
                    </td>
                    <td
                      className="tr-td-styles"
                      sx={{
                        ...v,
                      }}
                    >
                      PSU-Flex
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        <div className="w-fit">
          <h3
            sx={{
              mb: 2,
              backgroundColor: '#F8F8F8',
              textAlign: 'center',
              padding: 2,
              border: '1px solid #e4e5e7',
            }}
          >
            DisplayHeading
          </h3>
          <div sx={{ display: 'flex', flexDirection: 'row' }}>
            <table className="table-styles">
              <tc></tc>
              <tr className="tr-th-styles tr-styles tr-td-styles">
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Variant Key
                </th>
                <th
                  className="tr-th-styles th-styles"
                  sx={{ textAlign: 'left', paddingRight: '150px' }}
                >
                  Example
                </th>
              </tr>
              {Object.entries(theme.text.displayStyle.full).map(([k, v]) => {
                const [keyText, setKeyText] = useState(k);

                const handleCopy = (k) => {
                  copyToken(
                    `<DisplayHeading variant={${k}}>DisplayHeading</DisplayHeading>`
                  );
                  setKeyText('Copied!');
                  setTimeout(() => {
                    setKeyText(k);
                  }, 1500);
                };
                return (
                  <tr
                    className="pointer tr-th-styles tr-styles tr-td-styles"
                    onClick={() => handleCopy(k)}
                  >
                    <td className="tr-td-styles">
                      <Tooltip content="Click to copy">{keyText}</Tooltip>
                    </td>
                    <td
                      className="tr-td-styles"
                      sx={{
                        ...v,
                      }}
                    >
                      PSU-Flex
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </Flex>
    </ThemeUIProvider>
  );
};

export { SbTypographyComponent };
