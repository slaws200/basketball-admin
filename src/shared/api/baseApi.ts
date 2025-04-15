
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://dev.trainee.dex-it.ru/api/' }),
  endpoints: () => ({}),
  });

export const {  } = baseApi;
