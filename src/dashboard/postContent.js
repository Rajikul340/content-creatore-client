import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addContentData from "../redux/thunk/AddContent";

const PostContent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState("");
   const date = new Date().toLocaleString();

  const handleInputChange = (event) => {
     
    const file = event.target.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const dispatch = useDispatch();

  const submit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=19900dd0d8e1013079c1d14e32346566",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((img) => {
        const photo_url = img.data.display_url;
        const contents = {
          title: data.title,
          description: data.description,
          tags:data.tags,
           Image: photo_url,
           date
        };
         console.log(contents);
        dispatch(addContentData(contents));
      });

    reset();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-2">Add Content</h1>
      <div className="flex justify-center items-center  md:mt-10 ">
        <form
          className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              className="border outline-0"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="tags">
              Tags
            </label>
            <input
              type="text"
              className="border outline-0"
              id="tags"
              required
              {...register("tags")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              required
              name="image"
              className="border outline-0"
              id="image"
              onChange={handleInputChange}
              {...register("image")}
            />
               {imagePreview && <img src={imagePreview} className="w-20 h-20" alt="Preview" />}
          </div>

          <div className="flex flex-col w-full ">
            <label className="mb-2" htmlFor="description">
              description
            </label>
            <textarea
              type="text"
              className=" textarea textarea-bordered h-24 "
              placeholder="content description"
              name="description"
              id="description"
              {...register("description")}
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <button
              className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostContent;
