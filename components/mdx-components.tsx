import * as runtime from "react/jsx-runtime";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {};

interface MDXProps {
  code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
