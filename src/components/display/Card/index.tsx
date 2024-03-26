import { CardProps } from "./interface";
import { CustomCard } from "./styles";

export const Card = ({ children, ...props }: CardProps) => {
  return <CustomCard {...props}>{children}</CustomCard>;
};
