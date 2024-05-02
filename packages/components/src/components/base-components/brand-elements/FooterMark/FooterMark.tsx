/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '../../layout/index';
import { DefaultTierOne } from '../DefaultTierOne/DefaultTierOne';
import { Shield } from '../Shield/Shield';
import { LinkWrapper } from '../../navigation/index';

export const FooterMark = (props) => {
  return (
    <LinkWrapper id={props.hocId && props.hocId} to={'https://www.psu.edu/'}>
      <Flex>
        <Shield extraSx={{ mr: 2 }} width={51} height={56} />
        <DefaultTierOne extraSx={{ mt: 3 }} width={116} height={18} />
      </Flex>
    </LinkWrapper>
  );
};
