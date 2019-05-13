Array.prototype.uniq = function () {
    return [...new Set(this)]
};


$(document).ready(function () {

    google.charts.load('current', {
        'packages': ['corechart']
    });


    // chart_div1
    // chart_div2
    const drawPieChart = (id, title) => (() => {
        var chart_data0 = eval(`chart_${id}_data`);
        var chart_data = $.map(chart_data0, (v, k) => ([[k, v]]));
        var values = [['Name', 'Result']].concat(chart_data);
        var data = google.visualization.arrayToDataTable(values);

        var options = {
            title,
            is3D: true,
            chartArea: {left: 25, width: '70%'},
        };

        var chart = new google.visualization.PieChart(document.getElementById(`chart_div${id}`));
        chart.draw(data, options);
    });


    // chart_div3
    const drawChart3 = () => {
        var chart_data = $.map(chart_3_data, (v, k) => ([[k, v, Math.floor(v) + '%']]));
        var values = [['Name', 'Result ' + '%', {role: 'annotation'}]].concat(chart_data);
        var data = google.visualization.arrayToDataTable(values);
        var options = {
            title: 'Likelihood of Winning vs. Republican Candidate',
            vAxis: {minValue: 0},
            chartArea: {left: 25, width: '70%'},
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart.draw(data, options);
    };


    // chart_div1history
    // chart_div2history
    // chart_div3history
    // need to add chart_div2history - democratic nominee likelihood over time
    // need to add chart_div3history - winning vs. republican candidate nominee likelihood over time
    const drawChartHist = (id, title) => (() => {
        var chart_history_data = eval(`chart_${id}_history_data`);
        var candidates = $.map(chart_history_data, v => (Object.keys(v))).uniq();

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        candidates.forEach(cand => data.addColumn('number', cand));

        $.each(chart_history_data, (date, vals) => {
            var dataRow = [new Date(date)];
            candidates.forEach(cand => dataRow.push(vals[cand]));
            data.addRow(dataRow);
        });

        var options = {
            title,
            chartArea: {left: 25, width: '55%'},
        };

        var chart = new google.visualization.LineChart(document.getElementById(`chart_div${id}history`));
        chart.draw(data, options);
    });

    function buildCharts() {
        google.setOnLoadCallback(drawPieChart(1, 'Chances of Winning 2020 Election, based on odds from different betting websites'));
        google.setOnLoadCallback(drawPieChart(2, 'Chances of Being 2020 Democratic Candidate, based on odds from different betting websites'));
        google.setOnLoadCallback(drawChart3);
        google.setOnLoadCallback(drawChartHist(1, 'Chances of Winning 2020 Election over time'));
        google.setOnLoadCallback(drawChartHist(2, 'Democratic nominee likelihood over time'));
        google.setOnLoadCallback(drawChartHist(3, 'Winning vs. republican candidate nominee likelihood over time'));
    }

    buildCharts();

    $(window).resize(buildCharts);


});