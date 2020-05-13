import * as React from 'react';

interface ExtractLiteralValuesFromEnumProps {
  /** sampleInterface description */
  sampleInterface: InterfaceSample;
}

interface InterfaceSample {
  /** sampleString description */
  sampleString: string;
  /** sampleNumber description */
  sampleNumber: number;
  /** sample enum */
  sampleEnum: enumSample;
  /** sampleNestedInterface description */
  sampleNestedInterface: NestedInterfaceSample;
}

export enum enumSample {
  HELLO = 'hi',
  BYE = 'bye'
}

interface NestedInterfaceSample {
  /**
   * sample with default value
   * @default hello
   */
  sampleDefaultFromJSDoc: 'hello' | 'goodbye';
  /** sampleTrue description */
  sampleTrue?: boolean;
  /** sampleFalse description */
  sampleFalse?: boolean;
  /** sampleString description */
  sampleString?: string;
  /** sampleObject description */
  sampleObject?: { [key: string]: any };
  /** sampleNull description */
  sampleNull?: null;
  /** sampleUndefined description */
  sampleUndefined?: any;
  /** sampleNumber description */
  sampleNumber?: number;
}

export const Stateless: React.StatelessComponent<
  ExtractLiteralValuesFromEnumProps
> = props => <div>test</div>;
