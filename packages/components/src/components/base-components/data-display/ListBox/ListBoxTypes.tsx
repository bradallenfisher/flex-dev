import { AriaListBoxProps } from 'react-aria';
import { BaseProps } from '@psu-flex/common-ui';
import { FlexProps } from '../../layout/index';
export type ListBoxTags = 'ul' | 'ol';

export type ListBoxProps = AriaListBoxProps<any> &
  BaseProps &
  FlexProps & { tag: ListBoxTags; listStyle: string };
