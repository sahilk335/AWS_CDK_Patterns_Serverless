import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SagaStepFunction from '../lib/saga-step-function-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SagaStepFunction.SagaStepFunctionStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
