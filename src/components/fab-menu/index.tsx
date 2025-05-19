import { Fab, Zoom } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    open: boolean;
    toggle: () => void;
    editAction: () => void;
    deleteAction: () => void;
}

const FABMenu = ({ open, toggle, editAction, deleteAction }: Props) => {
    return (
        <>
            <Fab color="primary" aria-label="add" onClick={toggle}>
                <MenuIcon />
            </Fab>
            <Zoom in={open}>
                <Fab color="secondary" size="small" aria-label="edit" onClick={editAction}>
                    <EditIcon />
                </Fab>
            </Zoom>
            <Zoom in={open}>
                <Fab color="secondary" size="small" aria-label="share" onClick={deleteAction}>
                    <DeleteIcon />
                </Fab>
            </Zoom>
        </>
    )
}

export default FABMenu