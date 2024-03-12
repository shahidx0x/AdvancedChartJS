export default function Home() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col gap-10">
        {/* Age and Gender Section Start */}
        <div className="w-[60rem] h-96 shadow-sm  rounded-xl bg-white flex flex-col">
          <div className="w-full h-20 flex justify-between items-center px-10">
            <h1 className="font-bold text-gray-600">Age & Gender</h1>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 font-medium">Respondents : </p>
              <p className="text-gray-500 font-medium">500</p>
            </div>
          </div>
          <div className="w-full h-full border-t-2"></div>
        </div>
        {/* Age and Gender Section Finished */}
        {/* Location Section Start */}
        <div className="w-[60rem] h-96 shadow-sm  rounded-xl bg-white flex flex-col">
          <div className="w-full h-20 flex justify-between items-center px-10">
            <h1 className="font-bold text-gray-600">Locations</h1>
            <div className="flex gap-2 items-center">
              <p className="text-gray-500 font-medium">Respondents : </p>
              <p className="text-gray-500 font-medium">500</p>
            </div>
          </div>
          <div className="w-full h-full border-t-2"></div>
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
