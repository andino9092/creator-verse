import { Link, useNavigate } from "react-router-dom";

export interface CreatorProps {
  id: string;
  name: string;
  url: string;
  description: string;
  imageUrl: string;
}

export default function Creator(props: {
  creator: CreatorProps;
  deleteCreator?: (e: any) => void;
}) {
  const { name, url, description, imageUrl } = props.creator;

  const nav = useNavigate();

  const editCreator = (e: any) => {
    e.stopPropagation();
    nav("/edit", { state: props.creator});
  };

  return (
    <div className="flex flex-col relative gap-4">
        <div className="flex gap-5 h-[90px]">
            <img width={90} height={90} className="rounded-full object-cover" src={imageUrl} alt="imageUrl"></img>

            <div className="flex flex-col justify-center">
                <h1 className="flex items-center text-3xl">{name}
                </h1>
                <Link className="hover:underline" to={url} onClick={(e:any) => e.stopPropagation()}>Media </Link>

            </div>
        </div>
        <div className="text-lg overflow-y-hidden text-pretty text-ellipsis">
            <p className="line-clamp-5">
                {description}
            </p>
        </div>

      <div className="absolute top-0 right-0 flex-row flex gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6 z-1 hover:stroke-blue-600 transition-all" 
          onClick={editCreator}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6 hover:stroke-red-600 transition-all"
          onClick={props.deleteCreator}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}
