import { generateHocId } from './generateId';

export const getFieldContentfulContentKey = (typeName: string, index: number) =>
  `${typeName}-${index}`;

export const generateContentfulContentItemProps = (
  componentMap: any,
  item: any,
  i: number
) => {
  return {
    key: getFieldContentfulContentKey(item['__typename'], i),
    hocId: generateHocId(componentMap[item['__typename']]), // Generate hocId for the component
    pageContentIndex: i, //index of component within content on page
  };
};

//utility function used to generate needed props for hoc content
export const useContent = (props: any) => {
  return {
    id: props.hocId && props.hocId,
    'data-page-content-index': props.pageContentIndex && props.pageContentIndex,
  };
};
