import { FC, SVGProps } from "react";

interface CustomRightArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CustomRightArrow: FC<CustomRightArrowProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="50"
      height="50"
      className={className}
      {...props}
    >
      <path
        d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
        fill="#ff8e31"
      />
    </svg>
  );
};

export default CustomRightArrow;

