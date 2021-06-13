let input_data;
let scatter_plot;
let line_chart;
let filter = [];

d3.csv("./GDPPerCapita_to_NetNationalIncomePerCapita.csv")
    .then( data => {
        input_data = data;
        input_data.forEach( d => {
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
        }, input_data );
        scatter_plot.update();

        line_chart = new LineChart( {
            parent: '#drawing_region_linechart',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'year',
           // cscale: color_scale
        }, input_data );
        line_chart.update();
    })
    .catch( error => {
        console.log( error );
    });

function Filter() {
    if ( filter.length == 0 ) {
        line_chart.data = input_data;
    }
    else {
        line_chart.data = input_data.filter( d => filter.includes( d.country ) );
    }
    scatter_plot.update();
}
