import * as cdk from '@aws-cdk/core';

export interface Owner {
    readonly apiKey: cdk.SecretValue;
    readonly teamId?: string;
}
