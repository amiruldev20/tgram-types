import type { ChosenInlineResult, InlineQuery } from "./inline.ts";
import type {
  Chat,
  ChatJoinRequest,
  ChatMemberUpdated,
  User,
} from "./manage.ts";
import type { CallbackQuery } from "./markup.ts";
import type { Message, Poll, PollAnswer } from "./message.ts";
import type { PreCheckoutQuery, ShippingQuery } from "./payment.ts";

export declare namespace Update {

  export interface Channel {
    chat: Chat.ChannelChat;
  }

  export interface NonChannel {
    chat: Exclude<Chat, Chat.ChannelChat>;
    from: User;
  }
  
  export interface Edited {
    edit_date: number;
  }
}

export interface Update {
  update_id: number;
  message?: Message & Update.NonChannel;
  edited_message?: Message & Update.Edited & Update.NonChannel;
  channel_post?: Message & Update.Channel;
  edited_channel_post?: Message & Update.Edited & Update.Channel;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
  poll_answer?: PollAnswer;
  my_chat_member?: ChatMemberUpdated;
  chat_member?: ChatMemberUpdated;
  chat_join_request?: ChatJoinRequest;
}