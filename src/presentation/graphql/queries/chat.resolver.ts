import { Chat } from '@graphql/typescript/types';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver('chat')
export class ChatResolver {
  @Query()
  async chat(@Args('id') id: number): Promise<Chat> {
    console.log(id);
    return Promise.resolve({
      admins: [{ id: 'adminId', phoneNumber: '0606060606', pseudo: 'foo' }],
      members: [
        { id: 'memberId', phoneNumber: '070707', pseudo: 'bar' },
        { id: 'adminId', phoneNumber: '0606060606', pseudo: 'foo' },
      ],
      id: 'chatId',
    });
  }
}
