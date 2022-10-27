import { SuperchartChartjsController, parseContentsAsJSON, Chartjs } from '@supercharts/stimulus-base'
import * as d3 from "d3"
import annotationPlugin from 'chartjs-plugin-annotation';

Chartjs.register(annotationPlugin);

export default class extends SuperchartChartjsController {
  static targets = [ "chartjsOptions", "chartjsData", "chartjsCanvas", "csvData" ]
  static values = {
    type: { 
      type: String,
      default: "line"
    },
    showAlternateScenario: {
      type: Boolean,
      default: false
    }
  }
  
  static defaultCssProperties = {
    '--animation-duration': 1200, // milliseconds
    '--axis-color': '#999',
    '--grid-color': '#eee',
    '--line-color': '#aaa',
    '--point-color': '#fff',
    '--point-stroke-color': 'transparent',
    '--point-radius': 4,
    '--point-border-width': 0,
    '--warning-line-color': 'red',
    '--today-line-color': 'red',
    '--dead-line-color': 'red',
    '--use-tight-layout': 'false',
  }
  
  connect() {
    this.runAnimations = false
    super.connect()
  }
  
  updateChart() {
    super.updateChart()
  }
  
  parseCsvData() {
    this.csvData = d3.csvParse(this.csvDataTarget.innerHTML.trim(), d3.autoType)
    this.indexFirstPointAlternateScenario = this.csvData.map(d => d[this.csvData.columns[2]]).findIndex(v => v !== null)
  }
  
  get chartjsData() {
    if (this.hasChartJsDataTarget) {
      return super.chartjsData()
    }
    if (!this.hasCsvDataTarget) {
      console.warn(`The chart needs data in a in a csv target or in a chartjsData target (in chart.js JSON)`)
      return []
    }
    
    this.parseCsvData()
    
    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined
    
    let datasets = [
      {
        type: this.typeValue,
        label: "Value",
        data: this.csvData.map(d => d[this.csvData.columns[1]]),
        segment: {
          borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)'),
          borderDash: ctx => skipped(ctx, [6, 6]),
        },
        z: 1,
      }
    ]
    
    if (this.showAlternateScenarioValue) {
      datasets.push({
        type: this.typeValue,
        label: "Value",
        display: this.showAlternateScenarioValue,
        data: this.csvData.map(d => d[this.csvData.columns[2]]),
        segment: {
          borderColor: '#fff',
        },
        z: 2,
      })
    }
    
    return {
      labels: this.csvData.map(d => d[this.csvData.columns[0]]),
      datasets: datasets
    }
  }
  
  get chartjsOptions() {
    let options = {
      ...this.defaultOptions
    }
    
    if (this.hasChartjsOptionsTarget) {
      options = {
        ...options,
        ...parseContentsAsJSON(this.chartjsOptionsTarget)
      }
    }
    
    return this.parseForCssVars(options)
  }
  
  get animationOptions() {
    if (this.runAnimations === false) { return false }
    
    return {
      x: {
        type: 'number',
        easing: 'linear',
        duration: this.delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay: (ctx) => {
          if (ctx.datasetIndex === 0 || ctx.type !== 'data' || ctx.xStarted || ctx.index < this.indexFirstPointAlternateScenario) {
            return 0;
          }
          
          ctx.xStarted = true;
          
          return (ctx.index - 15) * this.delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: this.delayBetweenPoints,
        from: NaN,
        delay: (ctx) => {
          if (ctx.datasetIndex === 0 || ctx.type !== 'data' || ctx.yStarted || ctx.index < this.indexFirstPointAlternateScenario) {
            return 0;
          }
          
          ctx.yStarted = true;
          
          return (ctx.index - 15) * this.delayBetweenPoints;
        }
      }
    }
  }

  // You can set default options in this getter for all your charts.
  get defaultOptions() {
    const axisColor = this.cssPropertyValue('--axis-color')
    const font = {
      family: "'Recursive', sans-serif",
      size: 12
    }
    
    const rotationDateLines = this.cssPropertyValue('--use-tight-layout') === 'true'? 270: 0
    
    return {
      maintainAspectRatio: false,
      animation: this.animationOptions,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      resizeDelay: 200, // milliseconds
      onResize: this.handleResize.bind(this),
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
          position: 'nearest'
        },
        autocolors: false,
        annotation: {
          annotations: {
            warningLine: {
              drawTime: 'beforeDatasetsDraw',
              type: 'line',
              yMin: 60,
              yMax: 60,
              borderColor: this.cssPropertyValue('--warning-line-color'),
              borderWidth: 2,
              borderDash: [6, 6],
              z: 0,
            },
            todayLine: {
              drawTime: 'beforeDatasetsDraw',
              type: 'line',
              borderColor: this.cssPropertyValue('--today-line-color'),
              borderWidth: 1,
              label: {
                backgroundColor: 'transparent',
                color: this.cssPropertyValue('--label-text-color'),
                content: 'today',
                rotation: rotationDateLines,
                display: true,
                font: font,
                position: 'end',
                xAdjust: -23,
              },
              scaleID: 'x',
              value: 15
            },
            deadLine: {
              drawTime: 'beforeDatasetsDraw',
              type: 'line',
              borderColor: this.cssPropertyValue('--dead-line-color'),
              borderWidth: 8,
              label: {
                backgroundColor: 'transparent',
                color: this.cssPropertyValue('--label-text-color'),
                content: 'deadline',
                rotation: rotationDateLines,
                display: true,
                font: font,
                position: 'end',
              },
              scaleID: 'x',
              value: 19
            },
            pressureLabel: {
              drawTime: 'beforeDatasetsDraw',
              type: 'label',
              xValue: 0,
              xAdjust: 8,
              yValue: 60,
              yAdjust: -40,
              rotation: 270,
              content: ['TOO MANY'],
              textAlign: 'left',
              font: font,
              color: this.cssPropertyValue('--label-text-color'),
            }
          }
        }
      },
      color: axisColor,
      fill: false,
      lineTension: 0,
      borderColor: this.cssPropertyValue('--line-color'),
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      pointBorderColor: this.cssPropertyValue('--point-stroke-color'),
      pointBackgroundColor: this.cssPropertyValue('--point-color'),
      pointRadius: Number(this.cssPropertyValue('--point-radius')),
      backgroundColor: this.cssPropertyValue('--bar-fill-color'),
      hoverBackgroundColor: this.cssPropertyValue('--bar-hover-fill-color'),
      spanGaps: true,
      scales: {
        x: {
          grid: {
            display: false,
            borderColor: 'transparent'
          },
          ticks: {
            display: false
          },
          borderColor: 'red',
        },
        y: {
          grid: {
            display: false,
            borderColor: 'transparent'
          },
          ticks: {
            display: false
          },
          min: 0,
          max: 100
        }
      }
    }
  }
  
  get delayBetweenPoints() {
    return this.cssPropertyValue('--animation-duration') / this.chartjsData?.datasets[0]?.data?.length
  }
  
  showAlternateScenarioValueChanged() {
    this.runAnimations = true
    this.updateChart()
    this.runAnimations = false
  }
  
  toggleAlternateScenario(event) {
    if (event?.detail?.toggle === undefined) {
      return
    }
    
    this.showAlternateScenarioValue = event.detail.toggle
  }
}

function previousY (ctx) {
  return ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
}