import { Doughnut } from "react-chartjs-2"


const DoughNut = () => {
  // data for chart
  const data = {
    datasets: [{
      data: [245, 500],
      backgroundColor: ["rgba(76,135, 251,0.9)"],
    }]
  }

  return (
    <Doughnut data={data} width={120} height={85} />
  )
}

export default DoughNut;