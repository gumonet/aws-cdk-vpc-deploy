import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class VpcInfraLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const  vpc = new ec2.Vpc( this, 'Vpc',{
      cidr: '10.10.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      availabilityZones:[
        'us-west-2a',
        'us-west-2b'
      ],
      subnetConfiguration:[
        {
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_NAT,
          cidrMask: 24,
        }
      ]
    }
    )
  }
}
