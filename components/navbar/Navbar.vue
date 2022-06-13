<template>
    <section class="container mx-auto mt-2 text-sm lg:text-base font-semibold mt-4 lg:mt-0">
        <div class="justify-center lg:h-24 grid grid-cols-12 items-center m-2 border-b border-grey-500">
            <div class="flex justify-center mb-2 lg:mb-0 lg:justify-start col-span-12 lg:col-span-3 h-11">
                <NuxtImg src="img/navbar/logo.svg" alt="logo-icon"/>
            </div>
            <div class="hidden lg:flex lg:col-span-3 h-11 ">
                <NuxtImg src="img/navbar/search.svg" alt="search-icon" class="w-6"/>
                <input type="text" placeholder="Search store" class="mx-2 outline-none w-full"> 
            </div>
            <div class="col-span-12 lg:col-span-6 flex justify-around items-center lg:mr-3 h-11 md:my-4">
                <NuxtLink to="" class="hover:border-b-2 border-black">Products</NuxtLink>
                <NuxtLink to="" class="hover:border-b-2 border-black">Story</NuxtLink>
                <NuxtLink to="" class="hover:border-b-2 border-black">Manufacturing</NuxtLink>
                <NuxtLink to="" class="hover:border-b-2 border-black">Packaging</NuxtLink>
                <NuxtImg src="img/navbar/basket.svg" alt="basket-icon" class="cursor-pointer"/>
                <NuxtImg src="img/navbar/person.svg" alt="person-icon" class="cursor-pointer"/>
            </div>
        </div>
    </section>
</template>
<script>
</script>
<style lang="">
    
</style>