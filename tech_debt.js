var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var option = null;

init();

function init() {
    loadJSON(function (response) {
        var sourceData = JSON.parse(response);
        var seriesData = sourceData.map(function (item) {
            return {
                name: item['name'],
                value: [item['difficulty'], item['importance'], item['description']]
            }
        });
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
                    if (obj.componentType === "series") {
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); ' +
                            'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
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
                }
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    });
}

function loadJSON(callback) {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.overrideMimeType("application/json");
    xmlHttp.open('GET', 'data.json', true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.send(null);
}