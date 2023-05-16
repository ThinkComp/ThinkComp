import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const PromotionPoster = () => {
  const [posterLoading, setPosterLoading] = useState(false);
  const [promotionLoading, setPromotionLoading] = useState(false);

  const [posters, setPosters] = useState(null);
  const [promotions, setPromotions] = useState(null);

  const [promotionImage, setPromotionImage] = useState(null);
  const [promotionLink, setPromotionLink] = useState("");
  const promotionFIleInput = useRef();

  const promotionImageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPromotionImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const fetchBanners = async () => {
    await axios
      .get("/api/v1/banner")
      .then((res) => {
        setPromotions(res.data.promotions);
        setPosters(res.data.posters);
      })
      .catch((error) => console.log(error));
  };

  const handlePromotionSubmit = async () => {
    if (!promotionImage || promotionLink == "") return alert("enter both image & link");
    setPromotionLoading(true);
    await axios
      .post("/api/v1/banner/promotion", { avatar: promotionImage, link: promotionLink })
      .then((res) => {
        setPromotions([...promotions, res.data.promotion]);
        setPromotionImage(null);
        setPromotionLink("");
        setPromotionLoading(false);
        promotionFIleInput.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        setPromotionLoading(false);
      });
  };

  const handlePromotionDelete = async (id) => {
    setPromotionLoading(true);
    await axios
      .delete(`/api/v1/banner/promotion/${id}`)
      .then(() => {
        setPromotions(promotions.filter((item) => item._id != id));
        setPromotionLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setPromotionLoading(false);
      });
  };

  const [posterImage, setPosterImage] = useState(null);
  const [posterLink, setPosterLink] = useState("");
  const posterFIleInput = useRef();

  const posterImageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPosterImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handlePosterSubmit = async () => {
    if (!posterImage || posterLink == "") return alert("enter both image & link");
    setPosterLoading(true);
    await axios
      .post("/api/v1/banner/poster", { avatar: posterImage, link: posterLink })
      .then((res) => {
        setPosters([...posters, res.data.poster]);
        setPosterImage(null);
        setPosterLink("");
        setPosterLoading(false);
        posterFIleInput.current.value = "";
      })
      .catch((error) => {
        console.log(error);
        setPosterLoading(false);
      });
  };

  const handlePosterDelete = async (id) => {
    setPosterLoading(true);
    await axios
      .delete(`/api/v1/banner/poster/${id}`)
      .then(() => {
        setPosters(posters.filter((item) => item._id != id));
        setPosterLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setPosterLoading(false);
      });
  };

  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <div>
      <div className="my-6">
        <h3 className="text-xl font-medium text-black/70">Posters & Promotions</h3>
        <hr className="mt-2 mb-10 h-[2px] border-0 bg-gray-100" />
        <div className="flex overflow-x-scroll hide-scrollbar gap-8">
          {promotions?.map((item) => (
            <div className="flex flex-col w-[25rem]">
              <div className="relative bg-gray-100 rounded mb-2">
                <span className="text-black/60 font-bold w-full line-clamp-1">{item.link}</span>
                <div className="absolute right-0 text-green-700 top-0 text-xl cursor-pointer">
                  <i class="uil uil-edit-alt"></i>
                </div>
              </div>
              <img src={item?.url} className="w-full h-[10rem] object-contain" />
              <div className="mx-auto text-4xl text-red-700 mt-2 cursor-pointer">
                <button onClick={() => handlePromotionDelete(item._id)} disabled={promotionLoading && true}>
                  <i class="uil uil-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col w-[25rem]">
            <input
              type="text"
              className="bg-gray-100 mb-2 p-1 outline-none"
              placeholder="Link"
              onChange={(e) => setPromotionLink(e.target.value)}
              value={promotionLink}
            />
            <input type="file" className="hidden" id="promotionInput" onChange={promotionImageHandler} ref={promotionFIleInput} />
            {!promotionImage ? (
              <label htmlFor="promotionInput" className="h-[10rem] w-full bg-gray-100 rounded flex relative cursor-pointer">
                <div className="h-2 w-16 bg-yellow-300/60 m-auto"></div>
                <div className="h-16 w-2 bg-yellow-300/60 m-auto absolute inset-0"></div>
              </label>
            ) : (
              <img src={promotionImage} className="h-[10rem] object-contain" />
            )}

            <div className="mx-auto text-4xl text-green-500 cursor-pointer mt-2">
              <button onClick={handlePromotionSubmit} disabled={posterLoading && true}>
                <i class="uil uil-plus-square"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-scroll hide-scrollbar gap-12 mt-16">
          {posters?.map((item) => (
            <div className="flex flex-col w-[15rem]">
              <div className="relative bg-gray-100 rounded mb-2">
                <span className="text-black/60 font-bold line-clamp-1">{item.link}</span>
                <div className="absolute right-0 text-green-700 top-0 text-xl cursor-pointer">
                  <i class="uil uil-edit-alt"></i>
                </div>
              </div>
              <img src={item?.url} className="h-[12rem] object-contain" />
              <div className="mx-auto text-4xl text-red-700 mt-2 cursor-pointer">
                <button onClick={() => handlePosterDelete(item._id)} disabled={posterLoading && true}>
                  <i class="uil uil-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col">
            <input
              type="text"
              className="bg-gray-100 mb-2 outline-none"
              placeholder="Link"
              onChange={(e) => setPosterLink(e.target.value)}
              value={posterLink}
            />
            <input type="file" className="hidden" id="posterInput" onChange={posterImageHandler} ref={posterFIleInput} />
            {!posterImage ? (
              <label htmlFor="posterInput" className="h-[12rem] bg-gray-100 rounded flex relative cursor-pointer">
                <div className="h-2 w-16 bg-yellow-300/60 m-auto"></div>
                <div className="h-16 w-2 bg-yellow-300/60 m-auto absolute inset-0"></div>
              </label>
            ) : (
              <img src={posterImage} className="h-[12rem] object-contain" />
            )}

            <div className="mx-auto text-4xl text-green-500 cursor-pointer mt-2">
              <button onClick={handlePosterSubmit} disabled={posterLoading && true}>
                <i class="uil uil-plus-square"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPoster;
