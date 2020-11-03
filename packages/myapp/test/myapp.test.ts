import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils, countResources } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Myapp from '../lib/myapp-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  const stack = new Myapp.MyappStack(app, 'MyTestStack');
  expectCDK(stack).to(countResources("AWS::Lambda::Function", 2));

  console.log(SynthUtils.toCloudFormation(stack))
});
