let scatter_input_data;
let scatter_plot;
let line_input_data1;
let line_input_data2;
let line_input_data3;
let line_chart1;
let line_chart2;
let line_chart3;
let filter = [];

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/GDPPerCapita_to_NetNationalIncomePerCapita.csv")
    .then( data => {
        scatter_input_data = data;
        scatter_input_data.forEach( d => {
            d.GDP_per_capita = +d.GDP_per_capita;
            d.Net_National_Income_per_capita = +d.Net_National_Income_per_capita;
        });

        //const color_scale = d3.scaleOrdinal( d3.schemeCategory10 );
        //color_scale.domain(['setosa','versicolor','virginica']);

        scatter_plot = new ScatterPlot( {
            parent: '#drawing_region_scatterplot',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'GDP per capita  [US dollars]',
            ylabel: 'Net National Income per capita  [US dollars]',
           // cscale: color_scale
        }, scatter_input_data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/女性一人当たり出生数/API_SP.DYN.TFRT.IN_DS2_en_csv_v2_2449143.csv")
    .then( data => {
        line_input_data3 = data;
        line_input_data3.forEach( d => {
       //     d. = +d.;
         //   d. = +d.;
        });
        line_chart1 = new LineChart( {
            parent: '#drawing_region_linechart1',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'year',
           // cscale: color_scale
        }, line_input_data1 );
        line_chart1.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/GDPPerCapitaGrowth/API_NY.GDP.PCAP.KD.ZG_DS2_en_csv_v2_2445291.csv")
    .then( data => {
        line_input_data2 = data;
        line_input_data2.forEach( d => {
   //         d. = +d.;
     //       d. = +d.;
        });
        line_chart2 = new LineChart( {
            parent: '#drawing_region_linechart2',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'year',
           // cscale: color_scale
        }, line_input_data2 );
        line_chart2.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/AdjustedNetNationalIncomePerCapitaGrowth/API_NY.ADJ.NNTY.PC.KD.ZG_DS2_en_csv_v2_2450502.csv")
    .then( data => {
        line_input_data3 = data;
        line_input_data3.forEach( d => {
       //     d. = +d.;
         //   d. = +d.;
        });
        line_chart3 = new LineChart( {
            parent: '#drawing_region_linechart3',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'year',
           // cscale: color_scale
        }, line_input_data3 );
        line_chart3.update();
    })
    .catch( error => {
        console.log( error );
    });

function Filter() {
    if ( filter.length == 0 ) {
        line_chart1.data = line_input_data1;
        line_chart2.data = line_input_data2;
        line_chart3.data = line_input_data3;
    }
    else {
        line_chart1.data = line_input_data1.filter( d => filter.includes( d.country ) );
        line_chart2.data = line_input_data2.filter( d => filter.includes( d.country ) );
        line_chart3.data = line_input_data3.filter( d => filter.includes( d.country ) );
    }
    line_chart1.update();
    line_chart2.update();
    line_chart3.update();
}
