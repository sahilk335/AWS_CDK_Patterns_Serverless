import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as EtlServerlessStack from '../lib/etl-serverless-stack-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EtlServerlessStack.EtlServerlessStackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
