import { useEffect, useState } from "react";
import usePlant from "../../hooks/use-plant";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import { useNavigate, useParams } from "react-router";
import { Box } from "@mui/material";
import useAuth from "../../hooks/use-auth";
import FABMenu from "../../components/fab-menu";

const QR = () => {
  const { plant, getSingle, deletePlant, isError } = usePlant<IPlant>();
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();

  console.log(isLoggedIn);
  
  
   const [open, setOpen] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    getSingle(id as string);
  }, []);

  const handleToggle = () => {
        setOpen(prev => !prev);
    };

    const handleEdit = () => {
        navigate(`/plant/update/${id}`)
    }

    const handleDelete = async () => {
        await deletePlant(plant._id);
        if (!isError)
            navigate('/plants')
    }

  return (
    <>
      <iframe
        src={plant.link}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title={plant.name}
      />
      {isLoggedIn && (<Box
                sx={{
                    position: 'fixed',
                    top: 95,
                    right: 36,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <FABMenu open={open} toggle={handleToggle} editAction={handleEdit} deleteAction={handleDelete} />
            </Box>)}
    </>
  );
};

export default QR;
