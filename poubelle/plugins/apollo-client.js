import { defineNuxtPlugin } from "#app"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
  // config variables instead of process.env
  const config = useRuntimeConfig();
  const uri_gql = config.public.GQL_HOST;
  console.log('apollo-client URI : ',uri_gql);

  // strapi uri
  const httpLink = createHttpLink({
    uri: uri_gql
  })

  //console.log('apollo-client httpLink : ', httpLink);

  // apollo client config
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
})