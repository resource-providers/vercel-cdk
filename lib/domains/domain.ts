import * as cdk from '@aws-cdk/core';
import { RecordType, Record } from '../dns';

export interface Owner {
    apiKey: cdk.SecretValue;
    teamId?: string;
}

export interface AddRecordOptions {
    name: string;
    type: RecordType;
    value: string;
    ttl?: number;
}

export interface DomainProps {
    /**
     * The name of the domain
     */
    readonly domainName: string;

    readonly owner: Owner;
}

export interface DomainAttributes {
    /**
     * The name of the domain
     */
    readonly domainName: string;
}

export interface IDomain extends cdk.IResource {
    /**
     * The name of the domain.
     * @attribute
     */
    readonly domainName: string;
}

export abstract class DomainBase extends cdk.Resource implements IDomain {
    public abstract readonly domainName: string;
}

export class Domain extends DomainBase {
    public static fromDomainName(scope: cdk.Construct, id: string, domainName: string) {
        return Domain.fromDomainAttributes(scope, id, { domainName })
    }

    public static fromDomainAttributes(scope: cdk.Construct, id: string, attrs: DomainAttributes) {
        class Import extends DomainBase {
            public readonly domainName = attrs.domainName;
        }

        return new Import(scope, id);
    }

    public readonly domainName: string;
    public readonly domainId: string;
    public readonly owner: Owner;

    constructor(scope: cdk.Construct, id: string, props: DomainProps) {
        super(scope, id, {
            physicalName: props.domainName
        });

        this.owner = props.owner;
        this.domainName = props.domainName;

        const resource = new cdk.CfnResource(this, 'Resource', {
            type: 'Vercel::Domain::Domain',
            properties: {
                Name: props.domainName
            }
        });

        this.domainId = resource.ref;
    }

    public addDnsRecord(props: AddRecordOptions) {
        const logicalId = `${this.domainName}${props.type}Id`;

        return new Record(this, logicalId, {
            domain: this,
            ...props
        })
    }
}
