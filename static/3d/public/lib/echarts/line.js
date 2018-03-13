function chartsLine(params) {
	var minAlertVal = (params.minAlertVal == null ? 0 : params.minAlertVal);
	var maxAlertVal = (params.maxAlertVal == null ? 1000 : params.maxAlertVal);
    var option = {
    title: {
        text: params.title || '',
        subtext: params.subTitle || ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: params.legendData || []
    },
    toolbox: {
        show: false,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: params.xAxisData || []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} ' + params.axisLabelFmt
        }
    },
    series: [
        {
            name: params.seriesName || '监测值',
            type: 'line',
            smooth : true,
            data: params.seriesData || [],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值',symbolSize:[80,80]},
                    {type: 'min', name: '最小值',symbolSize:[80,80]}
                ]
            },
            itemStyle:{
                normal:{
                    color:"green"
                }
            }
        },
        
        {
            name: '警戒线上限',
            type: 'line',
            data: [maxAlertVal],
            itemStyle:{
                normal:{
                    color:"#febc2d"
                }
            },
            markLine: {
                data: [
                    {name: '警戒线上限',type: "max"}
                ]
            }
        },
        {
            name: '警戒线下限',
            type: 'line',
            data: [minAlertVal],
            itemStyle:{
                normal:{
                    color:"#febc2d"
                }
            },
            markLine: {
                data: [
                    {name: '警戒线下限',type: "min"}
                ]
            }
        }
    ]
};


    var checkPersonNumChart = echarts.init(document.getElementById(params.elem));
    checkPersonNumChart.setOption(option);
}