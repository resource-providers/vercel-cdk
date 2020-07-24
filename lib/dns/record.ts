import * as cdk from '@aws-cdk/core';
import { Domain } from '../domains';

export enum RecordType {
    A='A',
    AAAA='AAAA'
}

export interface RecordProps {
    name: string;
    type: RecordType;
    value: string;
    ttl?: number;
    domain: Domain;
}

export interface IRecord extends cdk.IResource {
    readonly recordId: string;
}

abstract class RecordBase extends cdk.Resource implements IRecord {
    abstract readonly recordId: string;
}

export class Record extends RecordBase {
    public readonly recordId: string;

    constructor(scope: cdk.Construct, id: string, props: RecordProps) {
        super(scope, id);

        const resource = new cdk.CfnResource(this, 'Resource', {
            type: 'Vercel::Dns::Record',
            properties: {
                ApiKey: props.domain.owner.apiKey.toString(),
                TeamId: props.domain.owner.teamId,

                Domain: props.domain.domainName,
                Name: props.name,
                Type: props.type,
                Value: props.value,
                Ttl: props.ttl || 60
            }
        });

        this.recordId = resource.ref;
    }
}
