import * as runtime from "react/jsx-runtime";
import GrowElement from "./grow-element";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = { GrowElement };

interface MDXProps {
  code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
