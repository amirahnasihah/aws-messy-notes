export type ColorCategory =
  | 'compute'
  | 'storage'
  | 'network'
  | 'messaging'
  | 'infra'
  | 'pricing'
  | 'd4store'
  | 'd4net'
  | 'd4db'

export interface ServiceCard {
  shortName: string
  fullName: string
  ingat: string
  gunaUntuk: string
  fungsi: string
  contohGuna?: string
  scenario?: string
  storageDetails?: string
  keywords: string[]
}

export interface SectionData {
  id: string
  icon: string
  title: string
  category: ColorCategory
  services: ServiceCard[]
}

export interface DomainData {
  id: string
  badge: string
  title: string
  subtitle: string
  variant: 'd3' | 'd4'
  sections: SectionData[]
}

export const categoryStyles: Record<
  ColorCategory,
  { title: string; accent: string; keyword: string; nav: string; scenario: string }
> = {
  compute:   { title: 'text-c1', accent: 'bg-c1',  keyword: 'text-c1 border-c1/20 bg-c1/5',   nav: 'text-c1 border-c1/20',   scenario: 'bg-c6/5 border-c6/15' },
  storage:   { title: 'text-c2', accent: 'bg-c2',  keyword: 'text-c2 border-c2/20 bg-c2/5',   nav: 'text-c2 border-c2/20',   scenario: 'bg-c6/5 border-c6/15' },
  network:   { title: 'text-c4', accent: 'bg-c4',  keyword: 'text-c4 border-c4/20 bg-c4/5',   nav: 'text-c4 border-c4/20',   scenario: 'bg-c6/5 border-c6/15' },
  messaging: { title: 'text-c3', accent: 'bg-c3',  keyword: 'text-c3 border-c3/20 bg-c3/5',   nav: 'text-c3 border-c3/20',   scenario: 'bg-c6/5 border-c6/15' },
  infra:     { title: 'text-c5', accent: 'bg-c5',  keyword: 'text-c5 border-c5/20 bg-c5/5',   nav: 'text-c5 border-c5/20',   scenario: 'bg-c6/5 border-c6/15' },
  pricing:   { title: 'text-c6', accent: 'bg-c6',  keyword: 'text-c6 border-c6/20 bg-c6/5',   nav: 'text-c6 border-c6/20',   scenario: 'bg-c6/5 border-c6/15' },
  d4store:   { title: 'text-c2', accent: 'bg-c2',  keyword: 'text-c2 border-c2/20 bg-c2/5',   nav: 'text-c2 border-c2/20',   scenario: 'bg-c6/5 border-c6/15' },
  d4net:     { title: 'text-c4', accent: 'bg-c4',  keyword: 'text-c4 border-c4/20 bg-c4/5',   nav: 'text-c4 border-c4/20',   scenario: 'bg-c6/5 border-c6/15' },
  d4db:      { title: 'text-c1', accent: 'bg-c1',  keyword: 'text-c1 border-c1/20 bg-c1/5',   nav: 'text-c1 border-c1/20',   scenario: 'bg-c6/5 border-c6/15' },
}

