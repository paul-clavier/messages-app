import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQLSchemaModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ChatResolver } from './queries/chat.resolver';

@Module({
  imports: [
    GraphQLSchemaModule.forRoot({
      typePaths: ['graphql/generated/schema.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [ChatResolver],
})
export class GraphQLModule {}
