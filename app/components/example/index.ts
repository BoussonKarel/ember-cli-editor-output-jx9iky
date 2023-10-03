import BaseComponent, { BaseArguments, BaseSignature } from "../base";

export interface ExampleArguments extends BaseArguments {}

export interface ExampleSignature extends BaseSignature {
  Element: HTMLSelectElement;
  Args: ExampleArguments;
}

export default abstract class Example<
  S extends ExampleSignature,
> extends BaseComponent<S> {}
