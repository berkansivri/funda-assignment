<template>
  <div class="p-4 flex flex-wrap sm:flex-nowrap sm:space-x-4 border-t">
    <router-link
      class="block flex-shrink-0 w-full sm:w-auto"
      :to="'/property/' + property.Id"
    >
      <img
        :src="property.FotoMedium"
        class="flex-none w-full h-full rounded-md object-cover"
      />
    </router-link>
    <div class="flex-auto text-base font-medium mt-2">
      <h2 class="font-semibold mb-0.5 text-blue-700 hover:text-blue-800">
        {{ property.Adres }}
      </h2>
      <p class="my-0.5">
        {{ property.Postcode | postcode }} {{ property.Woonplaats }}
      </p>
      <p class="font-semibold mt-2">
        {{ property.Prijs | price }}
      </p>
      <p class="mt-0.5">
        {{ property.Woonoppervlakte | dimension }} /
        {{ property.Perceeloppervlakte | dimension }} ●
        {{ property.AantalKamers }} rooms
      </p>
      <a class="block mt-3 text-blue-500 hover:text-blue-500" href="#">
        {{ property.MakelaarNaam }}
      </a>
    </div>
    <img
      class="h-6 text-blue-300 cursor-pointer mt-2"
      src="@/assets/icon/heart.svg"
    />
  </div>
</template>

<script>
export default {
  name: 'PropertyCard',
  props: {
    property: Object,
  },
}
</script>
