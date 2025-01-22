import React, { useState, useEffect } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "./EditVideoForm.styled";

const EditVideoForm = () => {
const { editingVideo, updateVideo, cancelEditMode } = useVideoContext();
const [videoData, setVideoData] = useState(editingVideo);

useEffect(() => {
    setVideoData(editingVideo); // Sincronizar el estado local con el video que se está editando
}, [editingVideo]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoData((prevData) => ({ ...prevData, [name]: value }));
};

const handleSave = () => {
    updateVideo(videoData.id, videoData); // Guardar los cambios
    cancelEditMode(); // Cerrar el modal
};

const handleCancel = () => {
    cancelEditMode(); // Cerrar el modal sin guardar
};

  if (!editingVideo) return null; // No mostrar nada si no se está editando un video

return (
    <ModalOverlay>
    <ModalContent>
        <ModalHeader>
        <h2>Editar Video</h2>
        <button onClick={handleCancel}>X</button>
        </ModalHeader>
        <ModalBody>
        <label>
            Título:
            <input
                type="text"
                name="titulo"
                value={videoData.titulo || ""}
                onChange={handleChange}
            />
        </label>
        <label>
            Descripción:
            <textarea
                name="descricao"
                value={videoData.descricao || ""}
                onChange={handleChange}
            />
        </label>
            <label>
            Enlace de Imagen:
            <input
                type="text"
                name="img"
                value={videoData.img || ""}
                onChange={handleChange}
            />
            </label>
            <label>
            Enlace de Video:
            <input
                type="text"
                name="video"
                value={videoData.video || ""}
                onChange={handleChange}
            />
            </label>
        </ModalBody>
        <ModalFooter>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
        </ModalFooter>
    </ModalContent>
    </ModalOverlay>
);
};

export default EditVideoForm;
