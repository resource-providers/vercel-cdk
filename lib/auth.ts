import * as cdk from '@aws-cdk/core';

export interface Auth {
    apiKeySecret: cdk.SecretValue;
    teamId?: string;
}
