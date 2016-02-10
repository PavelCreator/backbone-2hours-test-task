var itemList = new ItemList();
itemList.fetch().then(function(){
  var itemListView = new ItemListView({model: itemList});
  itemListView.render();
  $('#list-body').replaceWith(itemListView.el);
});

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Report View'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Axis Y'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
        },

        series: [{
            name: 'Values',
            colorByPoint: true,
            data: [{
                name: 'Value 1',
                y: 1589
            }, {
                name: 'Value 2',
                y: 2474
            }, {
                name: 'Value 3',
                y: 4758
            }, {
                name: 'Value 4',
                y: 4342
            }, {
                name: 'Value 5',
                y: 1245
            }]
        }]
    });
});