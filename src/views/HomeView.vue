<script setup>
const services = [
  {
    number: "01",
    title: "Corporate & Commercial",
    text:
      "Practical counsel for business operations, contracts, regulatory matters and long-term legal support.",
  },
  {
    number: "02",
    title: "Dispute Resolution",
    text:
      "Clear, disciplined representation in civil, commercial and appellate proceedings before Somali courts.",
  },
  {
    number: "03",
    title: "Employment & Labour",
    text:
      "Advice and representation for employers and individuals across workplace disputes and compliance matters.",
  },
  {
    number: "04",
    title: "Property & Conveyancing",
    text:
      "Careful legal support for land, leases, transfers, due diligence and property-related disputes.",
  },
  {
    number: "05",
    title: "Family & Inheritance",
    text:
      "Considered representation in inheritance, family-property and succession matters.",
  },
  {
    number: "06",
    title: "Intellectual Property",
    text:
      "Protection and enforcement support for trademarks, brands and counterfeit-product matters.",
  },
];
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-grid page-shell">
        <div class="hero-copy">
          <p class="eyebrow">
            Somali counsel. International perspective.
          </p>

          <h1>
            Law, handled with clarity and conviction.
          </h1>

          <p class="hero-intro">
            Xamar Law Office provides focused legal advice
            and representation to businesses, institutions
            and individuals in Somalia.
          </p>

          <div class="button-row">
            <RouterLink
              class="button button-gold"
              to="/contact"
            >
              Discuss your matter
            </RouterLink>

            <RouterLink
              class="text-link text-link-light"
              to="/services"
            >
              Explore our services
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>

        <div
          class="hero-mark"
          aria-hidden="true"
        >
          <div class="hero-mark-frame">
            <span class="hero-mark-letter">X</span>
            <span class="hero-mark-line"></span>
            <span class="hero-mark-caption">
              MOGADISHU
            </span>
          </div>
        </div>
      </div>

      <div class="hero-baseline page-shell">
        <span>Commercial insight</span>
        <span>Local understanding</span>
        <span>Resolute advocacy</span>
      </div>
    </section>

    <section class="intro-section page-shell section-space">
      <div>
        <p class="eyebrow eyebrow-dark">
          The firm
        </p>

        <h2 class="section-title">
          Grounded locally.<br />
          Ready for complexity.
        </h2>
      </div>

      <div class="intro-prose">
        <p>
          Legal matters rarely arrive in isolation. They sit
          within commercial, institutional and personal
          realities that demand careful judgment.
        </p>

        <p>
          We combine knowledge of Somalia's legal environment
          with practical, responsive counsel—helping clients
          understand their position, choose a sound path and
          act with confidence.
        </p>

        <RouterLink
          class="text-link"
          to="/about"
        >
          Meet Xamar Law
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <section class="services-section section-space">
      <div class="page-shell">
        <div class="section-heading-row">
          <div>
            <p class="eyebrow eyebrow-dark">
              What we do
            </p>

            <h2 class="section-title">
              Counsel across the matters that move you.
            </h2>
          </div>

          <RouterLink
            class="text-link"
            to="/services"
          >
            View all services
            <span aria-hidden="true">→</span>
          </RouterLink>
        </div>

        <div class="service-grid">
          <article
            v-for="service in services"
            :key="service.number"
            class="service-card"
          >
            <span class="service-number">
              {{ service.number }}
            </span>

            <h3>{{ service.title }}</h3>

            <p>{{ service.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="approach-section page-shell section-space">
      <div class="approach-panel">
        <p class="eyebrow">
          Our approach
        </p>

        <h2>
          Direct advice. Careful preparation.
          Accountable service.
        </h2>
      </div>

      <div class="approach-steps">
        <div>
          <span>01</span>
          <h3>Understand</h3>

          <p>
            We listen closely, review the facts and identify
            what truly matters.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Advise</h3>

          <p>
            We explain the legal position and the practical
            choices in clear terms.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Act</h3>

          <p>
            We move with discipline—whether negotiating,
            documenting or litigating.
          </p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="page-shell cta-inner">
        <div>
          <p class="eyebrow">
            Start a conversation
          </p>

          <h2>
            Let's look at your matter with fresh eyes.
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