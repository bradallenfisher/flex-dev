import { TextBlock, Wrapper, Container } from '@psu-flex/core-ui';
import { DynamicForm } from '../../components/index';
import { generateContentfulContentItemProps } from '@psu-flex/utility-functions';
import React from 'react';

const componentMap = {
  ComponentText: 'TextBlock',
  Form: 'DynamicForm',
  // Add more mappings as needed
};

export function getComponents(pageData, assetMap) {
  const contentCollection = pageData;
  //grabs all components included on the instance of basic-page
  const components = contentCollection?.items?.map((item, i) => {
    let contentItemProps = generateContentfulContentItemProps(
      componentMap,
      item,
      i
    );

    //each new component in switch needs a key prop
    switch (item['__typename']) {
      case 'ComponentText': {
        return (
          <Container>
            <Wrapper>
              <TextBlock
                {...contentItemProps}
                data={item.richText.json}
                assetMap={assetMap}
              />
            </Wrapper>
          </Container>
        );
      }

      case 'Form': {
        return <DynamicForm {...contentItemProps} data={item} />;
      }

      default: {
        return '';
      }
    }
  });

  return components;
}
