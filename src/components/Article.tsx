import dateFormat from "dateformat";
export default function Article(props: any) {
  const formatedDate = dateFormat(
    props.article.publication_date,
    "dd mmmm yyyy"
  );
  return (
    <div className="p-3">
      <a className="text-blue-600 hover:text-blue-800 visited:text-purple-600" href={props.article.doi} rel="noreferrer" target="_blank">
        {props.article.display_name}
      </a>
      <p>{formatedDate}</p>
    </div>
  );
}
