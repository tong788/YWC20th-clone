import { FC, SVGProps } from "react";

interface CustomLeftArrowProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const CustomLeftArrow: FC<CustomLeftArrowProps> = ({
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
        d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
        fill="#ff8e31"
      />
    </svg>
  );
};

export default CustomLeftArrow;

