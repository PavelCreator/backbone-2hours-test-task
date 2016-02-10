Backbone.history.start({pushState: true});

var itemList = new ItemList();
itemList.fetch().then(function () {
  var itemListView = new ItemListView({model: itemList});
  itemListView.render();
  $('#list-body').replaceWith(itemListView.el);
});

$(document).on("click", "a", function (e) {
  var t = e ? e.target : window.event.srcElement;
  e.preventDefault();
  if (t.tagName === 'A') {
    $("#graph").html('');
    if (t.href.indexOf('chart') + 1) {
      var delBegin = t.href.split('chart/');
      var arr = delBegin[1].split('&');
      buildGraph(arr);
    }else{
      var htmlString = '<table class="table table-striped"><thead><th>Head1</th><th>Head2</th><th>Head3</th><th>Head4</th></thead><tbody>';
      var delBegin = t.href.split('tabular/');
      var arr = delBegin[1].split('&');
      for (var i = 0; i <= arr.length - 1; i++){
        console.log(arr[i]);
      	var rowArr = arr[i].split(',');
        console.log("rowArr = ");console.log(rowArr);
        htmlString += '<tr>';
        console.log(rowArr.length);
        for (var j = 0; j <= rowArr.length - 1; j++){
        	htmlString += '<td>'+rowArr[j]+'</td>';
        }
        htmlString += '</tr>';
      }
      htmlString += '</table>';
      $("#graph").html(htmlString);
    }
  }
});

var buildGraph = function (arr) {
  console.log(arr);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = parseFloat(arr[i]);
  }

  $('#graph').highcharts({
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
        y: arr[0]
      }, {
        name: 'Value 2',
        y: arr[1]
      }, {
        name: 'Value 3',
        y: arr[2]
      }, {
        name: 'Value 4',
        y: arr[3]
      }, {
        name: 'Value 5',
        y: arr[4]
      }]
    }]
  });

}
