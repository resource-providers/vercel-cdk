import * as cdk from '@aws-cdk/core';
import { DomainProps, DomainBase } from './domain';

export interface DomainTransferProps extends DomainProps {
    /**
     * The authorization code assigned to the domain.
     */
    readonly authCode: string;

    /**
     * The price you expect to be charged for the required 1 year renewal.
     */
    readonly expectedPrice: number;
}

export class DomainTransfer extends DomainBase {
    /**
     * The domain name.
     */
    public readonly domainName: string;

    /**
     * The unique ID of the domain.
     */
    public readonly domainId: string;

    constructor(scope: cdk.Construct, id: string, props: DomainTransferProps) {
        super(scope, id, {
            physicalName: props.domainName
        });

        this.domainName = props.domainName;

        const resource = new cdk.CfnResource(this, 'Resource', {
            type: 'Vercel::Domain::Transfer',
            properties: {
                Method: 'transfer-in',
                Name: props.domainName,
                AuthCode: props.authCode,
                ExpectedPrice: props.expectedPrice
            }
        });

        this.domainId = resource.ref;
    }
}
