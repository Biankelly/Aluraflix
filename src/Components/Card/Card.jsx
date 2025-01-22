import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CardActions, CardContainer, CardImage, IconButton } from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const { deleteVideo, startEditing } = useVideoContext();

  const handleEdit = () => {
    startEditing(video); // Establecer el video que se va a editar
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
