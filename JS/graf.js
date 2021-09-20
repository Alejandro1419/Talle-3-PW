
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
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx,{
    type: 'doughnut',
    data: {
      labels: arra1,
      datasets: [{
          axis: 'x',
          label:'valores',
          data: arra2,
          backgroundcolor: [
            'rgba(255, 99, 132, 0.2)',
             'rgba(54,162,235,0.2)',
             'rgba(255,206,86,0.2)',
             'rgba(75,192,192,0.2)',
             'rgba(153,102,255,0.2)',
             'rgba(255,159,64,0.2)'
          ],
          bordercolor: [
            'rgba(255, 99, 132, 0.2)',
             'rgba(54,162,235,0.2)',
             'rgba(255,206,86,0.2)',
             'rgba(75,192,192,0.2)',
             'rgba(153,102,255,0.2)',
             'rgba(255,159,64,0.2)'
          ],
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
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx,{
      type : 'line',
      data: {
        labels: arra2,
        datasets: [{
          axis: 'y',
          label: 'grafica',
           data:arra1,
           backgroundcolor:[
             'rgba(255, 99, 132, 0.2)',
             'rgba(54,162,235,0.2)',
             'rgba(255,206,86,0.2)',
             'rgba(75,192,192,0.2)',
             'rgba(153,102,255,0.2)',
             'rgba(255,159,64,0.2)'
           ],
            bordercolor:[
              'rgba(255, 99, 132, 0.2)',
             'rgba(54,162,235,0.2)',
             'rgba(255,206,86,0.2)',
             'rgba(75,192,192,0.2)',
             'rgba(153,102,255,0.2)',
             'rgba(255,159,64,0.2)'

            ],
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
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx,{
          type: 'bar',
          data:{
            labels: arra2,
            datasets:[{
              label:'',
              data: arra1,
              backgroundcolor:[
                'rgba(255, 99, 132, 0.2)',
             'rgba(54,162,235,0.2)',
             'rgba(255,206,86,0.2)',
             'rgba(75,192,192,0.2)',
             'rgba(153,102,255,0.2)',
             'rgba(255,159,64,0.2)'
              ],
              bordercolor:[
                'rgba(255, 99, 132, 0.2)',
               'rgba(54,162,235,0.2)',
               'rgba(255,206,86,0.2)',
               'rgba(75,192,192,0.2)',
               'rgba(153,102,255,0.2)',
               'rgba(255,159,64,0.2)'
  
              ],
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


