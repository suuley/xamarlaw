<script setup>
const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
</script>

<template>
  <header class="site-header">
    <div class="page-shell header-inner">
      <RouterLink
        class="brand"
        to="/"
        aria-label="Xamar Law Office home"
      >
        <span
          class="brand-monogram"
          aria-hidden="true"
        >
          X
        </span>

        <span class="brand-name">
          <strong>Xamar Law</strong>
          <small>Office</small>
        </span>
      </RouterLink>

      <nav
        class="desktop-nav"
        aria-label="Primary navigation"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <a
        class="header-email"
        href="mailto:abdikarin@xamarlaw.com"
      >
        abdikarin@xamarlaw.com
      </a>

      <details class="mobile-menu">
        <summary aria-label="Open navigation">
          Menu
        </summary>

        <nav aria-label="Mobile navigation">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </details>
    </div>
  </header>
</template>