 <template>
<div class=" 
min-h-screen
 bg-gradient-to-r from-emerald-200 ...">
    <nav class="flex items-center">
    <ul class="flex-1 text-center 
    bg-emerald-200
    py-3">
      <router-link to="/"><li class=" 
        text-xs lg:text-lg
        list-none inline-block px-2 text-emerald-950"><a href="#" class="px-2 font-extrabold hover:overline"><font-awesome-icon :icon="['fab', 'vuejs']" size="lg" /> Home</a></li></router-link>
      <router-link to="/about"><li class="
        text-xs lg:text-lg
        list-none inline-block px-2 text-emerald-950"><a href="#" class="px-2 font-extrabold	hover:overline"><font-awesome-icon :icon="['fab', 'vuejs']" size="lg"  /> Sobre_Mim</a></li>
      </router-link>
      <router-link to="/projects">
      <li class="
      text-xs lg:text-lg
      list-none inline-block px-2 text-emerald-950">
        <a href="#" class="px-2 font-extrabold	hover:overline"><font-awesome-icon :icon="['fab', 'vuejs']" size="lg"  />
         Projetos_Desenvolvidos</a></li>
        </router-link>
    </ul>
  </nav>
  <router-view/>
</div>
<Download/>


</template>

<script setup>
import Download from "@/components/Download.vue"
</script>

<style>
*{
  box-sizing: border-box;
  
}

</style>