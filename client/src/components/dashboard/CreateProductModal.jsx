import axios from "axios";
import React, { useState } from "react";

const CreateProductModal = ({ modalOn, toggleModal }) => {
  const [name, setName] = useState(null);
  const [orignalPrice, setOringalPrice] = useState(null);
  const [weight, setWeight] = useState(null);
  const [skuId, setSkuId] = useState(null);
  const [type, setType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState("none");
  const [subCategory, setSubCategory] = useState("none");
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category == "none" || subCategory == "none") return alert("choose category and subcategory");

    await axios
      .post("/api/v1/product", { name, orignalPrice, weight, skuId, type, quantity, category, subCategory, description, image })
      .then((res) => {
        toggleModal(false);
        console.log(res.data.product);
      })
      .catch((error) => console.log(error));
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div
      className={`z-20 fixed flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-black/[0.4] ${
        !modalOn && "hidden"
      }`}
    >
      <div className="bg-white flex flex-col items-center px-[2rem] py-[5rem] relative">
        <span className="absolute right-[3rem] top-[3rem] font-bold cursor-pointer" onClick={() => toggleModal(false)}>
          Close
        </span>
        <h1 className="font-black text-3xl mb-[3rem]">ADD PRODUCT</h1>
        <div className="flex gap-[2rem]">
          <div>
            <input type="file" className="hidden" id="imageInput" onChange={handleImageChange} />
            <label htmlFor="imageInput" className="p-[10rem] flex items-center rounded border-[2px] border-dotted" required>
              Image Input
            </label>
          </div>
          <form className="flex flex-col gap-[2rem]" onSubmit={handleSubmit}>
            <div className="flex gap-10">
              <input
                type="number"
                placeholder="Price"
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none w-full"
                required
                onChange={(e) => setOringalPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="SKU ID"
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none w-full"
                required
                onChange={(e) => setSkuId(e.target.value)}
              />
              <input
                type="number"
                placeholder="Total QTY"
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none w-full"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex gap-10 items-center">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input type="radio" id="sna" name="type" className="w-[1rem] h-[1rem]" required onChange={(e) => setType("sna")} />
              <label htmlFor="sna">SNA</label>
              <input type="radio" id="gmt" name="type" className="w-[1rem] h-[1rem]" required onChange={(e) => setType("gmt")} />
              <label htmlFor="gmt">GMT</label>
              <input
                type="radio"
                id="other"
                name="type"
                className="w-[1rem] h-[1rem]"
                required
                onChange={(e) => setType("other")}
              />
              <label htmlFor="other">OTHER</label>
              <input
                type="number"
                placeholder="Weight"
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none"
                required
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="flex gap-[2rem]">
              <select
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none w-full"
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="none">Category</option>
                <option value="anything">Anything</option>
              </select>
              <select
                className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none w-full"
                required
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="none">Sub Category</option>
                <option value="anything">Anything</option>
              </select>
            </div>
            <textarea
              name="description"
              cols="30"
              rows="5"
              className="bg-gray-100 px-[2rem] py-[1rem] rounded-xl outline-none resize-none"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className="font-bold bg-[#fcb800] px-4 py-3 w-[15rem] rounded-xl text-black/70 text-md xl:text-xl mt-[2rem] mx-auto">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
