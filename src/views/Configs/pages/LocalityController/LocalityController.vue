<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Преимущества"
        :headers="header"
        :edited-items="editedItem"
        :default-item="defaultItem"
        :show-to-edit="showToEdit"
        :endpoints="LOCALITY"
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
import { LOCALITY } from '@/helpers/endpionts'

export default {
  name: 'LocalityController',
  components: {
    useTable
  },
  data:() => ({
    header: [
      { text: '№', value: 'index' },
      { text: 'Приемущества', value: 'convenienceName' },
      { text: 'Действие', value: 'actions' },
    ],
    editedItem: {
      id: 0,
      convenienceName: ""
    },
    defaultItem: {
      id: 0,
      convenienceName: ""
    },
    showToEdit: [
      { label: 'Приемущества', value: 'convenienceName', col: 6, type: 'input' },
    ],
  }),
  setup() {
    return {LOCALITY}
  }
}
</script>

<style scoped>

</style>
