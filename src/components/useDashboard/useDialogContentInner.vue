<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">{{ $props.title }}</span>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, idx) in $props.editBlock"
            :key="idx"
            cols="12"
            :md="item.col"
          >
            <v-text-field
              v-if="item.type === 'input'"
              v-model="editedItem[item.value]"
              :label="item.label"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-if="item.type === 'input-dynamic' && item.if === $props.title"
              v-model="editedItem[item.value]"
              :label="item.label"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-if="item.type === 'input-number-dynamic' && item.if === $props.title"
              v-model="editedItem[item.value]"
              :label="item.label"
              type="number"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-if="item.type === 'input-number'"
              v-model="editedItem[item.value]"
              :label="item.label"
              type="number"
              outlined
              dense
            ></v-text-field>
            <v-checkbox
              v-if="item.type === 'checkbox'"
              v-model="editedItem[item.value]"
              :label="item.label"
            ></v-checkbox>
            <v-select
              v-if="item.type === 'select'"
              v-model="editedItem[item.value]"
              :label="item.label"
              outlined
              dense
              :items="item.data"
            ></v-select>
            <v-select
              v-if="item.type === 'select-add'"
              v-model="editedItem[item.value]"
              :label="item.label"
              :item-text="item.params.text"
              :item-value="item.params.value"
              outlined
              dense
              :items="item.data"
            ></v-select>
            <v-textarea
              v-if="item.type === 'textarea'"
              outlined
              v-model="editedItem[item.value]"
              :label="item.label"
            ></v-textarea>
            <v-menu
              v-if="item.type === 'date'"
              :key="'menu' + idx"
              v-model="date['menu' + idx]"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              class="mx-auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="editedItem[item.value]"
                  :label="item.label"
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem[item.value]"
                @input="date['menu' + idx] = false"
              ></v-date-picker>
            </v-menu>
            <v-datetime-picker
              v-if="item.type === 'date-time'"
              v-model="editedItem[item.value]"
              :label="item.label"
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
                Время
              </template>
              <template
                slot="actions"
                slot-scope="{ parent }"
              >
                <v-btn
                  color="primary"
                  @click.native="parent.clearHandler"
                  outlined
                >
                  Отмана
                </v-btn>
                <v-btn
                  color="primary darken-1"
                  @click="parent.okHandler"
                >
                  Готово
                </v-btn>
              </template>
            </v-datetime-picker>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="blue darken-1"
        text
        @click="close"
      >
        Отмена
      </v-btn>
      <v-btn
        color="blue darken-1"
        text
        @click="save"
      >
        Сохранить
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    editedItem: Object,
    editBlock: Array,
    addBlock: Object,
    tableData: Object,
    data: Array,
  },
  validations: {
  },
  data: () => ({
    date: {
      menu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
    },
    dateTimeOptions: {
      format: '24hr',
    },
    textFieldProps: {
      outlined: 'outlined',
      dense: 'dense',
    },
  }),
  computed: {
    dateFormat(date) {
      return date.slice(0, 19)
    },
  },
  mounted() {
  },
  methods: {
    save() {
      this.$emit('save', this.$props.editedItem)
    },
    close() {
      this.$emit('close')
    },

  },
}
</script>

<style scoped>

</style>
