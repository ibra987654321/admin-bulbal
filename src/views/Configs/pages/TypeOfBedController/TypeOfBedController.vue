<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Тип кровати"
        :headers="header"
        :edited-items="editedItem"
        :default-item="defaultItem"
        :show-to-edit="showToEdit"
        :endpoints="TYPE_OF_BED"
        :get-dispatch="'getConfigData'"
        :post-dispatch="'postConfigData'"
        :put-dispatch="'putConfigData'"
        :delete-dispatch="'deleteConfigData'"
      ></use-table>
    </v-card-text>
  </v-card>
</template>

<script>
import useTable from '@/components/useDashboard/useTable'
import { TYPE_OF_BED } from '@/helpers/endpionts'

export default {
  name: 'TypeOfBedController',
  components: {
    useTable
  },
  data:() => ({
    header: [
      { text: '№', value: 'index' },
      { text: 'Тип', value: 'name' },
      { text: 'Вмещаемость', value: 'size' },
      { text: 'Действие', value: 'actions' },
    ],
    editedItem: {
      id: 0,
      name: "",
      size: 0
    },
    defaultItem: {
      id: 0,
      name: "",
      size: 0,
    },
    showToEdit: [
      { label: 'Тип', value: 'name', col: 6, type: 'input' },
      { label: 'Вмещаемость', value: 'size', col: 6, type: 'input' },
    ],
  }),
  setup() {
    return {TYPE_OF_BED}
  }
}
</script>

<style scoped>

</style>
