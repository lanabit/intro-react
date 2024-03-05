export default function Works(){
  return(
    <div>
      <div className="flex flex-col font-syne py-24">
        <div>
          <p className="flex text-4xl font-medium mx-auto ">Works</p>
        </div>
          <div className="grid grid-cols-2 gap-16 w-[70%] mx-auto my-32">
            <div className="max-w-m rounded-lg overflow-hidden border-2 border-slate-800 group">
            <a href="https://wulantsabita.notion.site/Sociolla-Design-System-a3ce6c96ac04418ebf5abb9c9d64613d" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover object-top" src="/src/assets/images/work1.png"/>
              <div className="px-6 py-4 group-hover:bg-violet-200">
                <div className="font-syne text-xl mb-2">Sociolla Design System</div>
                <p className="text-gray-800 text-base">Case Study - Figma - UI/UX</p>
              </div></a>
            </div>
            <div className="max-w-m rounded-lg overflow-hidden border-2 border-slate-800 group">
            <a href="https://wulantsabita.notion.site/Emergency-Button-for-Halodoc-App-b106975419604b3ea860d51e63faac0f" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover object-top" src="/src/assets/images/work2.png"/>
              <div className="px-6 py-4 group-hover:bg-violet-200">
                <div className="font-syne text-xl mb-2">Halodoc Emergency Button</div>
                <p className="text-gray-800 text-base">Case Study - Figma - UI/UX</p>
              </div></a>
            </div>
            <div className="max-w-m rounded-lg overflow-hidden border-2 border-slate-800 group">
            <a href="https://www.instagram.com/light.and.soil/" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover object-top" src="/src/assets/images/work3.png"/>
              <div className="px-6 py-4 group-hover:bg-violet-200">
                <div className="font-syne text-xl mb-2">Light & Soil</div>
                <p className="text-gray-800 text-base">Graphic Design - Figma - Social Media</p>
              </div></a>
            </div>
            <div className="max-w-m rounded-lg overflow-hidden border-2 border-slate-800 group">
            <a href="https://www.etsy.com/shop/TsukiMarine?" target="_blank" rel="noopener noreferrer">
              <img className="w-full h-64 object-cover object-top" src="/work4.jpg"/>
              <div className="px-6 py-4 group-hover:bg-violet-200">
                <div className="font-syne text-xl mb-2">Tsuki Marine</div>
                <p className="text-gray-800 text-base">Illustration & Motion Design - PS - AE </p>
              </div></a>
            </div>
          </div>
          </div>
    </div>
  )
}