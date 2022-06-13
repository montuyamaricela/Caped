<template>
  <section class="container mx-auto max-w-6xl font-poppins">
    <div>
        <Navbar/>
    </div>
      <div class="flex container mx-auto">
        <Sidebar/>
        <Content/>
      </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>