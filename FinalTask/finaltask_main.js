let input_data1;
let input_data2;
let input_data3;
let input_data4;
let scatter_plot1;
let scatter_plot2;
let scatter_plot3;
let scatter_plot4;
let filter = [];

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/GDPPerCapita_to_NetNationalIncomePerCapita.csv")
    .then( data => {
        input_data1 = data;
        input_data1.forEach( d => {
            d.GDP_per_capita = +d.GDP_per_capita;
            d.Net_National_Income_per_capita = +d.Net_National_Income_per_capita;
        });

        const color_scale = d3.scaleLinear( d3.schemeCategory10 );
        color_scale.domain(['Aruba','Afghanistan','Angola','Albania','Andorra','Arab World', 'United Arab Emirates','Argentina','Armenia','American Samoa','Antigua and Barbuda','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bahrain','Bahamas, The','Bosnia and Herzegovina','Belarus','Belize','Bermuda','Bolivia','Brazil','Barbados','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Central Europe and the Baltics','Switzerland','Channel Islands','Chile','China',"Cote d'Ivoire",'Cameroon','Congo, Dem. Rep.','Congo, Rep.','Colombia','Comoros','Cabo Verde','Costa Rica','Caribbean small states','Cuba','Curacao','Cayman Islands','Cyprus','Czech Republic','Germany','Djibouti','Dominica','Denmark','Dominican Republic','Algeria','East Asia & Pacific (excluding high income)','Early-demographic dividend','East Asia & Pacific','Europe & Central Asia (excluding high income)','Europe & Central Asia','Ecuador','Egypt, Arab Rep.','Euro area','Eritrea','Spain','Estonia','Ethiopia','European Union','Fragile and conflict affected situations','Finland','Fiji','France','Faroe Islands','Micronesia, Fed. Sts.','Gabon','United Kingdom','Georgia','Ghana','Gibraltar','Guinea','Gambia, The','Guinea-Bissau','Equatorial Guinea','Greece','Grenada','Greenland','Guatemala','Guam','Guyana','High income','Hong Kong SAR, China','Honduras','Heavily indebted poor countries (HIPC)','Croatia','Haiti','Hungary','IBRD only','IDA & IBRD total','IDA total','IDA blend','Indonesia','IDA only','Isle of Man','India','Not classified','Ireland','Iran, Islamic Rep.','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyz Republic','Cambodia','Kiribati','St. Kitts and Nevis','Korea, Rep.','Kuwait','Latin America & Caribbean (excluding high income)','Lao PDR','Lebanon','Liberia','Libya','St. Lucia','Latin America & Caribbean','Least developed countries: UN classification','Low income','Liechtenstein','Sri Lanka','Lower middle income','Low & middle income','Lesotho','Late-demographic dividend','Lithuania','Luxembourg','Latvia','Macao SAR, China','St. Martin (French part)','Morocco','Monaco','Moldova','Madagascar','Maldives','Middle East & North Africa','Mexico','Marshall Islands','Middle income','North Macedonia','North Macedonia','Mali','Malta','Myanmar','Middle East & North Africa (excluding high income)','Montenegro','Mongolia','Northern Mariana Islands','Mozambique','Mauritania','Mauritius','Malawi','Malaysia','North America','Namibia','New Caledonia','Niger','Nigeria','Nicaragua','Netherlands','Norway','Nepal','Nauru','New Zealand','OECD members','Oman','Other small states','Pakistan','Panama','Peru','Philippines','Palau','Papua New Guinea','Poland','Pre-demographic dividend','Puerto Rico',"Korea, Dem. People's Rep.",'Portugal','Paraguay','West Bank and Gaza','Pacific island small states','Post-demographic dividend','French Polynesia','Qatar','Romania','Russian Federation','Rwanda','South Asia','Saudi Arabia','Sudan','Senegal','Singapore','Solomon Islands','Sierra Leone','El Salvador','San Marino','Somalia','Serbia','Sub-Saharan Africa (excluding high income)','South Sudan','Sub-Saharan Africa','Small states','Sao Tome and Principe','Suriname','Slovak Republic','Slovenia','Sweden','Eswatini','Sint Maarten (Dutch part)','Seychelles','Syrian Arab Republic','Turks and Caicos Islands','Chad','East Asia & Pacific (IDA & IBRD countries)','Europe & Central Asia (IDA & IBRD countries)','Togo','Thailand','Tajikistan','Turkmenistan','Latin America & the Caribbean (IDA & IBRD countries)','Timor-Leste','Middle East & North Africa (IDA & IBRD countries)','Tonga','South Asia (IDA & IBRD)','Sub-Saharan Africa (IDA & IBRD countries)','Trinidad and Tobago','Tunisia','Turkey','Tuvalu','Tanzania','Uganda','Ukraine','Upper middle income','Uruguay','United States','Uzbekistan','St. Vincent and the Grenadines','Venezuela, RB','British Virgin Islands','Virgin Islands (U.S.)','Vietnam','Vanuatu','World','Samoa','Kosovo','Yemen, Rep.','South Africa','Zambia','Zimbabwe']);

        scatter_plot1 = new ScatterPlot( {
            parent: '#drawing_region_scatterplot1',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'GDP per capita  [US dollars]',
            ylabel: 'Net National Income per capita  [US dollars]',
            cscale: color_scale
        }, input_data1 );
        scatter_plot1.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/AdjustedNetNationalIncomePerCaptaGrowth_to_GDPPerCapitaGrowth.csv")
    .then( data => {
        input_data2 = data;
        input_data2.forEach( d => {
            d.GDP_per_capita_Growth = +d.GDP_per_capita_Growth;
            d.Net_National_Income_per_capita_Growth = +d.Net_National_Income_per_capita_Growth;
        });

        const color_scale = d3.scaleLinear( d3.schemeCategory10 );
        color_scale.domain(['Aruba','Afghanistan','Angola','Albania','Andorra','Arab World', 'United Arab Emirates','Argentina','Armenia','American Samoa','Antigua and Barbuda','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bahrain','Bahamas, The','Bosnia and Herzegovina','Belarus','Belize','Bermuda','Bolivia','Brazil','Barbados','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Central Europe and the Baltics','Switzerland','Channel Islands','Chile','China',"Cote d'Ivoire",'Cameroon','Congo, Dem. Rep.','Congo, Rep.','Colombia','Comoros','Cabo Verde','Costa Rica','Caribbean small states','Cuba','Curacao','Cayman Islands','Cyprus','Czech Republic','Germany','Djibouti','Dominica','Denmark','Dominican Republic','Algeria','East Asia & Pacific (excluding high income)','Early-demographic dividend','East Asia & Pacific','Europe & Central Asia (excluding high income)','Europe & Central Asia','Ecuador','Egypt, Arab Rep.','Euro area','Eritrea','Spain','Estonia','Ethiopia','European Union','Fragile and conflict affected situations','Finland','Fiji','France','Faroe Islands','Micronesia, Fed. Sts.','Gabon','United Kingdom','Georgia','Ghana','Gibraltar','Guinea','Gambia, The','Guinea-Bissau','Equatorial Guinea','Greece','Grenada','Greenland','Guatemala','Guam','Guyana','High income','Hong Kong SAR, China','Honduras','Heavily indebted poor countries (HIPC)','Croatia','Haiti','Hungary','IBRD only','IDA & IBRD total','IDA total','IDA blend','Indonesia','IDA only','Isle of Man','India','Not classified','Ireland','Iran, Islamic Rep.','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyz Republic','Cambodia','Kiribati','St. Kitts and Nevis','Korea, Rep.','Kuwait','Latin America & Caribbean (excluding high income)','Lao PDR','Lebanon','Liberia','Libya','St. Lucia','Latin America & Caribbean','Least developed countries: UN classification','Low income','Liechtenstein','Sri Lanka','Lower middle income','Low & middle income','Lesotho','Late-demographic dividend','Lithuania','Luxembourg','Latvia','Macao SAR, China','St. Martin (French part)','Morocco','Monaco','Moldova','Madagascar','Maldives','Middle East & North Africa','Mexico','Marshall Islands','Middle income','North Macedonia','North Macedonia','Mali','Malta','Myanmar','Middle East & North Africa (excluding high income)','Montenegro','Mongolia','Northern Mariana Islands','Mozambique','Mauritania','Mauritius','Malawi','Malaysia','North America','Namibia','New Caledonia','Niger','Nigeria','Nicaragua','Netherlands','Norway','Nepal','Nauru','New Zealand','OECD members','Oman','Other small states','Pakistan','Panama','Peru','Philippines','Palau','Papua New Guinea','Poland','Pre-demographic dividend','Puerto Rico',"Korea, Dem. People's Rep.",'Portugal','Paraguay','West Bank and Gaza','Pacific island small states','Post-demographic dividend','French Polynesia','Qatar','Romania','Russian Federation','Rwanda','South Asia','Saudi Arabia','Sudan','Senegal','Singapore','Solomon Islands','Sierra Leone','El Salvador','San Marino','Somalia','Serbia','Sub-Saharan Africa (excluding high income)','South Sudan','Sub-Saharan Africa','Small states','Sao Tome and Principe','Suriname','Slovak Republic','Slovenia','Sweden','Eswatini','Sint Maarten (Dutch part)','Seychelles','Syrian Arab Republic','Turks and Caicos Islands','Chad','East Asia & Pacific (IDA & IBRD countries)','Europe & Central Asia (IDA & IBRD countries)','Togo','Thailand','Tajikistan','Turkmenistan','Latin America & the Caribbean (IDA & IBRD countries)','Timor-Leste','Middle East & North Africa (IDA & IBRD countries)','Tonga','South Asia (IDA & IBRD)','Sub-Saharan Africa (IDA & IBRD countries)','Trinidad and Tobago','Tunisia','Turkey','Tuvalu','Tanzania','Uganda','Ukraine','Upper middle income','Uruguay','United States','Uzbekistan','St. Vincent and the Grenadines','Venezuela, RB','British Virgin Islands','Virgin Islands (U.S.)','Vietnam','Vanuatu','World','Samoa','Kosovo','Yemen, Rep.','South Africa','Zambia','Zimbabwe']);

        scatter_plot2 = new ScatterPlot( {
            parent: '#drawing_region_scatterplot2',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'GDP per capita  [US dollars]',
            ylabel: 'Net National Income per capita  [US dollars]',
            cscale: color_scale
        }, input_data2 );
        scatter_plot2.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/BirthPerWoman_to_AdjustedNetNationalIncomePerCapitaGrowth.csv")
    .then( data => {
        input_data3 = data;
        input_data3.forEach( d => {
            d.Birth_per_Woman = +d.Birth_per_Woman;
            d.Net_National_Income_per_capita_Growth = +d.Net_National_Income_per_capita_Growth;
        });

        const color_scale = d3.scaleLinear( d3.schemeCategory10 );
        color_scale.domain(['Aruba','Afghanistan','Angola','Albania','Andorra','Arab World', 'United Arab Emirates','Argentina','Armenia','American Samoa','Antigua and Barbuda','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bahrain','Bahamas, The','Bosnia and Herzegovina','Belarus','Belize','Bermuda','Bolivia','Brazil','Barbados','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Central Europe and the Baltics','Switzerland','Channel Islands','Chile','China',"Cote d'Ivoire",'Cameroon','Congo, Dem. Rep.','Congo, Rep.','Colombia','Comoros','Cabo Verde','Costa Rica','Caribbean small states','Cuba','Curacao','Cayman Islands','Cyprus','Czech Republic','Germany','Djibouti','Dominica','Denmark','Dominican Republic','Algeria','East Asia & Pacific (excluding high income)','Early-demographic dividend','East Asia & Pacific','Europe & Central Asia (excluding high income)','Europe & Central Asia','Ecuador','Egypt, Arab Rep.','Euro area','Eritrea','Spain','Estonia','Ethiopia','European Union','Fragile and conflict affected situations','Finland','Fiji','France','Faroe Islands','Micronesia, Fed. Sts.','Gabon','United Kingdom','Georgia','Ghana','Gibraltar','Guinea','Gambia, The','Guinea-Bissau','Equatorial Guinea','Greece','Grenada','Greenland','Guatemala','Guam','Guyana','High income','Hong Kong SAR, China','Honduras','Heavily indebted poor countries (HIPC)','Croatia','Haiti','Hungary','IBRD only','IDA & IBRD total','IDA total','IDA blend','Indonesia','IDA only','Isle of Man','India','Not classified','Ireland','Iran, Islamic Rep.','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyz Republic','Cambodia','Kiribati','St. Kitts and Nevis','Korea, Rep.','Kuwait','Latin America & Caribbean (excluding high income)','Lao PDR','Lebanon','Liberia','Libya','St. Lucia','Latin America & Caribbean','Least developed countries: UN classification','Low income','Liechtenstein','Sri Lanka','Lower middle income','Low & middle income','Lesotho','Late-demographic dividend','Lithuania','Luxembourg','Latvia','Macao SAR, China','St. Martin (French part)','Morocco','Monaco','Moldova','Madagascar','Maldives','Middle East & North Africa','Mexico','Marshall Islands','Middle income','North Macedonia','North Macedonia','Mali','Malta','Myanmar','Middle East & North Africa (excluding high income)','Montenegro','Mongolia','Northern Mariana Islands','Mozambique','Mauritania','Mauritius','Malawi','Malaysia','North America','Namibia','New Caledonia','Niger','Nigeria','Nicaragua','Netherlands','Norway','Nepal','Nauru','New Zealand','OECD members','Oman','Other small states','Pakistan','Panama','Peru','Philippines','Palau','Papua New Guinea','Poland','Pre-demographic dividend','Puerto Rico',"Korea, Dem. People's Rep.",'Portugal','Paraguay','West Bank and Gaza','Pacific island small states','Post-demographic dividend','French Polynesia','Qatar','Romania','Russian Federation','Rwanda','South Asia','Saudi Arabia','Sudan','Senegal','Singapore','Solomon Islands','Sierra Leone','El Salvador','San Marino','Somalia','Serbia','Sub-Saharan Africa (excluding high income)','South Sudan','Sub-Saharan Africa','Small states','Sao Tome and Principe','Suriname','Slovak Republic','Slovenia','Sweden','Eswatini','Sint Maarten (Dutch part)','Seychelles','Syrian Arab Republic','Turks and Caicos Islands','Chad','East Asia & Pacific (IDA & IBRD countries)','Europe & Central Asia (IDA & IBRD countries)','Togo','Thailand','Tajikistan','Turkmenistan','Latin America & the Caribbean (IDA & IBRD countries)','Timor-Leste','Middle East & North Africa (IDA & IBRD countries)','Tonga','South Asia (IDA & IBRD)','Sub-Saharan Africa (IDA & IBRD countries)','Trinidad and Tobago','Tunisia','Turkey','Tuvalu','Tanzania','Uganda','Ukraine','Upper middle income','Uruguay','United States','Uzbekistan','St. Vincent and the Grenadines','Venezuela, RB','British Virgin Islands','Virgin Islands (U.S.)','Vietnam','Vanuatu','World','Samoa','Kosovo','Yemen, Rep.','South Africa','Zambia','Zimbabwe']);

        scatter_plot3 = new ScatterPlot( {
            parent: '#drawing_region_scatterplot3',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'GDP per capita  [US dollars]',
            ylabel: 'Net National Income per capita  [US dollars]',
            cscale: color_scale
        }, input_data3 );
        scatter_plot3.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://217x214x.github.io/InfoVis2021/FinalTask/BirthPerWoman_to_GDPPerCapitaGrowth.csv")
    .then( data => {
        input_data4 = data;
        input_data4.forEach( d => {
            d.Birth_per_Woman = +d.Birth_per_Woman;
            d.GDP_per_capita_Growth = +d.GDP_per_capita_Growth;
        });

        const color_scale = d3.scaleLinear( d3.schemeCategory10 );
        color_scale.domain(['Aruba','Afghanistan','Angola','Albania','Andorra','Arab World', 'United Arab Emirates','Argentina','Armenia','American Samoa','Antigua and Barbuda','Australia','Austria','Azerbaijan','Burundi','Belgium','Benin','Burkina Faso','Bangladesh','Bulgaria','Bahrain','Bahamas, The','Bosnia and Herzegovina','Belarus','Belize','Bermuda','Bolivia','Brazil','Barbados','Brunei Darussalam','Bhutan','Botswana','Central African Republic','Canada','Central Europe and the Baltics','Switzerland','Channel Islands','Chile','China',"Cote d'Ivoire",'Cameroon','Congo, Dem. Rep.','Congo, Rep.','Colombia','Comoros','Cabo Verde','Costa Rica','Caribbean small states','Cuba','Curacao','Cayman Islands','Cyprus','Czech Republic','Germany','Djibouti','Dominica','Denmark','Dominican Republic','Algeria','East Asia & Pacific (excluding high income)','Early-demographic dividend','East Asia & Pacific','Europe & Central Asia (excluding high income)','Europe & Central Asia','Ecuador','Egypt, Arab Rep.','Euro area','Eritrea','Spain','Estonia','Ethiopia','European Union','Fragile and conflict affected situations','Finland','Fiji','France','Faroe Islands','Micronesia, Fed. Sts.','Gabon','United Kingdom','Georgia','Ghana','Gibraltar','Guinea','Gambia, The','Guinea-Bissau','Equatorial Guinea','Greece','Grenada','Greenland','Guatemala','Guam','Guyana','High income','Hong Kong SAR, China','Honduras','Heavily indebted poor countries (HIPC)','Croatia','Haiti','Hungary','IBRD only','IDA & IBRD total','IDA total','IDA blend','Indonesia','IDA only','Isle of Man','India','Not classified','Ireland','Iran, Islamic Rep.','Iraq','Iceland','Israel','Italy','Jamaica','Jordan','Japan','Kazakhstan','Kenya','Kyrgyz Republic','Cambodia','Kiribati','St. Kitts and Nevis','Korea, Rep.','Kuwait','Latin America & Caribbean (excluding high income)','Lao PDR','Lebanon','Liberia','Libya','St. Lucia','Latin America & Caribbean','Least developed countries: UN classification','Low income','Liechtenstein','Sri Lanka','Lower middle income','Low & middle income','Lesotho','Late-demographic dividend','Lithuania','Luxembourg','Latvia','Macao SAR, China','St. Martin (French part)','Morocco','Monaco','Moldova','Madagascar','Maldives','Middle East & North Africa','Mexico','Marshall Islands','Middle income','North Macedonia','North Macedonia','Mali','Malta','Myanmar','Middle East & North Africa (excluding high income)','Montenegro','Mongolia','Northern Mariana Islands','Mozambique','Mauritania','Mauritius','Malawi','Malaysia','North America','Namibia','New Caledonia','Niger','Nigeria','Nicaragua','Netherlands','Norway','Nepal','Nauru','New Zealand','OECD members','Oman','Other small states','Pakistan','Panama','Peru','Philippines','Palau','Papua New Guinea','Poland','Pre-demographic dividend','Puerto Rico',"Korea, Dem. People's Rep.",'Portugal','Paraguay','West Bank and Gaza','Pacific island small states','Post-demographic dividend','French Polynesia','Qatar','Romania','Russian Federation','Rwanda','South Asia','Saudi Arabia','Sudan','Senegal','Singapore','Solomon Islands','Sierra Leone','El Salvador','San Marino','Somalia','Serbia','Sub-Saharan Africa (excluding high income)','South Sudan','Sub-Saharan Africa','Small states','Sao Tome and Principe','Suriname','Slovak Republic','Slovenia','Sweden','Eswatini','Sint Maarten (Dutch part)','Seychelles','Syrian Arab Republic','Turks and Caicos Islands','Chad','East Asia & Pacific (IDA & IBRD countries)','Europe & Central Asia (IDA & IBRD countries)','Togo','Thailand','Tajikistan','Turkmenistan','Latin America & the Caribbean (IDA & IBRD countries)','Timor-Leste','Middle East & North Africa (IDA & IBRD countries)','Tonga','South Asia (IDA & IBRD)','Sub-Saharan Africa (IDA & IBRD countries)','Trinidad and Tobago','Tunisia','Turkey','Tuvalu','Tanzania','Uganda','Ukraine','Upper middle income','Uruguay','United States','Uzbekistan','St. Vincent and the Grenadines','Venezuela, RB','British Virgin Islands','Virgin Islands (U.S.)','Vietnam','Vanuatu','World','Samoa','Kosovo','Yemen, Rep.','South Africa','Zambia','Zimbabwe']);

        scatter_plot4 = new ScatterPlot( {
            parent: '#drawing_region_scatterplot4',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:50, left:50},
            xlabel: 'GDP per capita  [US dollars]',
            ylabel: 'Net National Income per capita  [US dollars]',
            cscale: color_scale
        }, input_data4 );
        scatter_plot4.update();
    })
    .catch( error => {
        console.log( error );
    });


function Filter() {
    if ( filter.length == 0 ) {
        scatter_plot.data = line_input_data;
    }
    else {
        scatter_plot.data = input_data.filter( d => filter.includes( d.country ) );
    }
    scatter_plot.update();
}
