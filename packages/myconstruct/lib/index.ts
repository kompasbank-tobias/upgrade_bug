import * as cdk from '@aws-cdk/core';

export interface MyconstructProps {
  // Define construct properties here
}

export class Myconstruct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, props: MyconstructProps = {}) {
    super(scope, id);

    // Define construct contents here
  }
}
