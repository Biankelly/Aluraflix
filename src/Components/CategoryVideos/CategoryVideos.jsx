import React from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import Card from "../Card/Card";
import EditVideoForm from "../EditVideoForm/editVideoForm"; // Asegúrate de importar el formulario de edición
import { CategoryTitle, VideoList } from "./CategoryVideos.styled";

const CategoryVideos = () => {
  const { videoCategory, editingVideo } = useVideoContext();

  return (
    <div>
      {editingVideo && <EditVideoForm />} {/* Mostrar el formulario de edición si hay un video en edición */}
      
      {Object.keys(videoCategory).map((category) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <VideoList>
            {videoCategory[category].map((video) => (
              <Card key={video.id} video={video} />
            ))}
          </VideoList>
        </div>
      ))}
    </div>
  );
};

export default CategoryVideos;
