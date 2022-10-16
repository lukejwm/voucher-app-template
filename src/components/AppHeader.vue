<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderBrand class="mx-auto d-lg-none">
        <CIcon :icon="logo" height="48" alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav class="d-none d-md-flex mx-auto">
        <CNavItem>
          <CNavLink href="/dashboard"> Home </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">About</CNavLink>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>

<script>
import { logo } from '@/assets/brand/logo'
export default {
  name: 'AppHeader',
  setup() {
    return {
      logo,
    }
  },
}
</script>
