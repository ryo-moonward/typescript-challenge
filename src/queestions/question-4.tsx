type IconSize = "sm" | "lg" | string;

/* *
 * IconSize accepts type of string
 * but now it lost auto completion
 * make auto completion back
 */

interface IconProps {
  size: IconSize;
}

const Icon = ({ size }: IconProps) => {
  return <></>;
};

const LoseAutocomplete = () => {
  return <Icon size="" />;
};

export default LoseAutocomplete;
