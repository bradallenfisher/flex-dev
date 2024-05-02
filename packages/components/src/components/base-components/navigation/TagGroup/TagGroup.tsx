/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import { FormLabel } from '../../form-elements';
import { useListState } from 'react-stately';
import { useTagGroup } from 'react-aria';
import { Flex, useFlex } from '../../layout';
import { TagGroupProps } from './TagGroupTypes';
import { Tag } from '../Tag/Tag';
/**A tag group consists of a list of tags. If a visual label is not provided, then an aria-label or aria-labelledby prop must be passed to identify the tag group to assistive technology. */

export const TagGroup = ({
  variant = 'outlined',
  size = 'sm',
  ...props
}: TagGroupProps | any) => {
  let { label } = props;
  let ref = useRef(null);

  let state = useListState(props);
  let { gridProps, labelProps } = useTagGroup(props, state, ref);

  //grab any flexProps passed into TagGroup
  let flexProps = useFlex(props);
  return (
    <Flex id="tag-group" className="w-fit" direction="column" gap={1}>
      {label && <FormLabel {...labelProps}>{label}</FormLabel>}
      <Flex
        id="tag-container"
        className="w-fit"
        {...flexProps}
        {...gridProps}
        ref={ref}
      >
        {[...state.collection].map((item) => (
          <Tag
            variant={variant}
            size={size}
            key={item.key}
            item={item}
            state={state}
          />
        ))}
      </Flex>
    </Flex>
  );
};
