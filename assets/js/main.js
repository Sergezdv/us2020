Array.prototype.uniq = function () {
    return [...new Set(this)]
};


$(document).ready(function () {

    // chart_div1
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = $.map(chart_1_data, function (v, k) {
            return [[k, v]]
        });
        var values = [['Name', 'Result']].concat(data);
        var chart_data = google.visualization.arrayToDataTable(values);

        var options = {
            'title': 'Chances of Winning 2020 Election, based on odds from different betting websites',
            is3D: true,
            chartArea: {width: '70%'},
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(chart_data, options);
    }


    // chart_div1history
    //new chart: pres likelihood over time
    google.charts.load('current',
        {
            'packages': ['corechart']
        });
    google.charts.setOnLoadCallback(drawChart1hist);

    function drawChart1hist() {
        var candidates = $.map(chart_1_history_data, function (v) {
            return Object.keys(v)
        }).uniq();

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        candidates.forEach(cand => data.addColumn('number', cand));

        $.each(chart_1_history_data, function (date, vals) {
            var dataRow = [new Date(date)];
            candidates.forEach(cand => dataRow.push(vals[cand]));
            data.addRow(dataRow);
        });

        var options = {
            title: 'Chances of Winning 2020 Election over time',
            chartArea: {left: 25, width: '55%'},
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div1history'));
        chart.draw(data, options);
    }


    // chart_div2
    //end pres likelihood over time
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
        var data = $.map(chart_2_data, function (v, k) {
            return [[k, v]]
        });
        var values = [['Name', 'Result']].concat(data);
        var chart_data = google.visualization.arrayToDataTable(values);

        var options = {
            'title': 'Chances of Being 2020 Democratic Candidate, based on odds from different betting websites',
            is3D: true,
            chartArea: {width: '70%'},
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(chart_data, options);
    }


    //need to add chart_div2history - democratic nominee likelihood over time


    // chart_div2
    google.load("visualization", "1", {
        packages: ["corechart"]
    });
    google.setOnLoadCallback(drawChart3);

    function drawChart3() {
        var data = $.map(chart_3_data, function (v, k) {
            return [[k, v, Math.floor(v) + '%']]
        });
        var values = [['Name', 'Result ' + '%', {role: 'annotation'}]].concat(data);
        var chart_data = google.visualization.arrayToDataTable(values);
        var options = {
            title: 'Likelihood of Winning vs. Republican Candidate',
            vAxis: {minValue: 0},
            chartArea: {width: '70%'},
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart.draw(chart_data, options);
    }


    //need to add chart_div3history - winning vs. republican candidate nominee likelihood over time


    $(window).resize(function () {
        drawChart();
        drawChart2();
        drawChart3();
    });


});