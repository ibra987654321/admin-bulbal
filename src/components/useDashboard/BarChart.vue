<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="700"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'BarChart',
  components: {
    apexchart: VueApexCharts,
  },
  props: ['amount', 'name'],
  computed: {
    series() {
      return [{
        data: this.$props.amount,
      }]
    },
    chartOptions() {
      return {
        chart: {
          type: 'bar',
          height: 700,
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            barHeight: '80%',
            distributed: false,
            horizontal: true,
            dataLabels: {
              position: 'bottom',
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'horizontal',
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            colorStops: [
              {
                offset: 20,
                color: '#9155fd',
                opacity: 1,
              },
            ],
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'high',
          position: 'top',
          style: {
            colors: ['#000000'],
            fontSize: '18px',
            fontWeight: 'bold',
          },
          formatter(val, opt) {
            return `${val} | ${opt.w.globals.labels[opt.dataPointIndex]}`
          },
          offsetX: 2,
          dropShadow: {
            enabled: true,
          },
        },
        legend: {
          show: true,
          position: 'bottom',
        },
        stroke: {
          width: 2,
          colors: ['#000'],
        },
        xaxis: {
          categories: this.$props.name,
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          x: {
            show: true,
          },
          y: {
            title: {
              formatter() {
                return ''
              },
            },
          },
        },
      }
    },
  },
}
</script>

<style scoped>

</style>
