import { CategoryScale } from "chart.js";
import { RxAspectRatio } from "react-icons/rx";

export const BarchartData = {
    labels: [
        
        
        'Photosh',
         "Figma",
          "Html",
           "Css",
          "JavaScript",
           "ReactNative",
            "Reactjs",
             "Tailwindcss",
             "Nodejs",
               "Python"
            
    ],
    datasets: [
        {
            label: ' FrontEnd and BackEnd Chart',
            data: [50, 40, 95, 90, 60,60,90,70,60,40],
            backgroundColor: 'rgb(30, 0, 255)',
            borderColor: 'rgb(157, 0, 255)',
            borderWidth: 0,
            font: 'rgb(30, 0, 255)',
            barPercentage: 1,
            CategoryPercentage:1,
            
        },
        
    ],
};