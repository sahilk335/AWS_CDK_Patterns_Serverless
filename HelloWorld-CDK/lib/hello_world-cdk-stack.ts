import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'
import {v4 as uuidv4} from 'uuid';

export class HelloWorldCdkStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new s3.Bucket(this, `sakhu-cdk-bucket-123}`, {
            versioned: true,
            removalPolicy:cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects:true
        });
    }
}
