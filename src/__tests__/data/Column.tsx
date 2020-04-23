import * as React from 'react';

/**
 * Column properties.
 */
export interface IColumnProps {
  /** prop1 description */
  prop1?: string;
  /** prop2 description */
  prop2: number;
  /**
   * prop3 description
   */
  prop3: () => void;
  /** prop4 description */
  prop4: 'option1' | 'option2' | 'option3';
  prop5: enumSample;
  prop6: Sizes;
  prop7: MyOwnInterface;
}

export enum enumSample {
  HELLO = 'hi',
  BYE = 'bye'
}

interface MyOwnInterface {
  name: string;
  size: Sizes;
  layout: Layout;
}

type Sizes = 'M' | 'L';

/**
 * @param width hola que tal
 */
interface Layout {
  /** width description */
  width: number;
  height: string;
  axis: Otro;
}

interface Otro {
  x: number;
  y: number;
  other: 'x' | 'y';
}

/**
 * Column description
 */
export class Column extends React.Component<IColumnProps, {}> {
  public static defaultProps: Partial<IColumnProps> = {
    prop1: 'prop1'
  };

  public render() {
    const { prop1 } = this.props;
    return <div>{prop1}</div>;
  }
}

export default Column;
