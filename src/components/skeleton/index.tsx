import {
  Skeleton as SkeletonBase,
  SkeletonProps as SkeletonBaseProps,
} from '@mui/material';

export type SkeletonProps = {
  lines?: number;
} & SkeletonBaseProps;

const Skeleton = ({ lines = 15, ...props }: SkeletonProps) => {
  return (
    <>
      {Array.from(new Array(lines)).map((_, index) => (
        <SkeletonBase
          sx={{ marginTop: '0.5em' }}
          key={index}
          variant="rectangular"
          width="100%"
          height={15}
          {...props}
        />
      ))}
    </>
  );
};

export default Skeleton;
