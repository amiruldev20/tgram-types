import type { WebAppInfo } from "./markup.ts";

export interface BotName {
    /* name bot */
    name: string;
}

export interface BotDescription {
    /* description bot */
    description: string;
}

export interface BotShortDescription {
    /* short descrption bot */
    short_description: string;
}

export type MenuButton =
    | MenuButtonCommands
    | MenuButtonWebApp
    | MenuButtonDefault;

export interface MenuButtonCommands {
    type: "commands";
}

export interface MenuButtonWebApp {
    /* tipe */
    type: "web_app";
    /* text button */
    text: string;
    /* desc */
    web_app: WebAppInfo;
}

export interface MenuButtonDefault {
    type: "default";
}

export type BotCommandScope =
    | BotCommandScopeDefault
    | BotCommandScopeAllPrivateChats
    | BotCommandScopeAllGroupChats
    | BotCommandScopeAllChatAdministrators
    | BotCommandScopeChat
    | BotCommandScopeChatAdministrators
    | BotCommandScopeChatMember;

export interface BotCommandScopeDefault {
    type: "default";
}

export interface BotCommandScopeAllPrivateChats {
    type: "all_private_chats";
}

export interface BotCommandScopeAllGroupChats {
    type: "all_group_chats";
}

export interface BotCommandScopeAllChatAdministrators {
    type: "all_chat_administrators";
}

export interface BotCommandScopeChat {
    type: "chat";
    chat_id: number | string;
}

export interface BotCommandScopeChatAdministrators {
    type: "chat_administrators";
    chat_id: number | string;
}

export interface BotCommandScopeChatMember {
    type: "chat_member";
    chat_id: number | string;
    user_id: number;
}