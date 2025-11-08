export const About_us = ({ blok }: any) => {
    
    return (
     <div
      className="p-8 py-16 bg-cover  bg-center bg-no-repeat text-white h-250 flex flex-col text-center"
      style={{ backgroundImage: `url(${blok.about_backgroundimg.filename})` }}
    >
      <div className="container mx-auto">
      <h3 className="text-7xl font-semibold mb-4 py-16 drop-shadow-2xl">{blok.about_title}</h3>
      <p className="text-gray-100 text-5xl mb-4 py-10 drop-shadow-2xl">{blok.about_text_main}</p>
      <p className="text-gray-200 text-2xl py-10 drop-shadow-2xl">{blok.about_text_secondary}</p>
    </div>
    </div>
    )
}