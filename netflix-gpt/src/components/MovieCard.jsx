import React, { useState } from "react";
import { TMDB_IMG_PATH } from "../utils/constants";
import { Modal } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const MovieCard = ({ posterPath, title, overview, voteAvg, backdropImg }) => {
  const [open, setOpen] = useState(false);

  if (!posterPath) return null;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        className="w-44 flex-shrink-0 mx-2 cursor-pointer"
        onClick={handleOpen}
      >
        <img className="" src={TMDB_IMG_PATH + posterPath} alt={title} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-black border-black text-white w-3/4 md:w-1/2 mx-auto right-0 left-0 mt-24">
          <img
            className="w-full"
            src={TMDB_IMG_PATH + backdropImg}
            alt={title}
          />
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-2xl">{title}</h1>
              <div className="flex justify-center items-center text-green-500">
                <StarIcon />
                &nbsp;
                <h1 className="font-semibold text-lg">{voteAvg}</h1>
              </div>
            </div>
            <br />
            <p className="font-semibold">{overview}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MovieCard;
