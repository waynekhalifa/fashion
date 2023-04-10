import { Responses } from "@/constants/enums";
import useLoading from "@/hooks/useLoading";
import { Post } from "@/models";
import { IListingVariables, IResponse } from "@/models/app";
import { Box, Container, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ActionLoader from "../UI/ActionLoader/ActionLoader";
import usePost from "@/resources/usePost";
import Card from "../UI/Card";
import ImageContainer from "../ImageContainer";
import serialize from "@/helpers/slateSerialize";

interface Props {
  id: string;
}

type IState = {
  post: null | Post;
};

const INITIAL_STATE: IState = { post: null };

const SinglePost: React.FC<Props> = ({ id }) => {
  const [state, setState] = useState<IState>(INITIAL_STATE);
  const { post } = state;
  const { loading, setLoading } = useLoading();
  const { postsFetch } = usePost();

  const fetch = useCallback(async () => {
    const listingParams: IListingVariables = {
      searchText: "",
      limit: 1000,
      startIndex: 0,
      slug: id,
    };

    const response: IResponse[] = await Promise.all([
      postsFetch(listingParams),
    ]);

    const [pages] = response;

    if (pages.type === Responses.ERROR || pages.data.length === 0) {
      setLoading(false);
      return;
    }

    setState({ ...state, post: pages.data[0] });
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  if (loading) return <ActionLoader position="fixed" />;

  if (!post) return null;

  let html: any = "";

  if (post.content) html = { children: JSON.parse(post.content!) };

  return (
    <Box sx={{ py: { xs: 3, md: 8 } }}>
      <Container>
        <Card sx={{ p: 6 }}>
          <Typography fontWeight={700} variant="h4" paragraph>
            {post.title}
          </Typography>
          <Box id={post.id} sx={{ py: 2 }}>
            <ImageContainer
              boxID={post.id}
              alt={post.title}
              src={post.thumbnailURL!}
              width={post.thumbnailWidth!}
              height={post.thumbnailHeight!}
            />
          </Box>
          {typeof html !== "string" && (
            <>
              <Box
                sx={{
                  "& p": {
                    m: "4px",
                    fontFamily: "Tajawal,serif",
                    fontSize: "1rem",
                    lineHeight: "1.5",
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
        </Card>
      </Container>
    </Box>
  );
};

export default SinglePost;
