import { useRouter } from "next/router";

export const useBlogPostsHook = () => {
  const router: any = useRouter();

  const handlePageChange = (e: any, { activePage, tag }: any) => {
    console.log(activePage);
    router.push({
      pathname: router.pathname,
      query: { page: activePage },
    });
  };

  return {
    handlePageChange,
  };
};
