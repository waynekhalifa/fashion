import useAccount, { IAccountApi } from "./useAccount";
import useCategory, { ICategoryApi } from "./useCategory";
import useMedia, { IMediaApi } from "./useMedia";
import useMenu, { IMenuApi } from "./useMenu";
import useMenuItem, { IMenuItemApi } from "./useMenuItem";
import usePage, { IPageApi } from "./usePage";
import usePost, { IPostApi } from "./usePost";
import useTestimonial, { ITestimonialApi } from "./useTestimonial";
import useUser, { IUserApi } from "./useUser";

export interface IResourceApi
  extends IAccountApi,
    IUserApi,
    IPageApi,
    IPostApi,
    ICategoryApi,
    IMenuApi,
    IMenuItemApi,
    IMediaApi,
    ITestimonialApi {}

const useResource = (): IResourceApi => {
  const accountsApi = useAccount();
  const usersApi = useUser();
  const pagesApi = usePage();
  const postsApi = usePost();
  const categoriesApi = useCategory();
  const menusApi = useMenu();
  const menuItemsApi = useMenuItem();
  const mediaLibraryApi = useMedia();
  const testimonialsApi = useTestimonial();

  return {
    ...accountsApi,
    ...usersApi,
    ...pagesApi,
    ...postsApi,
    ...categoriesApi,
    ...menusApi,
    ...menuItemsApi,
    ...mediaLibraryApi,
    ...testimonialsApi,
  };
};

export default useResource;
