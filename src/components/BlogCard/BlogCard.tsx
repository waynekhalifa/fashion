import { Box, Typography } from "@mui/material";
import { Post } from "@/models";
import ImageContainer from "../ImageContainer/ImageContainer";
import serialize from "@/helpers/slateSerialize";
import Card from "../UI/Card";
import { useRouter } from "next/router";
import { Pages } from "@/constants/enums";

interface Props {
  post: Post;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  const { push } = useRouter();
  let html: any = "";

  if (post.content) html = { children: JSON.parse(post.excerpt!) };

  const handleClick = () => push(`/${Pages.BLOG}/` + post.slug);

  return (
    <Card sx={{ p: 0 }}>
      <Box
        id={"blog-card" + post.id}
        sx={{ position: "relative", mb: { xs: 3, md: 0 }, cursor: "pointer" }}
        onClick={handleClick}
      >
        <Box
          sx={{
            position: "absolute",
            left: 16,
            top: 16,
            background: "#FF0000",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            minWidth: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "common.white",
            zIndex: 1,
          }}
        >
          زائف
        </Box>
        <ImageContainer
          boxID={"blog-card" + post.id}
          src={post.thumbnailURL!}
          alt={post.title}
          width={post.thumbnailWidth!}
          height={post.thumbnailHeight!}
        />
        <Box sx={{ p: 2 }}>
          <Typography fontWeight={700} paragraph>
            {post.title}
          </Typography>
          {typeof html !== "string" && (
            <>
              <Box
                sx={{
                  "& p": {
                    m: "4px",
                    fontFamily: "Tajawal,serif",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    color: "text.secondary",
                  },
                  "& h2": {
                    fontFamily: "Tajawal,serif",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    lineHeight: "1.334",
                    color: "rgba(0, 0, 0, 0.87)",
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: serialize(html),
                }}
              />
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
