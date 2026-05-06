export const glossary: Record<string, string> = {
  // Batch schedulers
  'PBS': 'Portable Batch System — traditional on-premises HPC job scheduler software',
  'Slurm': 'Simple Linux Utility for Resource Management — popular HPC cluster job scheduler',
  'LSF': 'IBM Load Sharing Facility — enterprise batch workload scheduler used on-premises',

  // AWS Services / short-forms
  'SSM': 'AWS Systems Manager — manage EC2 instances remotely without SSH; run commands, patch, configure',
  'Athena': 'Amazon Athena — serverless SQL query service that reads data directly from S3, no database needed',
  'IMDSv2': 'Instance Metadata Service v2 — more secure way to query EC2 metadata; requires a session token before fetching data',
  'IMDS': 'Instance Metadata Service — endpoint at 169.254.169.254 that provides info about the running EC2 instance',
  'STS': 'AWS Security Token Service — issues temporary credentials (access key + secret + session token)',
  'CRR': 'Cross-Region Replication — automatically copies S3 objects to a bucket in another AWS region',

  // Compute
  'EC2 fleet': 'A group of EC2 instances managed together, typically mixing On-Demand and Spot types',
  'Spot': 'EC2 Spot Instances — spare AWS capacity at up to 90% discount; can be interrupted with 2-min notice',
  'On-Demand': 'EC2 On-Demand — pay per second/hour with no commitment; always available, never interrupted',

  // Networking
  'CIDR': 'Classless Inter-Domain Routing — defines an IP address range. /16 = 65 536 IPs, /24 = 256 IPs',
  'IGW': 'Internet Gateway — VPC component that allows public subnet resources to reach the internet',
  'NAT Gateway': 'Network Address Translation Gateway — lets private subnet instances initiate outbound internet traffic without being publicly reachable',
  'Transit Gateway': 'Central hub that connects multiple VPCs and on-premises networks with transitive routing (A↔hub↔B)',
  'transitive': 'Routing through a middle point — if A connects to hub and B connects to hub, A can reach B indirectly',
  'non-transitive': 'Routing only works directly — VPC Peering: if A peers B and B peers C, A still cannot reach C without its own peering',

  // Security
  'KMS': 'AWS Key Management Service — create, store, and manage encryption keys; used for data at rest encryption',
  'AES-256': 'Advanced Encryption Standard 256-bit — industry-standard symmetric encryption algorithm',
  'SSL': 'Secure Sockets Layer — older protocol for encrypting data in transit (now replaced by TLS)',
  'TLS': 'Transport Layer Security — modern encryption protocol for data in transit; successor to SSL',
  'SSL/TLS': 'Protocols that encrypt data travelling over a network (in transit)',
  'NACL': 'Network Access Control List — subnet-level firewall; stateless, evaluates every packet, supports both allow and deny rules',
  'WORM': 'Write Once Read Many — data can be written exactly once and never modified or deleted after',

  // Database / HA
  'Multi-AZ': 'Multi-Availability Zone — synchronous standby replica in a different AZ; automatic failover for high availability',
  'Read Replica': 'Asynchronous read-only copy of a database — offloads read queries; can exist in a different region',

  // Storage
  'EBS': 'Elastic Block Store — persistent block storage (like a virtual hard drive) attached to one EC2 instance',
  'EFS': 'Elastic File System — managed NFS file system that can be shared across multiple EC2 instances simultaneously',

  // Architecture patterns
  'stateful': 'Remembers connection state — allowed return traffic is automatically permitted without an explicit rule (like Security Groups)',
  'stateless': 'Does not track connections — every packet is evaluated independently against rules, both directions need rules (like NACLs)',

  // Cost
  'Spot Instances': 'Spare EC2 capacity at up to 90% discount — AWS can reclaim them with a 2-minute interruption notice',
  'Reserved Instances': '1- or 3-year commitment to EC2 usage in exchange for up to 72% discount vs On-Demand pricing',
  'Savings Plans': 'Flexible commitment to a consistent usage amount ($/hr) for 1-3 years; applies across EC2, Lambda, Fargate',
}
