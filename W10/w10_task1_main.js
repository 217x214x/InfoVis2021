d3.csv("https://217x214x.github.io/InfoVis2021/W04/w04_task2.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.label; d.y = +d.length; });

        var config = {
            parent: '#drawing_region',
            width: 300,
            height: 128,
            margin: { top:10, right:10, bottom:20, left:60}
        };

        const bar_chart = new BarChart( config, data);
        bar_chart.update();
     })

var button = d3.select('#reverse')
     

class BarChart{
     
    constructor( config, data ) { 
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:10, bottom:20, left:60}
        }
        this.data = data;
        this.init();
    }

    init() { 
        let self = this;

        self.svg = d3.select( self.config.parent ) 
            .attr('width', self.config.width)
            .attr('height', self.config.height)

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.margin.left}, ${self.config.margin.top})`);
       
        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        // Initialize axis scales
        self.xscale = d3.scaleLinear()
         //   .domain([0, d3.max(self.data, d => d.length)])
            .range([0, self.inner_width]);

        self.yscale = d3.scaleBand()
           // .domain(self.data.map(d => d.label))
            .range([0, self.inner_height])
            .paddingInner(0.1);

        // Initialize axis
        self.xaxis = d3.axisBottom( self.xscale )
            .ticks(5)
            .tickSizeOuter(0);

        self.yaxis = d3.axisLeft( self.yscale )
            .tickSizeOuter(0);

        // Draw the axis
        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`)
            //.call( self.xaxis );

        self.yaxis_group = self.chart.append('g')
            //.call( self.yaxis );
        
        button.on('click', d => {
            self.data.reverse();
            self.update();
        });
    }

    update() { 
        let self = this;
       

        const xmax = d3.max( self.data, d => d.length ) ;
        self.xscale.domain( [0, 1.8*xmax] );
        self.yscale.domain( self.data.map(d => d.label) );


        self.render();

    }


    render() { 
        let self = this;
        
        // Draw bars
        self.chart.selectAll("rect").data(self.data)
            .join("rect")
            .transition().duration(1000)
            .attr("x", 0)
            .attr("y", d => self.yscale(d.label))
            .attr("width", d => self.xscale(d.length))
            .attr("height", self.yscale.bandwidth());

        self.xaxis_group
            .call( self.xaxis );

        self.yaxis_group
            .call( self.yaxis );

    }
}