export const domains: DomainData[] = [
  {
    id: 'domain3',
    badge: 'DOMAIN 3 · 24% OF EXAM',
    title: 'Design High-Performing Architectures',
    subtitle: 'Compute · Storage · Networking · Messaging · Infrastructure',
    variant: 'd3',
    sections: [
      {
        id: 'd3-compute',
        icon: '🖥️',
        title: 'Compute',
        category: 'compute',
        services: [
          {
            shortName: 'EC2',
            fullName: 'Elastic Compute Cloud',
            ingat: '"Virtual computer"',
            gunaUntuk: 'Run any workload, full control',
            fungsi: 'Menyediakan kapasiti compute yang boleh diubah saiz dalam cloud',
            contohGuna: 'Host web server, run database, legacy app migration',
            keywords: ['full control', 'custom OS', 'lift and shift'],
          },
          {
            shortName: 'Lambda',
            fullName: 'AWS Lambda',
            ingat: '"Jalankan code, bayar per run"',
            gunaUntuk: 'Serverless, event-driven',
            fungsi: 'Melaksanakan kod tanpa perlu mengurus server',
            contohGuna: 'Resize image bila upload ke S3, webhook handler, scheduled tasks',
            keywords: ['serverless', 'event-driven', 'no server management'],
          },
          {
            shortName: 'Elastic Beanstalk',
            fullName: 'AWS Elastic Beanstalk',
            ingat: '"Hantar code je, AWS urus selebihnya"',
            gunaUntuk: 'Deploy app tanpa urus server',
            fungsi: 'Mengurus deployment, scaling dan monitoring aplikasi secara automatik',
            contohGuna: 'Deploy Node.js / Python app tanpa urus EC2 sendiri',
            keywords: ['PaaS', 'deploy app', 'developer friendly'],
          },
          {
            shortName: 'ECS',
            fullName: 'Elastic Container Service',
            ingat: '"Docker manager"',
            gunaUntuk: 'Run containers',
            fungsi: 'Mengurus dan menjalankan Docker containers pada cluster',
            contohGuna: 'Run microservices dalam Docker, e-commerce modules',
            keywords: ['Docker', 'containers', 'microservices'],
          },
          {
            shortName: 'EKS',
            fullName: 'Elastic Kubernetes Service',
            ingat: '"Kubernetes manager"',
            gunaUntuk: 'Container orchestration guna K8s',
            fungsi: 'Mengurus Kubernetes cluster untuk container orchestration',
            contohGuna: 'Large-scale containerized apps yang guna K8s',
            keywords: ['Kubernetes', 'K8s', 'container orchestration'],
          },
        ],
      },
      {
        id: 'd3-storage',
        icon: '💾',
        title: 'Storage',
        category: 'storage',
        services: [
          {
            shortName: 'EBS',
            fullName: 'Elastic Block Store',
            ingat: '"Hard disk untuk EC2"',
            gunaUntuk: 'Block storage, attach ke 1 EC2',
            fungsi: 'Menyediakan block-level storage yang boleh di-attach kepada EC2 instance',
            contohGuna: 'OS drive untuk EC2, database storage',
            keywords: ['block storage', 'single EC2', 'persistent disk'],
          },
          {
            shortName: 'EFS',
            fullName: 'Elastic File System',
            ingat: '"Shared drive, ramai boleh access"',
            gunaUntuk: 'File storage, multi-EC2',
            fungsi: 'Menyediakan file storage yang boleh dikongsi oleh pelbagai EC2 instances serentak',
            contohGuna: 'Shared config files, media processing antara multiple EC2',
            keywords: ['shared storage', 'multiple EC2', 'NFS'],
          },
          {
            shortName: 'S3',
            fullName: 'Simple Storage Service',
            ingat: '"Infinite storage bucket"',
            gunaUntuk: 'Object storage, images, backups',
            fungsi: 'Menyimpan dan mendapatkan semula sebarang jumlah data sebagai objects',
            contohGuna: 'Store images, videos, backups, static website hosting',
            keywords: ['object storage', 'static website', 'backup', 'unlimited'],
          },
          {
            shortName: 'S3 Glacier',
            fullName: 'Amazon S3 Glacier',
            ingat: '"S3 yang sejuk beku"',
            gunaUntuk: 'Archiving, jarang access',
            fungsi: 'Menyediakan arkib data jangka panjang dengan kos yang rendah',
            contohGuna: 'Store old financial records, compliance archives, log archives',
            keywords: ['archiving', 'long-term storage', 'infrequent access', 'cold storage'],
          },
        ],
      },
      {
        id: 'd3-network',
        icon: '🌐',
        title: 'Networking & Delivery',
        category: 'network',
        services: [
          {
            shortName: 'CloudFront',
            fullName: 'Amazon CloudFront',
            ingat: '"CDN, content laju sampai"',
            gunaUntuk: 'Deliver content laju via edge locations',
            fungsi: 'Menghantar content kepada pengguna melalui edge locations global dengan latency rendah',
            contohGuna: 'Deliver images & videos untuk global users, static website laju',
            keywords: ['CDN', 'edge location', 'low latency', 'static content'],
          },
          {
            shortName: 'ALB',
            fullName: 'Application Load Balancer',
            ingat: '"Traffic director — by path/host"',
            gunaUntuk: 'Path-based routing, single domain',
            fungsi: 'Mengagihkan traffic HTTP/HTTPS berdasarkan path atau host rules',
            contohGuna: 'myshop.com/products → service A, myshop.com/cart → service B',
            keywords: ['path-based routing', 'HTTP', 'layer 7'],
          },
          {
            shortName: 'NLB',
            fullName: 'Network Load Balancer',
            ingat: '"Traffic director — ultra laju"',
            gunaUntuk: 'TCP/UDP traffic, low latency',
            fungsi: 'Mengagihkan traffic TCP/UDP dengan latency yang sangat rendah',
            contohGuna: 'Gaming servers, IoT, VoIP yang perlukan speed tinggi',
            keywords: ['TCP', 'UDP', 'layer 4', 'static IP'],
          },
          {
            shortName: 'Route 53',
            fullName: 'Amazon Route 53',
            ingat: '"GPS untuk domain"',
            gunaUntuk: 'DNS management, domain routing',
            fungsi: 'Mengurus DNS dan mengarahkan traffic kepada endpoint yang betul',
            contohGuna: 'Point domain ke server, failover ke backup region',
            keywords: ['DNS', 'domain', 'routing policy', 'failover'],
          },
        ],
      },
      {
        id: 'd3-messaging',
        icon: '📨',
        title: 'Messaging & Serverless',
        category: 'messaging',
        services: [
          {
            shortName: 'SQS',
            fullName: 'Simple Queue Service',
            ingat: '"Baris gilir message"',
            gunaUntuk: 'Decouple services, async queue',
            fungsi: 'Mengurus queue untuk menghantar mesej antara komponen aplikasi secara asynchronous',
            contohGuna: 'Order processing queue, background job queue',
            keywords: ['queue', 'decouple', 'async', 'pull-based'],
          },
          {
            shortName: 'SNS',
            fullName: 'Simple Notification Service',
            ingat: '"Broadcast message"',
            gunaUntuk: 'Push notification ke many subscribers',
            fungsi: 'Menghantar notifikasi kepada pelbagai subscribers secara serentak',
            contohGuna: 'Alert ramai users sekaligus, trigger multiple Lambda functions',
            keywords: ['pub/sub', 'push notification', 'fan-out', 'broadcast'],
          },
          {
            shortName: 'Kinesis',
            fullName: 'Amazon Kinesis',
            ingat: '"SQS tapi real-time streaming"',
            gunaUntuk: 'Real-time data streaming & analytics',
            fungsi: 'Memproses dan menganalisis data streaming secara real-time',
            contohGuna: 'Real-time analytics, live dashboard, clickstream data',
            keywords: ['real-time', 'streaming', 'data pipeline', 'analytics'],
          },
          {
            shortName: 'API Gateway',
            fullName: 'Amazon API Gateway',
            ingat: '"Pintu masuk untuk API"',
            gunaUntuk: 'Manage & expose REST/WebSocket APIs',
            fungsi: 'Mencipta, mengurus dan mendedahkan API pada mana-mana skala',
            contohGuna: 'Frontend → API Gateway → Lambda → DynamoDB',
            keywords: ['REST API', 'WebSocket', 'API management', 'throttling'],
          },
        ],
      },
      {
        id: 'd3-infra',
        icon: '🏗️',
        title: 'Infrastructure',
        category: 'infra',
        services: [
          {
            shortName: 'CloudFormation',
            fullName: 'AWS CloudFormation',
            ingat: '"Blueprint untuk AWS resources"',
            gunaUntuk: 'Automate infrastructure deployment, consistent environment',
            fungsi: 'Mengurus dan menyediakan infrastruktur AWS secara automatik menggunakan template (IaC)',
            contohGuna: 'Deploy EC2 + S3 + RDS sekaligus dari satu template YAML/JSON, replicate environment dev/staging/prod',
            keywords: ['IaC', 'Infrastructure as Code', 'template', 'stack', 'rollback', 'repeatable deployment'],
          },
        ],
      },
    ],
  },
  {
    id: 'domain4',
    badge: 'DOMAIN 4 · 20% OF EXAM',
    title: 'Design Cost-Optimized Architectures',
    subtitle: 'Pricing Models · Storage · Networking · Database',
    variant: 'd4',
    sections: [
      {
        id: 'd4-pricing',
        icon: '💰',
        title: 'EC2 Pricing Models',
        category: 'pricing',
        services: [
          {
            shortName: 'On-Demand',
            fullName: 'EC2 On-Demand Instances',
            ingat: '"Bayar ikut jam, bila-bila boleh stop"',
            gunaUntuk: 'Workload tak menentu, short-term, testing',
            fungsi: 'Menyediakan kapasiti compute tanpa komitmen jangka panjang pada kadar tetap per jam',
            scenario: 'Startup baru launch app, tak tahu lagi berapa traffic. Atau developer nak test environment kejap je — tak nak commit lama.',
            keywords: ['no commitment', 'flexible', 'short-term', 'highest cost'],
          },
          {
            shortName: 'Reserved Instances',
            fullName: 'EC2 Reserved Instances',
            ingat: '"Bayar awal, dapat diskaun besar"',
            gunaUntuk: 'Workload steady, predictable usage, 1-3 tahun',
            fungsi: 'Menyediakan diskaun sehingga 72% berbanding On-Demand dengan komitmen 1 atau 3 tahun',
            scenario: 'E-commerce company yang dah established, database server mesti run 24/7 sepanjang tahun. Jimat besar kalau commit 1-3 tahun.',
            keywords: ['1 or 3 year', 'up to 72% discount', 'predictable', 'steady state'],
          },
          {
            shortName: 'Spot Instances',
            fullName: 'EC2 Spot Instances',
            ingat: '"Harga murah tapi boleh kena interrupt"',
            gunaUntuk: 'Batch jobs, fault-tolerant workloads, flexible timing',
            fungsi: 'Menggunakan kapasiti EC2 yang tidak digunakan pada harga sehingga 90% lebih murah',
            scenario: 'Data science team nak process big dataset — tak kisah kalau interrupted. Atau render farm untuk video yang boleh resume. JANGAN guna untuk critical production server.',
            keywords: ['up to 90% discount', 'interruptible', 'batch jobs', 'fault-tolerant'],
          },
          {
            shortName: 'Savings Plans',
            fullName: 'AWS Savings Plans',
            ingat: '"Reserved tapi lebih flexible"',
            gunaUntuk: 'Commit spend per hour, flexible instance type',
            fungsi: 'Menawarkan diskaun sehingga 66% dengan komitmen penggunaan dalam USD/jam tanpa terikat instance type',
            scenario: 'Company yang nak jimat macam Reserved tapi plan nak tukar instance type atau region dalam masa terdekat. Lebih flexible dari Reserved Instances.',
            keywords: ['flexible', 'hourly commitment', 'up to 66% discount', 'compute savings'],
          },
          {
            shortName: 'Trusted Advisor',
            fullName: 'AWS Trusted Advisor',
            ingat: '"Penasihat jimat kos AWS"',
            gunaUntuk: 'Identify idle resources, cost optimization recommendations',
            fungsi: 'Menganalisis persekitaran AWS dan memberikan cadangan untuk optimasi kos, security, dan performance',
            scenario: 'CFO tanya "mana resources kita yang membazir?" — Trusted Advisor akan highlight EC2 yang underutilized, S3 buckets tak pakai, Elastic IPs yang idle, dan bagi estimate savings.',
            keywords: ['cost recommendations', 'idle resources', 'rightsizing', 'underutilized'],
          },
        ],
      },
      {
        id: 'd4-storage',
        icon: '💾',
        title: 'Storage Cost Optimization',
        category: 'd4store',
        services: [
          {
            shortName: 'S3 Storage Tiers',
            fullName: 'Amazon S3 Storage Classes',
            ingat: '"Pilih tier ikut seberapa selalu kau access"',
            gunaUntuk: 'Kurangkan kos storage ikut frequency of access',
            fungsi: 'Menyediakan pelbagai kelas storan dengan harga berbeza berdasarkan keperluan akses data',
            storageDetails: 'S3 Standard → selalu access, harga tinggi\nS3 Standard-IA → jarang access tapi kena cepat bila diperlukan\nS3 One Zone-IA → same tapi 1 AZ je, lagi murah\nS3 Glacier Instant → archive, retrieve dalam miliseconds\nS3 Glacier Flexible → archive, retrieve dalam minit-jam\nS3 Glacier Deep Archive → paling murah, retrieve 12-48 jam',
            scenario: 'Log files yang baru = S3 Standard. Log files 30 hari lepas = S3-IA. Log files setahun lepas untuk compliance = S3 Glacier. Guna S3 Lifecycle Policy untuk auto-move between tiers.',
            keywords: ['storage classes', 'lifecycle policy', 'infrequent access', 'glacier'],
          },
          {
            shortName: 'S3 Intelligent-Tiering',
            fullName: 'S3 Intelligent-Tiering',
            ingat: '"AWS pilihkan tier yang paling murah secara auto"',
            gunaUntuk: 'Data dengan access pattern tak menentu',
            fungsi: 'Memindahkan objek secara automatik antara access tiers berdasarkan corak penggunaan',
            scenario: 'Media company simpan assets — ada video yang viral tiba-tiba, ada yang tak pernah ditonton. Tak boleh predict mana yang akan kena access. Intelligent-Tiering auto-optimize kos tanpa perlu urus manually.',
            keywords: ['auto-tiering', 'unpredictable access', 'no retrieval fees'],
          },
        ],
      },
      {
        id: 'd4-network',
        icon: '🌐',
        title: 'Networking Cost Optimization',
        category: 'd4net',
        services: [
          {
            shortName: 'CloudFront',
            fullName: 'Amazon CloudFront',
            ingat: '"CDN yang jimatkan data transfer cost"',
            gunaUntuk: 'Reduce data transfer cost, cache content dekat user',
            fungsi: 'Mengurangkan kos data transfer dengan menyimpan cache content di edge locations',
            scenario: 'Website ada users dari US, Europe, Asia. Tanpa CloudFront, setiap request kena bayar data transfer dari origin server. Dengan CloudFront, content cached kat edge location dekat user — jimat kos transfer + lagi laju.',
            keywords: ['reduce data transfer', 'edge caching', 'CDN', 'cost saving'],
          },
          {
            shortName: 'VPC Endpoints',
            fullName: 'AWS VPC Endpoints',
            ingat: '"Jalan dalam rumah, tak payah keluar internet"',
            gunaUntuk: 'EC2 → S3/DynamoDB tanpa kena NAT Gateway fees',
            fungsi: 'Menghubungkan VPC kepada perkhidmatan AWS secara terus tanpa melalui internet awam',
            scenario: 'EC2 dalam private subnet selalu upload/download dari S3. Kalau guna NAT Gateway, kena bayar per GB. Pasang VPC Endpoint → traffic pergi terus dalam AWS network, no NAT fees, lagi jimat.',
            keywords: ['no NAT fees', 'private connection', 'S3 gateway', 'no internet'],
          },
        ],
      },
      {
        id: 'd4-database',
        icon: '🗄️',
        title: 'Database Cost Optimization',
        category: 'd4db',
        services: [
          {
            shortName: 'ElastiCache',
            fullName: 'Amazon ElastiCache',
            ingat: '"Cache depan database, kurangkan DB load"',
            gunaUntuk: 'Cache frequent queries, reduce RDS cost',
            fungsi: 'Menyediakan in-memory caching untuk mengurangkan beban dan kos pada database utama',
            scenario: 'E-commerce app — product listing query kena berjuta kali sehari. Tanpa cache, RDS kena scale up (mahal). Dengan ElastiCache (Redis), query popular disimpan dalam memory — RDS tak terlalu terbeban, kos lebih rendah.',
            keywords: ['Redis', 'Memcached', 'in-memory', 'reduce DB load', 'caching'],
          },
          {
            shortName: 'DynamoDB On-Demand',
            fullName: 'Amazon DynamoDB On-Demand',
            ingat: '"Database bayar per request, zero urus capacity"',
            gunaUntuk: 'Unpredictable traffic, serverless apps',
            fungsi: 'Menyediakan kapasiti database NoSQL yang skala secara automatik dan dikenakan caj berdasarkan permintaan sebenar',
            scenario: 'App baru yang tak tahu lagi berapa reads/writes per second. DynamoDB On-Demand auto-scale dan kau bayar per request je — tak perlu provision capacity in advance. Kalau traffic rendah, bayar rendah.',
            keywords: ['NoSQL', 'pay per request', 'serverless', 'auto-scale', 'unpredictable traffic'],
          },
        ],
      },
    ],
  },
]

