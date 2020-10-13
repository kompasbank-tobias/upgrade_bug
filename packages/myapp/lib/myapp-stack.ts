import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from "path";
import {Myconstruct} from "../../myconstruct/lib";

export class MyappStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new lambda.Function(this, 'InternalFunction', {
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
            handler: "index.handler",
            runtime: lambda.Runtime.NODEJS_12_X,
        });

        new Myconstruct(this, 'ExternalFunction')
    }
}
