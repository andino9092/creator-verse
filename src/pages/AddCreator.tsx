import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

export default function AddCreator({}) {
  const nav = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const url = formData.get("url");
    const description = formData.get("description");
    const imageUrl = formData.get("imageUrl");

    const response = await supabase.from("creators").insert([
      {
        name: name,
        url: url,
        description: description,
        imageUrl: imageUrl,
      },
    ]);

    if (response.status == 201){
        nav("/");
    }
    else{
        alert('Error! Response status ' + response.status + ' \n' + response.statusText)
    }

  };

  return (
    <div className="flex w-screen h-screen bg-neutral-200 justify-center items-center align-middle flex-col">
      <h1 className="text-neutral-700 font-semibold my-10"> Add a Creator</h1>
      <form
        className="flex flex-col gap-3 w-[50vw] mx-20 h-auto justify-start relative"
        onSubmit={onSubmit}
      >
        <input
          className="outline-none px-4 py-3 rounded-xl mx-10 bg-neutral-300 text-neutral-900 placeholder-neutral-400 font-semibold"
          name="name"
          placeholder="Creator"
          required
        />
        <input
          className="outline-none px-4 py-3 rounded-xl mx-10 bg-neutral-300 text-neutral-900 placeholder-neutral-400 font-semibold"
          name="url"
          placeholder="Social"
          required
        />
        <textarea
          className="outline-none min-h-[100px] px-4 py-3 rounded-xl mx-10 bg-neutral-300 text-neutral-900 placeholder-neutral-400 font-semibold"
          name="description"
          placeholder="Description"
          required
        />
        <input
          className="outline-none px-4 py-3 rounded-xl mx-10 bg-neutral-300 text-neutral-900 placeholder-neutral-400 font-semibold"
          name="imageUrl"
          placeholder="Image URL"
          required
        />
        <div className="mx-10 relative">
          <button
            className="hover:bg-neutral-900 hover:text-neutral-200 w-20 bg-green-600 text-neutral-200 absolute right-0  transition-all"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
