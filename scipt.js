window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Most used Technologies"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: 50, name: "Unity, C#", exploded: true },
                { y: 17, name: "Java, Android Studio" },
                { y: 17, name: "JavaScript" },
                { y: 8, name: "Firebase" },
                { y: 16, name: "SQL, mySQL" },
                { y: 8, name: "PHP, C++" },
                { y: 25, name: "HTML, CSS"}
            ]
        }],
    });

    var chartMini = new CanvasJS.Chart("chartContainerMini", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Most used Technologies"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}%</strong>",
            indexLabel: "{name} - {y}%",
            dataPoints: [
                { y: 50, name: "Unity, C#", exploded: true },
                { y: 17, name: "Java, Android Studio" },
                { y: 17, name: "JavaScript" },
                { y: 8, name: "Firebase" },
                { y: 16, name: "SQL, mySQL" },
                { y: 8, name: "PHP, C++" },
                { y: 25, name: "HTML, CSS"}
            ]
        }],
    });

    
    chartMini.render();
    chart.render();
    }
    
    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.chart.render();
    
    }