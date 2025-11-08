export const production_link = ({ blok }: any) => {
  const baseUrl = "/localhost:3000/";  // Hardcoded part of the URL
  const fullUrl = `${baseUrl}${blok.production_link}`;  // Concatenate with the link from Storyblok
  return (
    <div className="p-4">
      <h3 className="text-3xl font-normal  mb-2" >
        <a
          href={blok.production_link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >{blok.production_title}</a>
      </h3>
    </div>
  );
};