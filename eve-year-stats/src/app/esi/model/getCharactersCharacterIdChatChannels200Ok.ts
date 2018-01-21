/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { GetCharactersCharacterIdChatChannelsAllowed } from './getCharactersCharacterIdChatChannelsAllowed';
import { GetCharactersCharacterIdChatChannelsBlocked } from './getCharactersCharacterIdChatChannelsBlocked';
import { GetCharactersCharacterIdChatChannelsMuted } from './getCharactersCharacterIdChatChannelsMuted';
import { GetCharactersCharacterIdChatChannelsOperator } from './getCharactersCharacterIdChatChannelsOperator';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdChatChannels200Ok {
    /**
     * Unique channel ID. Always negative for player-created channels. Permanent (CCP created) channels have a positive ID, but don't appear in the API
     */
    channelId: number;

    /**
     * Displayed name of channel
     */
    name: string;

    /**
     * owner_id integer
     */
    ownerId: number;

    /**
     * Normalized, unique string used to compare channel names
     */
    comparisonKey: string;

    /**
     * If this is a password protected channel
     */
    hasPassword: boolean;

    /**
     * Message of the day for this channel
     */
    motd: string;

    /**
     * allowed array
     */
    allowed: Array<GetCharactersCharacterIdChatChannelsAllowed>;

    /**
     * operators array
     */
    operators: Array<GetCharactersCharacterIdChatChannelsOperator>;

    /**
     * blocked array
     */
    blocked: Array<GetCharactersCharacterIdChatChannelsBlocked>;

    /**
     * muted array
     */
    muted: Array<GetCharactersCharacterIdChatChannelsMuted>;

}
