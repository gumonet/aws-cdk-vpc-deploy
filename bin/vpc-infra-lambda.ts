#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { VpcInfraLambdaStack } from '../lib/vpc-infra-lambda-stack';

const app = new cdk.App();
new VpcInfraLambdaStack(app, 'VpcInfraLambdaStack', {
    env:{
        account: '',
        region: 'us-west-2'
    }
});
