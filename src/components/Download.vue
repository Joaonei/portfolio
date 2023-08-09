<template>
  <footer>
    <div class="
    box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-10 ...
    p-2
    ">
      <div class="sm:flex sm:items-center md:justify-between">
        <a 
        target="_blank"
        href="https://docs.google.com/document/d/1NgfjywscqLWfrNPqVTBVYCtAuAn9oigQ/edit?usp=sharing&ouid=116187039537449865866&rtpof=true&sd=true">
        <font-awesome-icon :icon="['fas', 'file-export']" bounce  size="xl" />
        Currículo</a>
        &copy; {{ new Date().getFullYear() }} João Fagundes
      <a
      target="_blank"
       href="https://wa.me/5565984433655">
        <font-awesome-icon :icon="['fab', 'whatsapp']"  bounce size="xl" /> WhatsApp
      </a>
      </div>
  </div>
</footer>
</template>

<script>
export default{
  name: "Download"
}

</script>

<style lang="scss" scoped>

</style>