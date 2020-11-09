import { expect as expectCDK, matchTemplate, MatchStyle, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Myapp from '../lib/myapp-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Myapp.MyappStack(app, 'MyTestStack');
    // THEN
  expectCDK(stack).to(countResources("AWS::Lambda::Function", 2));
});
