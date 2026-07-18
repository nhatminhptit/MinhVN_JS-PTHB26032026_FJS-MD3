import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => "posts",
    }),

    likePost: builder.mutation<
      any,
      { postId: number; currentLikeStatus: boolean }
    >({
      query: ({ postId }) => ({
        url: `posts/${postId}`,
        method: "PUT",
      }),

      async onQueryStarted(
        { postId, currentLikeStatus },
        { dispatch, queryFulfilled },
      ) {
        const patchResult = dispatch(
          postApi.util.updateQueryData("getPosts", undefined, (draft) => {
            const post = draft.posts.find((p: any) => p.id === postId);
            if (post) {
              post.isLiked = !currentLikeStatus;
            }
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetPostsQuery, useLikePostMutation } = postApi;
