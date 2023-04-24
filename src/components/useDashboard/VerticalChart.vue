<template>
  <vue-apex-charts
    :options="chartOptions"
    :series="series"
    type="bar"
    height="200"
  ></vue-apex-charts>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'VerticalChart',
  components: {
    VueApexCharts,
  },
  props: ['data', 'value'],
  computed: {
    series() {
      return [
        {
          name: 'Inflation',
          data: this.$props.data,
        },
      ]
    },
    chartOptions() {
      return {
        chart: {
          height: 320,
          type: 'bar',
        },
        colors: this.$vuetify.theme.currentTheme.primary,
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              fontSize: '12px',
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: '16px',
            colors: ['#5986ab'],
          },
        },

        xaxis: {
          categories: this.$props.value,
          position: 'top',
          axisBorder: {
            show: false,
          },
          labels: {
            show: true,
            style: {
              fontSize: '15px',
            },
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        grid: {
          strokeDashArray: 12,
          padding: {
            right: 0,
          },
        },
      }
    },
  },
}
</script>

<style scoped>

</style>
