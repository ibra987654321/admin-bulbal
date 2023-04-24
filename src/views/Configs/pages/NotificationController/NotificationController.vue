<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Уведомления"
        :headers="header"
        :edited-items="editedItem"
        :default-item="defaultItem"
        :show-to-edit="showToEdit"
        :endpoints="NOTIFICATION"
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
import { NOTIFICATION } from '@/helpers/endpionts'

export default {
  name: 'NotificationController',
  components: {
    useTable
  },
  data:() => ({
    header: [
      { text: '№', value: 'index' },
      { text: 'Name', value: 'name' },
      { text: 'Заголовок', value: 'title' },
      { text: 'Сам текст', value: 'text' },
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
      { label: 'Name', value: 'name', col: 12, type: 'input' },
      { label: 'Заголовок', value: 'title', col: 12, type: 'input' },
      { label: 'Сам текст', value: 'text', col: 12, type: 'input' },
    ],
  }),
  setup() {
    return {NOTIFICATION}
  }
}
</script>

<style scoped>

</style>
