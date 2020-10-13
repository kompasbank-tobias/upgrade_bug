import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from "path";

export class Myconstruct extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);

    new lambda.Function(this, 'InternalFunction', {
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
    });


  }
}
