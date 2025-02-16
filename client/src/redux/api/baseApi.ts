/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    BaseQueryApi,
    BaseQueryFn,
    createApi,
    DefinitionType,
    FetchArgs,
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";

import { toast } from "sonner";
import { sonarId } from "@/utils/sonarId";

  
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api'  ,
    credentials: "include",

  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOption): Promise<any> => {
    const result:any = await baseQuery(args, api, extraOption);
    if (result?.error?.status === 401) {
        toast.error(result?.error?.data?.message, { id: sonarId });
    }
    if (result?.error?.status === 500) {
        toast.error(result?.error?.data?.message || 'Server error!! try again', { id: sonarId });
      }
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['blogs','projects','messages'],
    endpoints: () => ({}),
  });