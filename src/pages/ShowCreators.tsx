import { useEffect, useState } from "react";
import { supabase } from "../client";
import Creator, { CreatorProps } from "../components/creator";
import { Route, useNavigate } from "react-router-dom";

export default function ShowCreators({}) {
  const [creators, setCreators] = useState<CreatorProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const nav = useNavigate()
    
  useEffect(() => {
    const getNames = async () => {
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

    getNames();
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div>
      SHOWING HERE
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          {creators.length != 0 ? (
            creators.map((creator: CreatorProps, i: number) => {
              return (
                <div key={i} onClick={() => nav('/view/' + creator.id)}>
                  <Creator {...creator}></Creator>
                </div>
              );
            })
          ) : (
            <div>No creators in the DB</div>
          )}
        </div>
      )}
      <Route path="/view"></Route>
    </div>
  );
}
