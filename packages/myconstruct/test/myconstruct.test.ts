import { expect as expectCDK, countResources, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Myconstruct from '../lib/index';

/*
 * Example test 
 */
test('SNS Topic Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, "TestStack");
  // WHEN
  new Myconstruct.Myconstruct(stack, 'MyTestConstruct');
  // THEN
  expectCDK(stack).to(countResources("AWS::SNS::Topic", 0));

  console.log(SynthUtils.toCloudFormation(stack))
});
