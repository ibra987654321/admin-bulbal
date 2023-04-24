<template>
  <v-card>
    <v-card-text>
      <use-table
        title="Регионы"
        :headers="region.headers"
        :edited-items="region.editedItem"
        :default-item="region.defaultItem"
        :show-to-edit="region.showToEdit"
        :child-table="region.paramInData"
        :get-dispatch="'getRegion'"
        :post-dispatch="'postRegion'"
        :put-dispatch="'putRegion'"
        :delete-dispatch="'deleteRegion'"
      ></use-table>
    </v-card-text>
  </v-card>
</template>

<script>
import useTable from '@/components/useDashboard/useTable'

export default {
  name: 'RegionController',
  components: {
    useTable,
  },
  data:() => ({
    region: {
      headers: [
        {
          text: 'Название',
          value: 'name'
        },
        {
          text: 'Действия ',
          value: 'actions'
        },
      ],
      editedItem: {
        name: '',
      },
      showToEdit: [
        {
          value: 'name',
          label: 'Название',
          type: 'input',
          col: 12
        },
      ],
      paramInData: {
        nameObject: 'localities',
        title: 'Локация',
        headers: [
          {
            text: 'Название',
            value: 'name'
          },
          {
            text: 'Действия ',
            value: 'actions'
          },
        ],
        editedItem: {
          name: '',
        },
        defaultItem: {
          name: '',
        },
        showToEdit: [
          {
            value: 'name',
            label: 'Название',
            type: 'input',
            col: 12
          },
        ],
        actions: {
          getDispatch: 'getLocality',
          putDispatch: 'putLocality',
          deleteDispatch: 'deleteLocality',
          postDispatch: 'postLocality',
        }
      },
    },
  }),
}
</script>

<style scoped>

</style>
