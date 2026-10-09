// Site content — edit these to update the page.
export const profile = {
  headline: "hi there! I'm William",
  intro: 'software engineer based in London',
  bio: [
    "I'm a software engineer working on the backend of large consumer platforms, currently real-time merchant risk infrastructure at Checkout.com, and before that sports-betting services at Bally's Interactive and the marketplace integrations behind THG brands like LookFantastic and MyProtein.",
    "I got here via a Physics degree at Durham, where my dissertation benchmarked quantum optimisation algorithms in Python. I'm drawn towards interesting problems and understanding the complexities behind them, always eager to learn and just trying to have fun along the way :)",
  ],
  // Tech grouped by stack layer, shown as a manifest in the About section.
  skills: [
    {
      layer: 'languages',
      items: ['Java', 'C#', 'Python', 'SQL', 'TypeScript'],
    },
    { layer: 'frameworks', items: ['Spring Boot', 'GraphQL', 'React'] },
    {
      layer: 'data & messaging',
      items: ['MySQL', 'CockroachDB', 'Kafka', 'Apache Flink', 'ActiveMQ'],
    },
    {
      layer: 'infra & tooling',
      items: [
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'GitLab CI/CD',
        'Datadog',
        'Grafana',
      ],
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/williamcfarlane' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wmc23/' },
    { label: 'Email', href: 'mailto:mcfarlanewilliam23@gmail.com' },
  ],
}
