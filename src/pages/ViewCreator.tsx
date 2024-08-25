import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function ViewCreator({}) {
  const nav = useNavigate();
  const location = useLocation();
  const { name, url, description, imageUrl } = location.state;

  console.log(location);
  const editCreator = (e: any) => {
    e.stopPropagation();
    nav("/edit", { state: location.state });
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto flex items-center justify-center">
      <div className="w-[66vw] relative">
        <div className="flex gap-5 mx-4 h-[200px]">
          <img
            width={200}
            height={200}
            className="rounded-full object-cover"
            src={imageUrl}
            alt="imageUrl"
          ></img>

          <div className="flex flex-col justify-center">
            <h1 className="flex items-center text-3xl">{name}</h1>
            <Link
              className="hover:underline"
              to={url}
              onClick={(e: any) => e.stopPropagation()}
            >
              Media{" "}
            </Link>
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
        </div>
        </div>
        <div className="mx-10 my-4">{description}</div>
      </div>
    </div>
  );
}
