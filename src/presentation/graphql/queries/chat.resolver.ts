import { Chat } from '@graphql/typescript/types';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('chat')
export class ChatResolver {
  @Query()
  async chat(@Args('id') id: number): Promise<Chat> {
    console.log(id);
    return Promise.resolve({
      admins: [],
      members: [],
      id: 'chatId',
      messages: [],
    });
  }
}
