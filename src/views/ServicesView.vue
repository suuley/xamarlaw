<script setup>
const services = [
  {
    number: "01",
    title: "Corporate & Commercial",
    description:
      "Day-to-day counsel and structured support for companies, organisations and investors operating in Somalia.",
    items: [
      "Commercial contracts and review",
      "Corporate legal retainers",
      "Regulatory and licensing matters",
      "Negotiation and legal correspondence",
    ],
  },
  {
    number: "02",
    title: "Litigation & Dispute Resolution",
    description:
      "Strategic representation through negotiation, first-instance proceedings, appeals and enforcement-related matters.",
    items: [
      "Civil and commercial disputes",
      "Appellate and Supreme Court matters",
      "Interim and protective applications",
      "Settlement strategy",
    ],
  },
  {
    number: "03",
    title: "Employment & Labour",
    description:
      "Practical advice on workplace compliance, employee relations and disputes under Somalia's labour framework.",
    items: [
      "Employment policies and compliance",
      "Termination and redundancy advice",
      "Labour complaints and appeals",
      "Settlement and employee entitlements",
    ],
  },
  {
    number: "04",
    title: "Property & Conveyancing",
    description:
      "Careful assistance with property interests, transfers, leases and land-related disputes.",
    items: [
      "Sale and purchase documentation",
      "Lease drafting and review",
      "Title and document due diligence",
      "Land and boundary disputes",
    ],
  },
  {
    number: "05",
    title: "Family & Inheritance",
    description:
      "Sensitive, well-prepared counsel in succession and family-property matters where legal and personal concerns intersect.",
    items: [
      "Inheritance proceedings",
      "Estate and heirship disputes",
      "Family property matters",
      "Guardianship-related proceedings",
    ],
  },
  {
    number: "06",
    title: "Intellectual Property",
    description:
      "Support for businesses protecting brand identity and responding to misuse or counterfeit activity.",
    items: [
      "Trademark-related advice",
      "Brand protection strategy",
      "Counterfeit-product matters",
      "Enforcement correspondence",
    ],
  },
];
</script>

<template>
  <main>
    <section class="subpage-hero">
      <div class="page-shell">
        <p class="eyebrow">
          Our services
        </p>

        <h1>
          Legal counsel for consequential matters.
        </h1>

        <p>
          Commercially aware advice, disciplined
          representation and practical direction across a
          focused range of Somali legal matters.
        </p>
      </div>
    </section>

    <section class="services-detail page-shell section-space">
      <div class="services-intro-row">
        <p class="eyebrow eyebrow-dark">
          Practice areas
        </p>

        <p>
          We advise across connected legal issues, allowing
          clients to work with one office that understands
          both the immediate matter and its wider context.
        </p>
      </div>

      <div class="service-detail-list">
        <article
          v-for="service in services"
          :key="service.number"
        >
          <span>{{ service.number }}</span>

          <div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
          </div>

          <ul>
            <li
              v-for="item in service.items"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="cta-section">
      <div class="page-shell cta-inner">
        <div>
          <p class="eyebrow">
            Need a clear next step?
          </p>

          <h2>
            Tell us about the matter in front of you.
          </h2>
        </div>

        <RouterLink
          class="button button-ivory"
          to="/contact"
        >
          Contact the office
        </RouterLink>
      </div>
    </section>
  </main>
</template>