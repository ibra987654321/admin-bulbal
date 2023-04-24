<template>
    <v-snackbar
      v-model="$store.state.snackbars.snackbar"
      :timeout="$store.state.snackbars.timeout"
    >
      {{ $store.state.snackbars.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="$store.state.snackbars.snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
  name: "TheSnackbars"
}
</script>

<style scoped>

</style>
