Array.prototype.uniq = function () {
    return [...new Set(this)]
};

function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More »";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Less";
        moreText.style.display = "inline";
        gtag('event', 'click_on_more', { 'probabilities_text': 'index_top' });
    }
}

$(document).ready(function () {
    if (typeof chart_1_data === 'undefined') { $('head').append('<script src="assets/data/chart_1.js"></script>') } //fallback
    if (typeof chart_2_data === 'undefined') { $('head').append('<script src="assets/data/chart_2.js"></script>') } //fallback

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

    const titleTextStyle = { fontName: '', fontSize: 16, color: '#333', italic: true, bold: false };

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

    // chart_div1history
    // chart_div2history
    const drawChartHist = (id, title) => (() => {
        var chart_history_data = eval(`chart_${id}_history_data`);
        var candidates = $.map(chart_history_data, v => (Object.keys(v))).uniq();

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        candidates.forEach(cand => data.addColumn('number', cand));

        $.each(chart_history_data, (date, vals) => {
            var dataRow = [new Date(date.replace(/-/g, "/"))]; //replace - fix for safari
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
        google.setOnLoadCallback(drawPieChart(1, 'Chances of winning 2020 election, based on analysis of odds from different betting websites',
            function() {
                google.setOnLoadCallback(drawPieChart(2, 'Chances of becoming 2020 Democratic candidate, based on analysis of odds from different betting websites'));
                google.setOnLoadCallback(drawChartHist(1, 'Chances of winning 2020 election over time'));
                google.setOnLoadCallback(drawChartHist(2, 'Democratic nominee likelihood over time'));
            }
        ));
    }

    buildCharts();

    $(window).resize(buildCharts);


});