export interface NavItem {
  href: string
  label: string
  className: string
}

export interface NavDomain {
  href: string
  label: string
  colorClass: string
  items: NavItem[]
}

export const navDomains: NavDomain[] = [
  {
    href: '#domain3',
    label: 'D3 · High-Performing',
    colorClass: 'text-c1',
    items: [
      { href: '#d3-compute',   label: '🖥️ Compute',   className: 'text-c1 border-c1/20' },
      { href: '#d3-storage',   label: '💾 Storage',    className: 'text-c2 border-c2/20' },
      { href: '#d3-network',   label: '🌐 Network',    className: 'text-c4 border-c4/20' },
      { href: '#d3-messaging', label: '📨 Messaging',  className: 'text-c3 border-c3/20' },
      { href: '#d3-infra',     label: '🏗️ Infra',     className: 'text-c5 border-c5/20' },
    ],
  },
  {
    href: '#domain4',
    label: 'D4 · Cost-Optimized',
    colorClass: 'text-c6',
    items: [
      { href: '#d4-pricing',   label: '💰 Pricing',   className: 'text-c6 border-c6/20' },
      { href: '#d4-storage',   label: '💾 Storage',   className: 'text-c2 border-c2/20' },
      { href: '#d4-network',   label: '🌐 Network',   className: 'text-c4 border-c4/20' },
      { href: '#d4-database',  label: '🗄️ Database', className: 'text-c1 border-c1/20' },
    ],
  },
]
