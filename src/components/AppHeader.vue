<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderNav class="d-none d-md-flex mx-auto">
        <CNavItem>
          <CNavLink href="/home"> Home </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">About</CNavLink>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
