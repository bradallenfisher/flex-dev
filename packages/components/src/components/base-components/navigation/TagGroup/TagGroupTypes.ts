import { AriaTagGroupProps } from 'react-aria';
import { TagProps } from '../Tag/TagTypes';
import { FlexProps } from '../../layout';

export type TagGroupProps = AriaTagGroupProps<any> & TagProps & FlexProps;
