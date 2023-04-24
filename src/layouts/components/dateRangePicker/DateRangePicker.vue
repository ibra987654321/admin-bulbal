<template>
  <div class="date_range justify-lg-space-around">
    <v-datetime-picker
      class="date mr-2"
      v-model="$store.state.start"
      label="Начальная дата"
      date-format="dd-MM-yyyy"
      time-format="HH:mm:ss"
      :dialog-width="Number(400)"
      :time-picker-props="dateTimeOptions"
      :text-field-props="textFieldProps"
    >
      <template slot="dateIcon">
        Дата
      </template>
      <template slot="timeIcon">
        Вермя
      </template>
      <template
        slot="actions"
        slot-scope="{ parent }"
      >
        <v-btn
          color="error lighten-1"
          @click.native="parent.clearHandler"
        >
          Отмена
        </v-btn>
        <v-btn
          color="success darken-1"
          @click="parent.okHandler"
        >
          Готово
        </v-btn>
      </template>
    </v-datetime-picker>
    <v-datetime-picker
      class="date"
      v-model="$store.state.end"
      label="Конечная дата"
      date-format="dd-MM-yyyy"
      time-format="HH:mm:ss"
      :dialog-width="Number(400)"
      :time-picker-props="dateTimeOptions"
      :text-field-props="textFieldProps"
    >
      <template slot="dateIcon">
        Дата
      </template>
      <template slot="timeIcon">
        Вермя
      </template>
      <template
        slot="actions"
        slot-scope="{ parent }"
      >
        <v-btn
          color="error lighten-1"
          @click.native="parent.clearHandler"
        >
          Отмена
        </v-btn>
        <v-btn
          color="success darken-1"
          @click="parent.okHandler"
        >
          Готово
        </v-btn>
      </template>
    </v-datetime-picker>
  </div>
</template>

<script>
export default {
  name: 'DateRangePicker',
  data: () => ({
    dateTimeOptions: {
      format: '24hr',
    },
    textFieldProps: {
      outlined: 'outlined',
      dense: 'dense',
    },
  }),
  created() {
    // eslint-disable-next-line no-unused-expressions
    this.$store.getters.createdDate
  },
}
</script>

<style scoped>
div {
  display: flex;
}

.v-toolbar .v-input {
  width: 400px;
}
/*.date {*/
/*  width: 100%;*/
/*  max-width: 300px;*/
/*}*/
</style>
