// Graficos
const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Efectivo", "Tarjeta credito", "Tarjeta debito"],
        datasets: [{
            label: 'Tipos de pagos',
            data: [300, 150, 597],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [
            'Cerveza',
            'Piscos',
            'Vinos'
        ],
        datasets: [{
            label: 'Tipos de licores vendidos',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }


})
// Generar pdf
// Se uso JsPdf y Html2Canvas
document.getElementById("DescargarPdf").addEventListener("click", async function (e) {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

    const container = document.querySelector(".container-sm");
    const canvas = await html2canvas(container, {
        scale: 2
    
    });

    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("Informe.pdf");
});
