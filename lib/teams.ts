import * as cdk from '@aws-cdk/core';

export interface TeamProps {
}

export interface ITeam extends cdk.IResource {
    readonly teamId: string;
}

abstract class TeamBase extends cdk.Resource implements ITeam {
    abstract readonly teamId: string;
}

export class Team extends TeamBase {
    public readonly teamId: string;

    constructor(scope: cdk.Construct, id: string, props: TeamProps) {
        super(scope, id);

        const resource = new cdk.CfnResource(this, 'Resource', {
            type: 'Vercel::Teams::Team',
            properties: {
            }
        });

        this.teamId = resource.ref;
    }
}
