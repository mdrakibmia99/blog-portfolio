import { baseApi } from "../api/baseApi";



const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    AllBlog: builder.query({
      query: () => ({
        url: `/blog`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    specificBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    // createProduct: builder.mutation({
    //   query: (data) => ({
    //     url: `/products`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["product"],
    // }),

    // updateProduct: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: `/products/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["product"],
    // }),

    // deleteProduct: builder.mutation({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["product"],
    // }),
  }),
});

export const {
    useSpecificBlogQuery,
    useAllBlogQuery

} = blogApi;