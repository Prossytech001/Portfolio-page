import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS ,CategoryScale, LinearScale,  BarElement, Title,TimeScale,Legend} from 'chart.js'
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title,TimeScale,Legend)
import {BarchartData}  from '../components/Fakedata';
  
export  const BarGraph = () => {
    const options = {};

  return <Bar options={options} data={BarchartData}/>
}