<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Преимущества"
        :headers="header"
        :edited-items="editedItem"
        :default-item="defaultItem"
        :show-to-edit="showToEdit"
        :get-dispatch="'getAdvantage'"
        :post-dispatch="'postAdvantage'"
        :put-dispatch="'putAdvantage'"
        :delete-dispatch="'deleteAdvantage'"
      ></use-table>
    </v-card-text>
  </v-card>
</template>

<script>
import useTable from '@/components/useDashboard/useTable'
import { ADVANTAGE } from '@/helpers/endpionts'

export default {
  name: 'AdvantageController',
  components: {
    useTable,
  },
  data: () => ({
    header: [
      {
        text: '№',
        value: 'index',
      },
      {
        text: 'Приемущества',
        value: 'name',
      },
      {
        text: 'Иконки',
        value: 'icon',
      },
      {
        text: 'Действие',
        value: 'actions',
      },
    ],
    editedItem: {
      id: 0,
      name: '',
      formData: '',
    },
    defaultItem: {
      id: 0,
      name: '',
      formData: '',
    },
    showToEdit: [
      {
        label: 'Приемущества',
        value: 'name',
        col: 6,
        type: 'input',
      },
      {
        label: 'Иконка',
        value: 'formData',
        col: 6,
        type: 'input-file',
      },
    ],
  }),
  setup() {
    return { ADVANTAGE }
  },
}
</script>

<style scoped>

</style>
