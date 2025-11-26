import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import usePost from "../../hooks/use-post";
import { deleteSinglePost, type IPost } from "../../hooks/use-post/index.actions";
import { useEffect, useState } from "react";
import { url } from "../../utils/axios/constants";
import FABMenu from "../../components/fab-menu";
import useAuth from "../../hooks/use-auth";

export default function SinglePost() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const {getSingle, post, isError} = usePost<IPost>();
    const {isLoggedIn} = useAuth();  

  useEffect(() => {
    if (id) {
      getSingle(id);
    }
  }, [id]);

   const [open, setOpen] = useState(false);
  
    useEffect(() => {
      getSingle(id as string);
    }, []);
  
    const handleToggle = () => {
          setOpen(prev => !prev);
      };
  
      const handleEdit = () => {
          navigate(`/post/update/${id}`)
      }
  
      const handleDelete = async () => {
          await deleteSinglePost(post._id);
          if (!isError)
              navigate('/posts')
      }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
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
      {/* Header */}
      <Box
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #e2e8f0",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            sx={{ mb: 2 }}
          >
            Inapoi la Activitati
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
              {post.title}
            </Typography>
          </Box>
          <Chip
            label={post.category}
            sx={{
              backgroundColor: "#d1fae5",
              fontWeight: 500,
            }}
          />
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Images Gallery */}
        {Array.isArray(post.imageNames) && post.imageNames.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <ImageList
              variant="masonry"
              cols={post.imageNames.length === 1 ? 1 : 2}
              gap={16}
            >
              {post.imageNames.map((image, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${url}/uploads/${image}`}
                    alt={`${post.title} - Image ${index + 1}`}
                    loading="lazy"
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        )}

        {/* HTML Content */}
        <Box
          sx={{
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 1,
            "& h2": {
              fontSize: "1.875rem",
              fontWeight: 700,
              color: "#0f172a",
              mb: 2,
              mt: 3,
            },
            "& h3": {
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#334155",
              mb: 2,
              mt: 3,
            },
            "& p": {
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#475569",
              mb: 2,
            },
            "& ul": {
              pl: 3,
              mb: 2,
            },
            "& li": {
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#475569",
              mb: 1,
            },
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </Box>
  );
}
