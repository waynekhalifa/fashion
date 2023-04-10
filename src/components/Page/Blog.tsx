import { Account, Page, Post } from "@/models";
import { Box, Container, Grid } from "@mui/material";
import ImageContainer from "../ImageContainer";
import SectionTitle from "../UI/SectionTitle";
import usePost from "@/resources/usePost";
import { useCallback, useEffect } from "react";
import { IListingVariables, IResponse } from "@/models/app";
import { useSelector } from "react-redux";
import { selectSelected as selectAccount } from "@/store/accountSlice";
import { selectListing as selectPosts } from "@/store/postSlice";
import { Responses } from "@/constants/enums";
import useLoading from "@/hooks/useLoading";
import BlogCard from "../BlogCard";
import ActionLoader from "../UI/ActionLoader/ActionLoader";

interface Props {
  page: Page;
}

const Blog: React.FC<Props> = ({ page }) => {
  const selectedAccount: Account | null = useSelector(selectAccount);
  const posts: Post[] = useSelector(selectPosts);
  const { loading, setLoading } = useLoading();
  const { postsFetch, postsChangeListings } = usePost();

  const fetch = useCallback(async () => {
    if (!selectedAccount) return null;

    const listingParams: IListingVariables = {
      searchText: "",
      limit: 20,
      startIndex: 0,
      accountID: selectedAccount.id,
    };

    const response: IResponse[] = await Promise.all([
      postsFetch(listingParams),
    ]);

    const [posts] = response;

    if (posts.type === Responses.ERROR || posts.data.length === 0) {
      setLoading(false);
      return;
    }

    postsChangeListings(posts.data);

    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();

    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ py: { xs: 3, md: 8 } }}>
      <Container>
        <Grid container alignItems={"center"} sx={{ mb: 4 }}>
          {page.thumbnail && (
            <Box id={page.id} sx={{ width: 64 }}>
              <ImageContainer
                boxID={page.id}
                alt={page.title}
                src={page.thumbnailURL!}
                width={page.thumbnailWidth!}
                height={page.thumbnailHeight!}
              />
            </Box>
          )}
          <Box>
            <SectionTitle maxWidth="100%" variant="h4">
              {page.title}
            </SectionTitle>
          </Box>
        </Grid>
        {loading && <ActionLoader position="absolute" />}
        {!loading && posts.length === 0 && <p>No posts found.</p>}
        {!loading && posts.length > 0 && (
          <Grid container>
            {posts.map((post: Post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <BlogCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Blog;
