url = "/samples.json"
let ids = [];

// Build bar plot

function buildBarPlot(sample) {
  console.log(sample);
    d3.json(url).then(data => {
      // Filter
      var results = data.samples.filter(x => 
      x.id === sample
      )[0];

      // Grab values from the data json object to build the plots
      var trace1 = {
        x: results.sample_values,
        y: results.otu_ids,
        hovertext: results.otu_labels,
        type: "bar"
      };
      var data1 = [trace1];
      var layout = {
          title: 'Bacterial Samples'
      };
      Plotly.newPlot("bar", data1, layout);
    });
  }

  // Build bubble plot
  function buildBubblePlot(sample){
    d3.json(url).then(data => {
      var results = data.samples.filter(x =>  x.id === sample)[0];

      var trace2 = {
        x: results.otu_ids,
        y: results.sample_values,
        mode: 'markers',
        marker: {
        color: results.otu_ids,
        text: results.otu_labels,
        size: [10,20,30,40,50,60,70,80,90,100]
        }
      };

      var data2 = [trace2];
      var layout2 = {
        title: "Bacterial Samples"
      };
      Plotly.newPlot("bubble",data2,layout2);
    });
  }

function buildList(){
d3.json(url).then(data => {
  let idbuilder = data.names;
  idbuilder.forEach(element =>  {
    ids.push(element);
  }
  )})
  console.log(document.getElementById("selector").value);
  for(var i = 0; i < ids.length; i++) {
    var option = document.createElement("option");
    var select = document.getElementById("selector");
    option.text = ids[i];
    option.value = ids[i];
    select.options[select.options.length] = new Option(option.value, i);
}}


  console.log(ids);
  buildBarPlot(document.getElementById("selector").value);
  buildBubblePlot(document.getElementById("selector").value);