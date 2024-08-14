import * as runtime from "react/jsx-runtime";
import GrowElement from "./grow-element";
import { ComponentProps } from "react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  GrowElement,
  img: (props: ComponentProps<"img">) => (
    <span className='relative block z-10 rounded-xl overflow-hidden my-4'>
      <img className='not-prose' {...props} />
      <span className='absolute inset-0 shadow-inset-border rounded-xl' />
    </span>
  ),
};

interface MDXProps {
  code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
