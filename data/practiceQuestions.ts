export interface Option {
  id: string
  text: string
}

export interface PracticeQuestion {
  id: string
  domain: 'd1' | 'd2' | 'd3' | 'd4'
  domainLabel: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  scenario: string
  options: Option[]
  correctId: string
  explanation: {
    correct: string
    incorrects: Record<string, string>
  }
  keywords: string[]
}

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 'q-ec2-userdata',
    domain: 'd3',
    domainLabel: 'High-Performing Architectures',
    difficulty: 'Easy',
    scenario:
      'A fleet of Amazon EC2 instances running Linux will be launched in an Amazon VPC. An application development framework and some custom software must be installed on the instances. The installation will be initiated using some scripts. What feature enables a Solutions Architect to specify the scripts the software can be installed during the EC2 instance launch?',
    options: [
      { id: 'a', text: 'AWS Config' },
      { id: 'b', text: 'Instance Metadata' },
      { id: 'c', text: 'User Data' },
      { id: 'd', text: 'Run Command (SSM)' },
    ],
    correctId: 'c',
    explanation: {
      correct:
        'User Data is the correct answer. When you launch an EC2 instance, you can pass a script (shell script or cloud-init directive) as User Data. It runs automatically on first boot, perfect for installing software and configuring the instance. User Data is limited to 16KB.',
      incorrects: {
        a: 'AWS Config is incorrect. AWS Config tracks and audits configuration changes to your AWS resources. It enforces compliance rules (e.g. "all S3 must be encrypted") but does NOT run scripts on instances.',
        b: 'Instance Metadata is incorrect. The Metadata service (accessible at 169.254.169.254) provides info ABOUT the instance — hostname, IP address, IAM role, security groups. It is read-only data, not a way to run scripts.',
        d: 'Run Command (SSM) is incorrect. AWS Systems Manager Run Command is used to manage and run commands on EXISTING, already-running instances remotely without SSH. It is NOT for scripts during launch. Use User Data for launch-time configuration.',
      },
    },
    keywords: ['User Data', 'EC2 launch', 'bootstrap', 'initialization'],
  },
  {
    id: 'q-cloudfront-s3',
    domain: 'd3',
    domainLabel: 'High-Performing Architectures',
    difficulty: 'Medium',
    scenario:
      'As a Solutions Architect, you want to minimize the CPU utilization of EC2 instances caused by serving a high volume of requests for static content stored in an S3 bucket. How should you enhance the current architecture to overcome this problem?',
    options: [
      { id: 'a', text: 'Use Amazon API Gateway with Lambda to retrieve the static contents from S3 buckets' },
      { id: 'b', text: 'Use Amazon CloudFront with S3 bucket as the origin' },
      { id: 'c', text: 'Use a combination of Amazon CloudFront and Amazon API Gateway in addition to Lambda' },
      { id: 'd', text: 'Add more EC2 instances and use ELB to distribute the workload' },
    ],
    correctId: 'b',
    explanation: {
      correct:
        'CloudFront with S3 as origin is correct. CloudFront is a CDN that caches static content at edge locations worldwide. By placing CloudFront in front of the S3 bucket, requests are served from the nearest edge location — completely bypassing EC2. This dramatically reduces EC2 CPU utilization since EC2 no longer handles static content delivery.',
      incorrects: {
        a: 'API Gateway + Lambda is incorrect. This is unnecessarily complex and expensive for static content. Every request would invoke a Lambda function, adding latency and cost. API Gateway and Lambda are designed for dynamic request processing, not static file serving.',
        c: 'CloudFront + API Gateway + Lambda is incorrect. While CloudFront alone is correct, adding API Gateway and Lambda is over-engineered. CloudFront with S3 as origin is sufficient. The extra services add unnecessary complexity and cost.',
        d: 'Adding more EC2 instances + ELB is incorrect. This would distribute the static content load across more instances but would NOT reduce overall CPU utilization — it just spreads the same work across more servers. It is more expensive and does not address the root cause. CloudFront offloads static delivery entirely from EC2.',
      },
    },
    keywords: ['CloudFront', 'CDN', 'static content', 'S3 origin', 'edge locations'],
  },
  {
    id: 'q-rds-multiaz',
    domain: 'd2',
    domainLabel: 'Resilient Architectures',
    difficulty: 'Easy',
    scenario:
      'A company is running a critical web application using Amazon RDS for MySQL. The database must remain available even if the primary database instance fails. The recovery must happen automatically with minimal downtime. Which RDS feature should the Solutions Architect enable?',
    options: [
      { id: 'a', text: 'RDS Read Replicas' },
      { id: 'b', text: 'RDS Multi-AZ Deployment' },
      { id: 'c', text: 'RDS Automated Backups' },
      { id: 'd', text: 'Amazon ElastiCache in front of RDS' },
    ],
    correctId: 'b',
    explanation: {
      correct:
        'RDS Multi-AZ is correct. Multi-AZ maintains a synchronous standby replica in a different Availability Zone. If the primary fails, RDS automatically fails over to the standby — usually within 1–2 minutes — with no manual intervention. The DNS endpoint stays the same, so applications reconnect automatically. This is designed specifically for high availability and automatic failover.',
      incorrects: {
        a: 'Read Replicas is incorrect. Read Replicas use asynchronous replication and are designed to offload read traffic — not for automatic failover. If the primary fails, a Read Replica does NOT automatically take over. Promotion to primary requires manual action.',
        c: 'Automated Backups is incorrect. Backups let you restore to a point in time, but restoration takes time and is not automatic failover. This is for disaster recovery (RPO), not high availability (RTO minimization).',
        d: 'ElastiCache is incorrect. ElastiCache is a caching layer that reduces read load on the database. It does not provide database failover or help if RDS itself goes down.',
      },
    },
    keywords: ['RDS Multi-AZ', 'automatic failover', 'high availability', 'standby replica'],
  },
  {
    id: 'q-s3-encryption',
    domain: 'd1',
    domainLabel: 'Secure Architectures',
    difficulty: 'Easy',
    scenario:
      'A company stores sensitive financial documents in Amazon S3. The security team requires that all data must be encrypted at rest and that the company must manage the encryption keys themselves to meet compliance requirements. Which S3 encryption option should the Solutions Architect choose?',
    options: [
      { id: 'a', text: 'SSE-S3 (Server-Side Encryption with S3 managed keys)' },
      { id: 'b', text: 'SSE-KMS (Server-Side Encryption with AWS KMS keys)' },
      { id: 'c', text: 'SSE-C (Server-Side Encryption with Customer-provided keys)' },
      { id: 'd', text: 'Client-Side Encryption before uploading to S3' },
    ],
    correctId: 'b',
    explanation: {
      correct:
        'SSE-KMS is correct. With SSE-KMS, S3 encrypts data using keys stored in AWS KMS. The company can create and manage their own Customer Managed Keys (CMKs) in KMS — controlling key rotation, access policies, and audit trails via CloudTrail. This meets the "manage encryption keys" compliance requirement while keeping the encryption fully managed by AWS.',
      incorrects: {
        a: 'SSE-S3 is incorrect. With SSE-S3, AWS fully manages the encryption keys. The company has NO control over the keys — they cannot rotate, audit, or restrict key usage. This fails the "company must manage keys" requirement.',
        c: 'SSE-C is incorrect. SSE-C requires the customer to provide the encryption key with EVERY request — the key is not stored by AWS. This is technically valid for key management but is operationally complex and risky if keys are lost. SSE-KMS is the standard answer for "manage your own keys" in exam scenarios.',
        d: 'Client-Side Encryption is incorrect (for this scenario). Client-side encryption works but adds application complexity and is not the standard AWS recommendation. The question asks for an S3 encryption option, not application-level encryption.',
      },
    },
    keywords: ['SSE-KMS', 'encryption at rest', 'customer managed keys', 'CMK', 'KMS'],
  },
  {
    id: 'q-sqs-vs-sns',
    domain: 'd3',
    domainLabel: 'High-Performing Architectures',
    difficulty: 'Medium',
    scenario:
      'A company processes orders through a web application. The order processing service must not lose any orders even if it goes down temporarily, and orders should be processed one at a time in the sequence they were received. Which AWS service should the Solutions Architect use?',
    options: [
      { id: 'a', text: 'Amazon SNS (Simple Notification Service)' },
      { id: 'b', text: 'Amazon SQS Standard Queue' },
      { id: 'c', text: 'Amazon SQS FIFO Queue' },
      { id: 'd', text: 'Amazon Kinesis Data Streams' },
    ],
    correctId: 'c',
    explanation: {
      correct:
        'SQS FIFO Queue is correct. FIFO (First-In-First-Out) queues guarantee exactly-once processing and strict ordering. Orders are processed exactly in the sequence received. If the consumer goes down, messages stay in the queue safely — no orders are lost. FIFO queues also prevent duplicate processing with deduplication IDs.',
      incorrects: {
        a: 'SNS is incorrect. SNS is a pub/sub notification service for fan-out (one message → many subscribers). It does NOT queue messages — if a subscriber is down when a message arrives, the message is lost. No ordering guarantee.',
        b: 'SQS Standard Queue is incorrect. Standard queues provide at-least-once delivery and best-effort ordering — messages may arrive out of order or be delivered more than once. For order processing where sequence matters, FIFO is required.',
        d: 'Kinesis Data Streams is incorrect. Kinesis is designed for real-time streaming of large volumes of data (clickstreams, logs, IoT). It is over-engineered for simple order processing. SQS FIFO is the correct tool for task queuing with ordering.',
      },
    },
    keywords: ['SQS FIFO', 'ordering', 'exactly-once', 'message queue', 'deduplication'],
  },
  {
    id: 'q-iam-roles',
    domain: 'd1',
    domainLabel: 'Secure Architectures',
    difficulty: 'Easy',
    scenario:
      'A developer has written an application running on an EC2 instance that needs to read objects from an S3 bucket. The security team prohibits storing AWS credentials (access keys) on EC2 instances. What is the MOST secure way to grant the EC2 instance access to S3?',
    options: [
      { id: 'a', text: 'Store the AWS access keys in environment variables on the EC2 instance' },
      { id: 'b', text: 'Attach an IAM Role with S3 read permissions to the EC2 instance' },
      { id: 'c', text: 'Create an IAM user, generate access keys, and embed them in the application code' },
      { id: 'd', text: 'Store the AWS access keys in a config file on the EC2 instance' },
    ],
    correctId: 'b',
    explanation: {
      correct:
        'IAM Role attached to EC2 is correct and the AWS best practice. An IAM Role grants temporary credentials automatically rotated by AWS. The EC2 instance fetches these credentials from the Instance Metadata Service. No keys to store, rotate, or accidentally expose. The application uses the AWS SDK/CLI which automatically picks up the role credentials.',
      incorrects: {
        a: 'Environment variables is incorrect. While better than hardcoding in source code, storing long-term access keys anywhere on the EC2 instance (env vars, files, code) violates the security team\'s policy and is risky if the instance is compromised.',
        c: 'Embedding in application code is incorrect. This is the WORST approach — hardcoded credentials get committed to source control, visible to anyone with code access, and cannot be easily rotated. Never hardcode AWS credentials.',
        d: 'Config file on EC2 is incorrect. Same problem as env vars — long-term credentials stored on the instance. If the instance is compromised, the credentials are exposed. IAM Roles provide temporary, auto-rotating credentials with no storage risk.',
      },
    },
    keywords: ['IAM Role', 'EC2 instance profile', 'temporary credentials', 'no hardcoded keys', 'least privilege'],
  },
  {
    id: 'q-route53-failover',
    domain: 'd2',
    domainLabel: 'Resilient Architectures',
    difficulty: 'Medium',
    scenario:
      'A company hosts its main website in us-east-1. For disaster recovery, they have a static S3 website hosted in eu-west-1 that should only serve traffic if the primary site is unavailable. Health checks are already configured. Which Route 53 routing policy should the Solutions Architect use?',
    options: [
      { id: 'a', text: 'Weighted routing policy' },
      { id: 'b', text: 'Latency-based routing policy' },
      { id: 'c', text: 'Failover routing policy' },
      { id: 'd', text: 'Geolocation routing policy' },
    ],
    correctId: 'c',
    explanation: {
      correct:
        'Failover routing policy is correct. Route 53 Failover routing has a primary and secondary record. Health checks monitor the primary. If the primary fails its health check, Route 53 automatically routes all traffic to the secondary (S3 static site). When primary recovers, traffic returns automatically. This is exactly the active-passive DR pattern described.',
      incorrects: {
        a: 'Weighted routing is incorrect. Weighted routing splits traffic between multiple endpoints based on a percentage you define (e.g. 80/20). It always sends traffic to BOTH endpoints simultaneously — you cannot use it to only send traffic to the secondary when primary is down.',
        b: 'Latency-based routing is incorrect. Latency routing sends users to the endpoint with the lowest network latency — both endpoints are always active. This would serve BOTH regions simultaneously, not implement failover.',
        d: 'Geolocation routing is incorrect. Geolocation routing sends users to specific endpoints based on their geographic location (country/continent). Both endpoints are active simultaneously — no health-check-based failover.',
      },
    },
    keywords: ['Route 53 Failover', 'active-passive', 'health check', 'DR', 'primary secondary'],
  },
  {
    id: 'q-lambda-vs-ec2',
    domain: 'd3',
    domainLabel: 'High-Performing Architectures',
    difficulty: 'Easy',
    scenario:
      'A company wants to run a function that resizes images whenever a new image is uploaded to an S3 bucket. The function runs in under 30 seconds, is triggered by S3 events, and does not run continuously. Which compute option is the MOST cost-effective?',
    options: [
      { id: 'a', text: 'Launch a dedicated EC2 instance to continuously poll S3 for new images' },
      { id: 'b', text: 'Use AWS Lambda triggered by S3 event notifications' },
      { id: 'c', text: 'Use Amazon ECS with a long-running container task' },
      { id: 'd', text: 'Use AWS Elastic Beanstalk to deploy an image processing application' },
    ],
    correctId: 'b',
    explanation: {
      correct:
        'Lambda with S3 event trigger is correct. Lambda is ideal here: event-driven (S3 triggers Lambda automatically on upload), runs only when needed (no idle cost), 30-second runtime fits well within Lambda\'s 15-minute limit, and you pay only per invocation. Zero cost when no images are uploaded.',
      incorrects: {
        a: 'Dedicated EC2 instance is incorrect. Running an EC2 instance 24/7 to poll S3 is wasteful and expensive. You pay for the instance even when there are no images to process. EC2 is for workloads requiring full server control, custom OS, or continuous compute.',
        c: 'ECS long-running container is incorrect. ECS is for containerized applications — microservices, web servers, long-running tasks. For a short event-triggered function, ECS adds unnecessary operational overhead (cluster management, container orchestration).',
        d: 'Elastic Beanstalk is incorrect. Beanstalk is a PaaS for deploying web applications (Node.js, Python, Java, etc.) that need to run continuously. It still provisions EC2 instances underneath, so you pay for idle time. Overkill for a simple event-triggered function.',
      },
    },
    keywords: ['Lambda', 'serverless', 'event-driven', 'S3 trigger', 'cost-effective', 'pay per use'],
  },
]
