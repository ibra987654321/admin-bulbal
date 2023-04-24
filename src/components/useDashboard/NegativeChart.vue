<template>
  <div v-if="renderComponent" id="chart">
    <apexchart
      type="area"
      height="500"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'NegativeChart',
  components: {
    apexchart: VueApexCharts,
  },
  props: ['labels', 'data'],
  data() {
    return {
      renderComponent: true,
    }
  },
  computed: {
    series() {
      return this.$props.data
    },
    chartOptions() {
      return {
        chart: {
          width: '100%',
          height: 500,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: this.$props.labels,
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      }
    },
  },
  watch: {
    labels() {
      this.forceRerender()
    }
  },
  methods: {
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent = false;

      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    }
  }
}
</script>

<style scoped>

</style>
