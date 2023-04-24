<template>
  <v-card>
    <v-card-text>
      <v-select
        v-if="selectForApi"
        v-model.trim="selectForApi.model"
        :items="selectForApi.items"
        class="select"
        hide-details
        outlined
        dense
        @change="selected()"
      >
      </v-select>
    </v-card-text>
    <use-data-table
      :headers="header"
      :data="data"
      :filters="filters"
      :detail-page="'/approve/'"
    >
    </use-data-table>
  </v-card>
</template>

<script>
import useDataTable from '@/components/useDashboard/useDataTable'
export default {
  name: 'Approve',
  components: {
    useDataTable,
  },
  data: () => ({
    header: [
      { text: '№', value: 'index' },
      { text: 'Название', value: 'titleOfAccommodation' },
      { text: 'Район', value: 'localityName' },
      { text: 'Регион', value: 'region' },
      { text: 'Цена', value: 'price' },
      { text: 'Дата создание', value: 'createDate' },
      { text: 'Действие', value: 'detail' },
    ],
    selectForApi: {
      model: 'На рассмотрении',
      modelEquals: 'На рассмотрении',
      items: ['На рассмотрении', 'Опубликовано'],
    },
    filters: {
      date: ['createDate'],
    },
    data: [],
    search: '',
  }),
  mounted() {
    this.listOfData(this.selectForApi.model)
  },
  methods: {
    selected() {
      this.listOfData(this.selectForApi.model)
    },
    listOfData(select) {
      this.$store.dispatch('getMainPageData', select)
        .then(r => this.data = r)
    },
  },
}
</script>

<style scoped>

</style>
