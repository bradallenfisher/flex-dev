/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
export const QuoteSvg = ({ ...props }) => {
  const { extraSx, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 44"
      fill="none"
      sx={{
        width: props.width || '60px',
        height: props.height || '44px',
        ...extraSx,
      }}
      {...rest}
    >
      <path
        d="M34 43.99V27.4687C34 19.6434 35.8593 13.4592 39.5879 8.91608C43.3164 4.38299 49.0942 1.41096 56.2414 0V8.14555C50.9235 9.81669 48.2845 12.6887 46.4652 16.7614C45.5256 18.9029 45.1357 21.1244 45.2957 23.416H60V44H34.01L34 43.99Z"
        fill="#96BEE6"
      />
      <path
        d="M0 43.99V27.4687C0 19.6434 1.85928 13.4592 5.58785 8.91608C9.31642 4.38299 15.0942 1.41096 22.2414 0V8.14555C16.9235 9.81669 14.2845 12.6887 12.4652 16.7614C11.5256 18.9029 11.1357 21.1244 11.2957 23.416H26V44H0V43.99Z"
        fill="#96BEE6"
      />
    </svg>
  );
};
