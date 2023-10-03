import Component from "@glimmer/component";

export interface BaseArguments {}

export interface BaseOptions {}

export interface BaseSignature {
  Args: BaseArguments;
}

export default abstract class BaseComponent<
  S extends BaseSignature,
> extends Component<S> {}
