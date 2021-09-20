
  var ctx = document.getElementById('myChart');
  var ctx = document.getElementById('myChart').getContext('2d');
  var ctx = 'myChart';
var graficar=document.getElementById("graficar")
var torta=document.getElementById("torta")
var linea=document.getElementById("linea")
var barra=document.getElementById("barra")


torta.onclick = function(a){
  graficar.onclick = function(a){
  let data1=document.getElementById("data").value;
  let data2=document.getElementById("label").value;
  let arra1 = data2.split(',');
  let arra2 = data1.split(',');
  console.log(arra2);
  console.log(arra1);
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx,{
    type: 'doughnut',
    data: {
      labels: arra1,
      datasets: [{
          axis: 'x',
          label:'valores',
          data: arra2,
          backgroundcolor: barColors,
          bordercolor: barColors,
          borderwidth:1
      }]

    },
    options:{
      scales:{
        y:{
          beginAtZero: true
        }
      }
    }
  });
}
}
linea.onclick = function(a){
  graficar.onclick = function(a){
    let data1=document.getElementById("data").value;
    let data2=document.getElementById("label").value;
    let arra1 = data1.split(',');
    let arra2 = data2.split(',');
    console.log(arra2);
    console.log(arra1);
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145"
    ];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx,{
      type : 'line',
      data: {
        labels: arra2,
        datasets: [{
          axis: 'y',
          label: 'grafica',
           data:arra1,
           backgroundcolor: barColors,
            bordercolor:barColors,
            borderwith:1
        }]
      },
      options:{
        indexAxis:'x',
        scales:{
          x:{
            beginAtZero:true
          }
        }
      }
    });
  }
}

  barra.onclick = function(a){
      graficar.onclick = function(a){
        let data1=document.getElementById("data").value;
        let data2=document.getElementById("label").value;
        let arra1 = data2.split(',');
        let arra2 = data1.split(',');
        console.log(arra2);
        console.log(arra1);
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145"
        ];
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx,{
          type: 'bar',
          data:{
            labels: arra2,
            datasets:[{
              label:'',
              data: arra1,
              backgroundcolor:barColors,
              bordercolor: barColors,
              borderwidth: 1
            }]
          },
          options:{
            indexAxis:'x',
            scales:{
              x:{
                beginAtZero:true
              }
            }
          }
        });
      }
  }


