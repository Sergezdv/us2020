$(document).ready(function () {

	var values = ['Donald Trump', 47.5113122171946, 'Joe Biden', 15.6017830609212, 'Bernie Sanders', 12.6964933494559, 'Kamala Harris', 8.08314087759815, 'Pete Buttigieg', 5.84958217270195, 'Beto O’Rourke', 3.86740331491713, 'Elizabeth Warren', 3.45963756177924, 'Andrew Yang', 3.73001776198934]
	google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Name', 'Result'],
            [values[0], values[1]],
            [values[2], values[3]],
            [values[4], values[5]],
            [values[6], values[7]],
            [values[8], values[9]],
            [values[10], values[11]],
            [values[12], values[13]],
            [values[14], values[15]]
        ]);

        var options = {
            'title': 'Chances of Winning 2020 Election, based on odds from different betting websites',
            is3D: true,

        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
    }
    //new chart: pres likelihood over time
    google.charts.load('current', 
        {'packages':['line']
    });
    google.charts.setOnLoadCallback(drawChart1hist);

  function drawChart1hist() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date'); 
    data.addColumn('number', 'Donald Trump');
    data.addColumn('number', 'Joe Biden');
    data.addColumn('number', 'Bernie Sanders');
    data.addColumn('number', 'Kamala Harris');
    data.addColumn('number', 'Pete Buttigieg');
    data.addColumn('number', 'Beto O’Rourke');
    data.addColumn('number', 'Elizabeth Warren');
    data.addColumn('number', 'Andrew Yang');

    data.addRows([
        [new Date(2019, 4, 1),  47.7272727272727, 15.1079136690647, 13.0111524163569, 7.33752620545074, 5.87576944599888, 3.67775831873905, 3.62694300518135, 3.65217391304348],
        [new Date(2019, 4, 2),  47.7272727272727, 15.1079136690647, 13.1414267834793, 7.33752620545074, 5.87576944599888, 3.67775831873905, 3.62694300518135, 3.65217391304348],
        [new Date(2019, 4, 3),  47.5113122171946, 14.8514851485149, 12.6353790613718, 7.42049469964664, 5.87576944599888, 3.86740331491713, 3.62694300518135, 3.7037037037037],
        [new Date(2019, 4, 4),  47.5113122171946, 15.6017830609212, 12.6964933494559, 8.08314087759815, 5.84958217270195, 3.86740331491713, 3.45963756177924, 3.73001776198934],
    ]);

    var options = {
      chart: {
        title: 'Chances of Winning 2020 Election over time',
      },
    };

    var chart = new google.charts.Line(document.getElementById('chart_div1history'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }
    //end pres likelihood over time
    
    google.load("visualization", "1", {
        packages: ["corechart"]
    });


    var values2 = ['Joe Biden', 27.1317829457364, 'Bernie Sanders', 22.1052631578947, 'Kamala Harris', 15.1079136690647, 'Pete Buttigieg', 11.7056856187291, 'Beto O’Rourke', 6.45359557467732, 'Andrew Yang', 5.21091811414392, 'Elizabeth Warren', 5.99657338663621]
	google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
        var data2 = google.visualization.arrayToDataTable([
            ['Name', 'Result'],
            [values2[0], values2[1]],
            [values2[2], values2[3]],
            [values2[4], values2[5]],
            [values2[6], values2[7]],
            [values2[8], values2[9]],
            [values2[10], values2[11]],
            [values2[12], values2[13]],
            [values2[14], values2[15]]
        ]);

        var options2 = {
            'title': 'Chances of Being 2020 Democratic Candidate, based on odds from different betting websites',
            is3D: true,

        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(data2, options2);
    }
        //dem nom likelihood over time
        google.charts.load('current', 
        {'packages':['line']
    });
    google.charts.setOnLoadCallback(drawChart2hist);

  function drawChart2hist() {

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date'); 
    data.addColumn('number', 'Joe Biden');
    data.addColumn('number', 'Bernie Sanders');
    data.addColumn('number', 'Kamala Harris');
    data.addColumn('number', 'Pete Buttigieg');
    data.addColumn('number', 'Beto O’Rourke');
    data.addColumn('number', 'Elizabeth Warren');
    data.addColumn('number', 'Andrew Yang');

    data.addRows([
        [new Date(2019, 4, 1),  15.1079136690647, 13.0111524163569, 7.33752620545074, 5.87576944599888, 3.67775831873905, 3.62694300518135, 3.65217391304348],
        [new Date(2019, 4, 2),  15.1079136690647, 13.1414267834793, 7.33752620545074, 5.87576944599888, 3.67775831873905, 3.62694300518135, 3.65217391304348],
        [new Date(2019, 4, 3),  14.8514851485149, 12.6353790613718, 7.42049469964664, 5.87576944599888, 3.86740331491713, 3.62694300518135, 3.7037037037037],
        [new Date(2019, 4, 4),  15.6017830609212, 12.6964933494559, 8.08314087759815, 5.84958217270195, 3.86740331491713, 3.45963756177924, 3.73001776198934],
    ]);

    var options = {
      chart: {
        title: 'Chances of Being the 2020 Democratic nominee over time',
      },
    };

    var chart = new google.charts.Line(document.getElementById('chart_div2history'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }
    //end dem nom likelihood over time

    var values3 = ['Elizabeth Warren', 66.3920922570017, 'Andrew Yang', 62.202486678508, 'Beto O’Rourke', 59.926335174954, 'Joe Biden', 57.5037147102526, 'Bernie Sanders', 57.4365175332527, 'Kamala Harris', 53.5026943802925, 'Pete Buttigieg', 49.9721448467967]
    google.load("visualization", "1", {
        packages: ["corechart"]
    });
    google.setOnLoadCallback(drawChart3);

    function drawChart3() {
        var data3 = google.visualization.arrayToDataTable([
            ['Name', 'Result ' + '%'],
            [values3[0], values3[1]],
            [values3[2], values3[3]],
            [values3[4], values3[5]],
            [values3[6], values3[7]],
            [values3[8], values3[9]],
            [values3[10], values3[11]],
            [values3[12], values3[13]],
            [values3[14], values2[15]]
        ]);

        var options3 = {
            title: 'Likelihood of Winning vs. Republican Candidate',
            vAxis: {
                minValue: 0
            },
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart.draw(data3, options3);
    }

    $(window).resize(function () {
        drawChart();
        drawChart2();
        drawChart3();
    });



});