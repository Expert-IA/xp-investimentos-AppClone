import React from "react";
import { getComponentByCode } from "./dynamic";

type Props = {
  code: string;
  props?: any;
};

const DynamicRenderer: React.FC<Props> = ({ code, props }) => {
  const Component = getComponentByCode(code);
  if (!Component) return null;

  return <Component {...props} />;
};

export default DynamicRenderer;
