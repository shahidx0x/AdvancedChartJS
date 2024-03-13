import { DataFetchingService } from '@/server/fetchData';
import StackedBarChart from './components/charts/AgeGenderChart';
import LocationChart from './components/charts/LocationChart';

export default async function Home() {
  const ageData = await DataFetchingService.ageGender();

  const data = {
    labels: ['21-24', '25-30', '31-35', '36-40', '41-45'],
    datasets: [
      {
        label: 'Male',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgb(227,244,238)',
        borderRadius: 10,
        borderSkipped: false
      },
      {
        label: 'Female',
        data: [15, 25, 35, 45, 55],
        backgroundColor: 'rgb(68,241,182)',
        borderRadius: 10,
        borderSkipped: false
      },
      {
        label: 'Other',
        data: [],
        backgroundColor: 'rgb(21,237,163)',
        borderRadius: 10,
        borderSkipped: false
      }
    ]
  };
  const data2 = {
    labels: ['California', 'Florida', 'New York', 'Virginia', 'Washington'],
    datasets: [
      {
        label: 'Male',
        data: [29, 30, 21, 23, 43],
        backgroundColor: 'rgb(227,244,238)',
        borderRadius: 10,
        borderSkipped: false
      }
    ]
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col gap-10">
        {/* Age and Gender Section Start */}
        <div className="max-w-6xl h-auto shadow-sm  rounded-xl bg-white flex flex-col">
          <div className="w-full h-20 flex justify-between items-center px-10">
            <h1 className="font-bold text-gray-600">Age & Gender</h1>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 font-medium">Respondents : </p>
              <p className="text-gray-500 font-medium">500</p>
            </div>
          </div>
          <div className="w-full h-auto border-t-2">
            <StackedBarChart data={data} />
          </div>
        </div>
        {/* Age and Gender Section Finished */}
        {/* Location Section Start */}
        <div className="max-w-6xl h-auto shadow-sm  rounded-xl bg-white flex flex-col">
          <div className="w-full h-20 flex justify-between items-center px-10">
            <h1 className="font-bold text-gray-600">Locations</h1>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 font-medium">Respondents : </p>
              <p className="text-gray-500 font-medium">500</p>
            </div>
          </div>
          <div className="w-auto h-auto border-t-2">
            <LocationChart data={data2} />
          </div>
        </div>
        {/* Location Section Finished */}
        {/* Main Section Start */}
        <div className="w-[60rem] h-96 shadow-sm rounded-xl bg-white">
          <div className="w-full h-20"></div>
          <div className="w-full h-full border-t-2"></div>
        </div>
        {/* Main Section Finished */}
      </div>
    </div>
  );
}
