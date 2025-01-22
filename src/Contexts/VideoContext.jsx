import { createContext, useContext, useState, useEffect } from "react";
import { getVideos, saveVideo as addVideoService, deleteVideo as deleteVideoService, updateVideo as updateVideoService } from "../Services/api";

const VideosContext = createContext();

export const useVideoContext = () => {
  return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null); // Agregar el estado de video en edición

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await getVideos();
        const initializedVideos = videoData.map((video) => ({
          ...video,
          img: video.img || "", // Inicializa `img` si no existe
          video: video.video || "", // Inicializa `video` si no existe
        }));
        setVideos(initializedVideos);
        setLoading(false);
      } catch (error) {
        console.error("Error al buscar videos", error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);  

  const addVideo = async (newVideo) => {
    try {
      const addedVideo = await addVideoService(newVideo);
      setVideos((prevVideos) => [...prevVideos, addedVideo]);
    } 
    catch (error) {
      console.error("Erroe al añadir video", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
    } catch (error) {
      console.error("Error al eliminar video", error);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const updatedData = await updateVideoService(videoId, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId
            ? { ...video, ...updatedData, img: updatedData.img || video.img, video: updatedData.video || video.video }
            : video
        )
      );
    } catch (error) {
      console.error("Error al actualizar video", error);
    }
  };  

  const startEditing = (video) => {
    setEditingVideo({
      ...video,
      img: video.img || "", // Inicializa `img` si no existe
      video: video.video || "", // Inicializa `video` si no existe
    });
  };  

  const cancelEditMode = () => {
    setEditingVideo(null); // Cancelar modo de edición
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
        editingVideo, // Proveer el video en edición
        startEditing, // Proveer la función para comenzar la edición
        cancelEditMode, // Proveer la función para cancelar la edición
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
