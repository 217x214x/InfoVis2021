d3.csv("https://vizlab-kobe-lecture.github.io/InfoVis2021/W04/data.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y; });

        var config = {
            parent: '#drawing_region',
            width: 900,
            height: 500,
            margin: {top:30, right:10, bottom:20, left:40}
        };

        const scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });

class ScatterPlot {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:10, bottom:10, left:10}
        }
        this.data = data;
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select( self.config.parent )
            .attr('width', self.config.width)
            .attr('height', self.config.height);
    
        self.svg.append("text")
            .attr("x",self.config.width / 2)
            .attr("y",self.config.margin.top)
            .attr("font-size","30px")
            .attr("font-weight","bold")
            .text("Task2");

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.margin.left}, ${self.config.margin.top})`);

        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom*5;

        self.xscale = d3.scaleLinear()
            .range( [self.config.margin.left, self.config.margin.left+self.inner_width] );
           // .range( [0, self.inner_width] );

        self.yscale = d3.scaleLinear()
            .range( [self.inner_height, self.config.margin.top] );
           // .range( [self.config.margin.top, self.inner_height] );
           // .range( [0, self.inner_height] );

        self.xaxis = d3.axisBottom( self.xscale )
            .ticks(20);
        
        self.yaxis = d3.axisLeft( self.yscale )
            .ticks(10);

        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`);
       
         self.xlabel = self.svg.append("text")
            .attr("x",self.config.width / 2)
            .attr("y",self.config.margin.top + self.inner_height + self.config.margin.bottom*3)
            .attr("font-size","20px")
            .text("X-label");
        
        self.yaxis_group = self.chart.append('g')
            .attr('transform', `translate(${self.config.margin.left}, 0)`);

        self.ylabel = self.svg.append('text')
            .attr("x",self.config.margin.left)
            .attr("y",self.config.margin.top + self.inner_height / 2)
            .attr("font-size","20px")
            .text("Y-label");
        self.ylabel.attr('transform',`rotate(-90, ${self.config.margin.left}, ${self.config.margin.top + self.inner_height/2})`);
}

    update() {
        let self = this;

        const xmin = d3.min( self.data, d => d.x );
        const xmax = d3.max( self.data, d => d.x );
        self.xscale.domain( [0, xmax+xmax/4] );

        const ymin = d3.min( self.data, d => d.y );
        const ymax = d3.max( self.data, d => d.y );
        self.yscale.domain( [0, ymax+ymin] );

        self.render();
    }

    render() {
        let self = this;

        self.chart.selectAll("circle")
            .data(self.data)
            .enter()
            .append("circle")
            .attr("cx", d => self.xscale( d.x ) )
            .attr("cy", d => self.yscale( d.y ) )
            .attr("r", d => d.r );

        self.xaxis_group
            .call( self.xaxis );
        
        self.yaxis_group
            .call( self.yaxis );
    }
}
