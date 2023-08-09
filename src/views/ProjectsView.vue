<template>
<div class="text-center">
    <h2> Projetos </h2>
    <div class="container
    grid grid-cols-1 md:grid-cols-2 
    mx-auto
    space-x-5 space-y-5">
        <div class="">
            <a href="https://api-user-kappa.vercel.app/#/users_view">
            <img class="object-contain h-20 md:h-20 lg:h-1/5 w-30
            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." src="../assets/Project/p1.png" alt="">
            </a>
            <p>Gerenciador de Usuários utilizando a API do JsonPlaceHolder</p>
            <a href="https://github.com/Joaonei/Api_User" target="_blank">
                <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" />Repositório
            </a>
        </div>

        <div>
            <a href="https://joaonei.github.io/table_graphs_fb-ads/">
            <img class="object-contain h-20 md:h-20 lg:h-1/5 w-30
            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..." src="../assets/Project/p2.png" alt="">
            <p>Gráfico integrado ao Graph API onde obtém dados reais de uma conta do Facebook ADS </p>
            
            <a href="https://github.com/Joaonei/table_graphs_fb-ads" target="_blank">
                <font-awesome-icon :icon="['fab', 'square-github']" size="2xl" />Repositório
            </a>
        </a>
        </div>
    </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>

</style>