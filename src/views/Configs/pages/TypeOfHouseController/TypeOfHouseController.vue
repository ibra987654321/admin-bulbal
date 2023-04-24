<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Тип дома"
        :headers="header"
        :edited-items="editedItem"
        :default-item="defaultItem"
        :show-to-edit="showToEdit"
        :endpoints="TYPE_OF_HOUSE"
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
import { TYPE_OF_HOUSE } from '@/helpers/endpionts'

export default {
  name: 'TypeOfHouseController',
  components: {
    useTable
  },
  data:() => ({
    header: [
      { text: '№', value: 'index' },
      { text: 'Тип', value: 'name' },
      { text: 'Действие', value: 'actions' },
    ],
    editedItem: {
      id: 0,
      name: ""
    },
    defaultItem: {
      id: 0,
      name: ""
    },
    showToEdit: [
      { label: 'Тип', value: 'name', col: 6, type: 'input' },
    ],
  }),
  setup() {
    return {TYPE_OF_HOUSE}
  }
}
</script>

<style scoped>

</style>
