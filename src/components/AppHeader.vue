<template>
  <CHeader position="sticky" class="mb-4 brasenose-font">
    <CContainer>
      <a class="header-brand" href="#">
        <img :src="Logo" alt="Brase College, Oxford" class="d-inline-block" />
      </a>
      <CHeaderNav class="d-none d-md-flex mx-auto">
        <CNavItem>
          <CNavLink href="/"> Home </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#/about">About</CNavLink>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>

<script>
import Logo from '@/assets/brand/brasenose-college.gif'

export default {
  name: 'AppHeader',

  setup() {
    return {
      Logo,
    }
  },
}
</script>
