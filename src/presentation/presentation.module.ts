import { Module } from '@nestjs/common';
import { GraphQLModule } from './graphql/graphql.module';

@Module({
  imports: [GraphQLModule],
  controllers: [],
  providers: [],
})
export class PresentationModule {}
