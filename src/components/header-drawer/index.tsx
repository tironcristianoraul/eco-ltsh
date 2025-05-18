import { Box, Button, Divider, Drawer, IconButton, List, ListItem, Tooltip, Typography } from '@mui/material';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Headerlink } from '../header/index.styled';
import useAuth from '../../hooks/use-auth';
import { useNavigate } from 'react-router';
import Logo from '../logo';

type Props = {
    open: boolean;
    toggleDrawer: () => void;
}

const HeaderDrawer = ({ open, toggleDrawer }: Props) => {

    const { logout, isLoggedIn } = useAuth();
    const nav = useNavigate();

    return <Drawer open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer}>
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListItem>
                    <Logo fontSize={30} />
                </ListItem>
                <ListItem>
                    <Headerlink to={"/"}>Acasă</Headerlink>
                </ListItem>
                <Divider component='li' />
                <ListItem>
                    <Headerlink to={"/post"}>Posts</Headerlink>
                </ListItem>
                <Divider />
                {!isLoggedIn ? (
                    <Button variant="contained" onClick={() => nav("/sign-in")}>
                        <Typography>Sign In</Typography>
                    </Button>
                ) : (
                    <ListItem>
                        <Headerlink to={"/add"}>Add</Headerlink>
                        <Tooltip title='Delogare'>
                            <IconButton color="primary" onClick={logout}>
                                <LogoutOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </ListItem>
                )}
            </List>
        </Box>
    </Drawer>;
};

export default HeaderDrawer