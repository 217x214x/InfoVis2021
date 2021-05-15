d3.csv("https://217x214x.github.io/InfoVis2021/W08/data_task3.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.label; d.y = +d.length; });

        var config = {
            parent: '#drawing_region',
            width: 300,
            height: 300,
            margin: { top:10, right:10, bottom:20, left:60},
        };

        const pie_chart = new PieChart( config, data);
        pie_chart.update();
     })
     

class PieChart{
     
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
            .attr('transform', `translate(${self.config.width/2}, ${self.config.height/2})`)
            .append('g')
            .attr('transform', `translate(${self.config.width/2}, ${self.config.height/2})`);

       // self.chart = self.svg.append('g')
         //   .attr('transform', `translate(${self.config.width/2+self.config.margin.left}, ${self.config.height/2+self.config.margin.top})`);
       
        //self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        //self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        // Initialize axis scales
        //self.xscale = d3.scaleLinear()
         //   .domain([0, d3.max(self.data, d => d.length)])
          //  .range([0, self.inner_width]);

        //self.yscale = d3.scaleBand()
           // .domain(self.data.map(d => d.label))
          //  .range([0, self.inner_height])

 
    }

    update() { 
        let self = this;

        self.render();

    }


    render() { 
        let self = this;

        const pie = d3.pie()
              .value( d => d.length);

        const arc = d3.arc()
              .innerRadius(0)
              .outerRadius(self.config.height/2);
        
        // Draw pies
        self.svg.selectAll("pie").data(pie(self.data)).enter()
            .append("path")
            .attr('d', arc)
            .attr("fill", 'black')
            .attr("stroke",'white' )
            .attr("stroke-width", '2px');


    }
}
