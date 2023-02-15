<template>
  <CFooter class="brasenose-font">
    <div>
      <a href="https://www.bnc.ox.ac.uk/" target="_blank" rel="noopen"
        >Brasenose College, Oxford</a
      >
      <span class="ms-1"
        >&copy; {{ new Date().getFullYear() }} Developed by
        <a href="https://alliedoffsets.com/" target="_blank" rel="nopoen"
          >AlliedOffsets.</a
        ></span
      >
    </div>
    <div class="mx-auto">
      <a href="/">Home</a> | <a href="#/about">About</a> |
      <a href="#/terms">Terms</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
