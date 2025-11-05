import { ProductionsList } from "./productions_list";

export const Project = async (props: any) => {
  return (
    <div>
      <h1>{props.blok.project_name}</h1>
      <h3>{props.blok.project_summary}</h3>
      <p>{props.blok.our_work}</p>

      {props.blok.final_image?.filename && (
        <img
          src={props.blok.final_image.filename}
          alt={props.blok.final_image.alt || ""}
          title={props.blok.final_image.title || ""}
          loading="lazy"
        />
      )}

      {/* Await the async component */}
      <ProductionsList />
    </div>
  );
};

