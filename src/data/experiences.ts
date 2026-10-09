export interface Role {
  title: string
  period: string
  highlights: string[]
}

export interface Experience {
  id: number
  company: string
  roles: Role[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Checkout.com',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Aug. 2026 - Present',
        highlights: [
          "Built the merchant risk platform's core service from scratch - a C#/.NET API on ECS Fargate that turns analyst-uploaded CSVs into bulk risk-control commands dispatched via SQS, provisioned with Terraform and monitored in Datadog.",
          'Designing the Apache Flink decision layer for a platform built to handle 20M risk signals a month across 1M merchants, ingesting from 7 risk domains and enforcing 9 control types - from payout freezes to merchant termination - with a sub-30s latency target.',
          'Introduced spec-driven development to the team, creating the spec repo now adopted team-wide, alongside a shared LLM knowledge base and Claude skills that automate cross-repo chores.',
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Bally's Interactive",
    roles: [
      {
        title: 'Software Engineer',
        period: 'Sep. 2025 - Aug. 2026',
        highlights: [
          'Developed Java/Spring Boot middleware for a multi-brand sports-betting platform, serving real-time betting data through a GraphQL API backed by MySQL.',
          'Led delivery of the Outrights betting feature two months after joining, owning the technical design and cross-team execution for markets that account for 30% of sportsbook betting activity.',
          "Designed and built a cold-storage service that preserves ~100,000 transaction records a day after upstream deletion - restoring users' full bet history, with engagement on that page up 25% after launch.",
          "Rebuilt the platform's highest-traffic listing endpoint with cursor pagination and a Caffeine cache, cutting average page load from 1.4s to 400ms and MySQL row reads by 90%.",
          'Replaced a third-party caching dependency with a database-backed platform, removing a single point of failure shared by 10 downstream services.',
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'The Hut Group',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Mar. 2023 - Sep. 2025',
        highlights: [
          'Built and maintained the Marketplace Management System in Java/Spring Boot - integrations with Shopify, TikTok, Kaufland and Amazon processing 3,000+ orders a day at a 99.9% order-processing success rate.',
          'Spearheaded the TikTok marketplace adapter, ingesting orders in real time via webhooks and replacing a manual workflow end to end - unlocking TikTok as a sales channel that supported £7M+ in monthly peak revenue.',
          'Designed a Spring Boot REST API for settlement reports with pagination, filtering and batching, cutting processing time by 30% for large-scale report generation.',
          'Kept the platform healthy through Black Friday peaks with Grafana and Kibana monitoring, cutting mean time to resolution by 32%.',
        ],
      },
      {
        title: 'Graduate Software Engineer',
        period: 'Sep. 2022 - Mar. 2023',
        highlights: [
          'Completed a 6-month graduate scheme converting non-CS graduates into software engineers.',
          'Won an internal competition to build the strongest Connect-N AI, implementing Monte Carlo Tree Search in Java.',
        ],
      },
    ],
  },
]
