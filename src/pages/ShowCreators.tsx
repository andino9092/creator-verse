import { useEffect, useState } from "react";
import { supabase } from "../client";
import Creator, { CreatorProps } from "../components/creator";
import { useNavigate } from "react-router-dom";

export default function ShowCreators({}) {
  const [creators, setCreators] = useState<CreatorProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const nav = useNavigate();

  const getCreators = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("creators").select("*");
    setLoading(false);
    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
    setCreators(data);
  };

  useEffect(() => {
    getCreators();
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div className="flex flex-col w-screen h-auto text-neutral-700 justify-center">
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center font-semibold py-[50px] relative">
            CreatorVerse
          </h1>
          <div className="flex justify-center flex-row gap-8 flex-wrap h-auto">
            {creators.length != 0 ? (
              creators.map((creator: CreatorProps, i: number) => {
                return (
                  <div
                    className="bg-neutral-300 shadow-lg hover:scale-110 transition-all shadow-neutral-400 w-[33vw] h-[350px] px-8 py-6 "
                    key={i}
                    onClick={(e: any) => {
                      nav("/view/" + creator.id, { state: { ...creator } });
                    }}
                  >
                    <Creator
                      creator={creator}
                      deleteCreator={async (e: any) => {
                        e.stopPropagation();
                        setLoading(true);
                        const response = await supabase
                          .from("creators")
                          .delete()
                          .eq("id", creator.id);
                        setLoading(false);

                        if (response.status != 204) {
                          console.log(response.statusText);
                          return;
                        }
                        getCreators();
                      }}
                    ></Creator>
                  </div>
                );
              })
            ) : (
              <div>No creators in the DB</div>
            )}
          </div>

          <div
            className="flex justify-center my-4 font-semibold hover:bg-green-600 hover:text-neutral-200 rounded-lg transition-all w-[15vw] py-2"
            onClick={(e: any) => {
              e.preventDefault();
              nav("/add");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add a creator
          </div>
        </div>
      )}
    </div>
  );
}
