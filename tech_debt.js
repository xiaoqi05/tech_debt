var sourceData = [{
    name: 'sonar',
    difficulty: 14.56,
    description: '描述信息',
    importance: 64.5
}, {
    name: '王小明',
    difficulty: 47.14,
    description: '描述信息',
    importance: 76.2
}, {
    name: '王小乐',
    difficulty: 42.1,
    description: '描述信息',
    importance: 34.8
}, {
    name: '王小波',
    difficulty: 63.2,
    description: '描述信息',
    importance: 97.4
}, {
    name: '王小龙',
    difficulty: 97.3,
    description: '描述信息',
    importance: 67.5
}, {
    name: '王小宇',
    difficulty: 78.1,
    description: '描述信息',
    importance: 37.7
}, {
    name: '王小禾',
    difficulty: 41.1,
    description: '描述信息',
    importance: 12.8
}]

var seriesData = sourceData.map(function (item, index, array) {
    return {
        name: item['name'],
        value: [item['difficulty'], item['importance'], item['description']]
    }
})

option = {
    title: {
        text: '技术债',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            },
        },
        formatter: function (obj) {
            if (obj.componentType == "series") {
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                    obj.name +
                    '</div>' +
                    '</span>' + obj.data.value[2]
            }
        }
    },
    label: {
        normal: {
            show: true,
            fontSize: 10,
            color: '#111111',
            symbolSize: [60, 22],
            position: 'inside',
            formatter: function (params) {
                return params.name
            }
        }
    },
    itemStyle: {

        normal: {
            color: '#fff',
            borderColor: '#333333'

        }
    },

    xAxis: {
        name: 'DIFFICULTY',
        type: 'value',
        nameLocation: 'middle',
        scale: true,
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15,
            fontStyle: 'italic'
        },
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            show: false
        },
        interval: 100,
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        },
        axisTick: {
            show: false,
            interval: 100
        },

    },
    yAxis: {
        name: 'IMPORTANCE',
        type: 'value',
        scale: true,
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15,
            fontStyle: 'italic'
        },
        nameLocation: 'middle',
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            show: false
        },
        interval: 100,
        axisLine: {
            lineStyle: {
                color: '#3259B8'
            }
        },
        axisTick: {
            show: false,
            interval: 100
        }
    },
    toolbox: {
        feature: {
            dataZoom: {}
        }
    },

    series: [{
        type: 'scatter',
        data: seriesData,
        symbol: 'rect',
        symbolSize: [60, 25],
        markLine: {
            lineStyle: {
                normal: {
                    color: "#626c91",
                    type: 'solid',
                    width: 1,
                }

            },
            data: [{
                xAxis: 50,
                itemStyle: {
                    normal: {
                        color: "transparent",
                    }
                }
            }, {
                yAxis: 50,
                itemStyle: {
                    normal: {
                        color: "transparent",
                    }
                }
            }]
        },
        // markArea: {
        //     silent: true,
        //     data: [
        //         [{
        //             name: '改进',
        //             itemStyle: {
        //                 normal: {
        //                     color:'transparent'
        //                 },
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideTopLeft',
        //                     backgroundColor:'transparent',
        //                     fontStyle: 'normal',
        //                     color: "#409EFF",
        //                     fontSize: 20,
        //                 }
        //             },
        //             coord: [400, 50],
        //         }, {
        //             coord: [401, 49],
        //         }],
        //         [{
        //             name: '淘汰',
        //             itemStyle: {
        //                 normal: {
        //                     color: 'transparent',
        //                 },
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideTopRight',
        //                     backgroundColor:'transparent',
        //                     fontStyle: 'normal',
        //                     color: "#409EFF",
        //                     fontSize: 20,
        //                 }
        //             },
        //             coord: [0, 0],
        //         }, {
        //             coord: [avg.difficultyAvgLine, avg.importanceAvgLine],
        //         }],
        //         [{
        //             name: '保持',
        //             itemStyle: {
        //                 normal: {
        //                     color: 'transparent',
        //                 },
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideBottomLeft',
        //                     backgroundColor:'transparent',
        //                     fontStyle: 'normal',
        //                     color: "#409EFF",
        //                     fontSize: 20,
        //                 }
        //             },
        //             coord: [401, 51],
        //         }, {
        //             coord: [Number.MAX_VALUE, Number.MAX_VALUE],
        //         }],
        //         [{
        //             name: '激励',
        //             itemStyle: {
        //                 normal: {
        //                     color: 'transparent',
        //                 },
        //             },
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     position: 'insideBottomRight',
        //                     backgroundColor:'transparent',
        //                     fontStyle: 'normal',
        //                     color: "#409EFF",
        //                     fontSize: 20,
        //                 }
        //             },
        //             coord: [0, Number.MAX_VALUE],
        //         }, {
        //             coord: [avg.difficultyAvgLine, avg.importanceAvgLine],
        //         }],
        //     ]
        // }
    }]
};