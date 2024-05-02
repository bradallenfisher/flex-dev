/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { LinkWrapper, Link } from '../../navigation/index';
import { DefaultTierOne } from '../DefaultTierOne/DefaultTierOne';
import { HeaderMarkProps } from './HeaderMarkTypes';
import { Shield } from '../Shield/Shield';
import { Flex } from '../../layout/index';
/** Description */

export const HeaderMark = ({
  tierOneMark,
  tierTwoEntity,
  to = '/',
  ...props
}: HeaderMarkProps) => {
  return (
    <Flex>
      <LinkWrapper id={props.hocId && props.hocId} to={to}>
        <Shield
          extraSx={{ mr: 2 }}
          width={[37, 40, 51, 51]}
          height={[41, 44, 56, 56]}
        />
      </LinkWrapper>
      <Flex direction="column">
        <LinkWrapper id={props.hocId && props.hocId} to="/">
          {tierOneMark ? (
            <div
              sx={{
                mt: !tierTwoEntity?.title ? [2, 2, 3, 3] : 1,
                height: [15, 16, 18, 18],
                width: 'auto',
                '& > svg': {
                  height: [15, 16, 18, 18],
                  width: 'auto',
                },
              }}
            >
              {tierOneMark}
            </div>
          ) : (
            <DefaultTierOne
              extraSx={{ mt: !tierTwoEntity?.title ? [2, 2, 3, 3] : 1 }}
              width={[84, 90, 116, 116]}
              height={[13, 14, 18, 18]}
            />
          )}
        </LinkWrapper>
        {tierTwoEntity && (
          <Link
            color="white"
            className="hover-underline"
            extraSx={{
              mt: [1, 1, 2, 2],
              variant: `text.header.tierTwo.18`,
              lineHeight: ['16px', '16px', '20px', '20px'],
              maxWidth: ['200px', '220px', '268px', '268px'],
            }}
            to={tierTwoEntity?.href}
          >
            {tierTwoEntity?.title}
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
