const componentMap: Record<string, React.ComponentType<any>> = {

};

export function getComponentByCode(code: string) {
  return componentMap[code] || null;
}