<script setup>
const year = new Date().getFullYear();

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
  <footer class="site-footer">
    <div class="page-shell footer-main">
      <div>
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

        <p class="footer-description">
          Focused legal advice and representation for
          businesses, institutions and individuals in Somalia.
        </p>
      </div>

      <div class="footer-column">
        <h2>Navigate</h2>

        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="footer-column">
        <h2>Contact</h2>

        <p>
          Via Roma<br />
          Mogadishu, Somalia
        </p>

        <a href="mailto:abdikarin@xamarlaw.com">
          abdikarin@xamarlaw.com
        </a>
      </div>
    </div>

    <div class="page-shell footer-base">
      <span>
        © {{ year }} Xamar Law Office
      </span>

      <span>
        Legal insight. Practical direction.
      </span>
    </div>
  </footer>
</template>