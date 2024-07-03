import { SxProps, Theme } from "@mui/material";

export interface makeSxStylesProps {
  [key: string]: SxProps<Theme>;
}

export const styles = (styles?: makeSxStylesProps) => {
  return styles || {};
};
