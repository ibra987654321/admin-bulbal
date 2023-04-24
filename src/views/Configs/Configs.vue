<template>
  <v-row>
    <v-col cols="4">
      <advantage-controller></advantage-controller>
    </v-col>
    <v-col cols="8">
      <notification-controller></notification-controller>
    </v-col>
    <v-col cols="6">
      <type-of-house-controller></type-of-house-controller>
    </v-col>
    <v-col cols="6">
      <type-of-room-controller></type-of-room-controller>
    </v-col>
    <v-col cols="6">
      <type-of-bed-controller></type-of-bed-controller>
    </v-col>
  </v-row>
</template>

<script>
import AdvantageController from '@/views/Configs/pages/AdvantageController/AdvantageController'
import TypeOfHouseController from '@/views/Configs/pages/TypeOfHouseController/TypeOfHouseController'
import TypeOfBedController from '@/views/Configs/pages/TypeOfBedController/TypeOfBedController'
import TypeOfRoomController from '@/views/Configs/pages/TypeOfRoomController/TypeOfRoomController'
import NotificationController from '@/views/Configs/pages/NotificationController/NotificationController'

export default {
  name: 'Configs',
  components: {
    AdvantageController,
    TypeOfHouseController,
    TypeOfBedController,
    TypeOfRoomController,
    NotificationController,
  },
}
</script>

<style scoped>

</style>
