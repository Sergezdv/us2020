Array.prototype.uniq = function () {
    return [...new Set(this)]
};


$(document).ready(function () {

    google.charts.load('current', {
        'packages': ['corechart']
    });

    let firstChart;
    const cand_colors = {};
    const get_cand_colors = () => {
        firstChart.ba.ia.F.forEach(p => {
            cand_colors[p.title] = {color: p.color.color, darker: p.color.wb}
        });
    };

    const titleTextStyle = { fontName: '', fontSize: 16, color: '#404040', italic: true, bold: false };

    // chart_div1
    // chart_div2
    const drawPieChart = (id, title, cb) => (() => {
        var chart_data0 = eval(`chart_${id}_data`);
        var chart_data = $.map(chart_data0, (v, k) => ([[k, v]]));
        var values = [['Name', 'Result']].concat(chart_data);
        var data = google.visualization.arrayToDataTable(values);

        var options = {
            title,
            titleTextStyle,
            is3D: true,
            chartArea: {left: 25, width: '70%'},
        };

        var chart = new google.visualization.PieChart(document.getElementById(`chart_div${id}`));

        if (id === 1) {
            firstChart = chart;
            google.visualization.events.addListener(chart, 'ready', () => { get_cand_colors(); cb(); })
        } else {
            options.colors = Object.keys(chart_data0).map(c => cand_colors[c])
        }

        chart.draw(data, options);
    });

    // // chart_div3
    // const drawChart3 = () => {
    //     var chart_data = $.map(chart_3_data, (v, k) => ([[k, v, Math.floor(v) + '%', cand_colors[k].color]]));
    //     var values = [['Name', 'Result ' + '%', {role: 'annotation'}, {role: 'style'}]].concat(chart_data);
    //     var data = google.visualization.arrayToDataTable(values);
    //     var options = {
    //         title: 'Likelihood of Winning vs. Republican Candidate',
    //         titleTextStyle,
    //         vAxis: {
    //             minValue: 0,
    //         },
    //         chartArea: {left: 30, width: '70%'},
    //         legend: { position: "none" },
    //         hAxis: {
    //             textStyle: ($(window).width() < 580 ? {fontSize: 10} : {}),
    //             slantedTextAngle: 60
    //         }
    //     };
    //
    //     var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    //     chart.draw(data, options);
    // };


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
            titleTextStyle,
            chartArea: {left: 30, width: '55%'},
            colors: candidates.map(c => cand_colors[c].color)
        };

        var chart = new google.visualization.LineChart(document.getElementById(`chart_div${id}history`));
        chart.draw(data, options);
    });

    function buildCharts() {
        google.setOnLoadCallback(drawPieChart(1, 'Chances of Winning 2020 Election, based on analysis of odds from different betting websites',
            function() {
                google.setOnLoadCallback(drawPieChart(2, 'Chances of Being 2020 Democratic Candidate, based on analysis of odds from different betting websites'));
                // google.setOnLoadCallback(drawChart3);
                google.setOnLoadCallback(drawChartHist(1, 'Chances of Winning 2020 Election over time'));
                google.setOnLoadCallback(drawChartHist(2, 'Democratic nominee likelihood over time'));
                // google.setOnLoadCallback(drawChartHist(3, 'Winning vs. republican candidate nominee likelihood over time'));
            }
        ));
    }

    buildCharts();

    $(window).resize(buildCharts);


});