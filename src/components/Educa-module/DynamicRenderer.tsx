import React, { useEffect } from "react";
import { getComponentByCode } from "./dynamic-components";

type Props = {
  code: string;
  props?: any;
};

const DynamicRenderer: React.FC<Props> = ({ code, props }) => {
  useEffect(() => {
    console.log("Renderizando:", code, props);
  }, [props, code]);
  
  const Component = getComponentByCode(code);
  if (!Component) return null;

  return <Component {...props} />;
};

export default DynamicRenderer;