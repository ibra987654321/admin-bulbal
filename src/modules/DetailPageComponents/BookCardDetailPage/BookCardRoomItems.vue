<template>
  <v-card
      class="mx-auto"
      max-width="300"
      tile
  >
    <v-list>
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
        >
          <v-list-item-icon>
            <v-img :src="item.icon"/>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "BookCardRoomItems",
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Койка-место', icon: require('./icons/bag.png') },
      { text: 'Комната', icon: require('./icons/room.png') },
      { text: 'Дом', icon: require('./icons/home.png') },
    ],
  }),
}
</script>

<style scoped>

</style>
