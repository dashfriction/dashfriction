import * as React from "react";
import { Button } from "@mantine/core";

type Props = {
  onClick: () => void;
};

export const UIButton = ({ onClick }: Props) => {
  return <Button onClick={onClick}>Settings</Button>;
};
