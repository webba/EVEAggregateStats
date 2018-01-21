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

import { GetKillmailsKillmailIdKillmailHashItem1 } from './getKillmailsKillmailIdKillmailHashItem1';
import { GetKillmailsKillmailIdKillmailHashPosition } from './getKillmailsKillmailIdKillmailHashPosition';


/**
 * victim object
 */
export interface GetKillmailsKillmailIdKillmailHashVictim {
    /**
     * character_id integer
     */
    characterId?: number;

    /**
     * corporation_id integer
     */
    corporationId?: number;

    /**
     * alliance_id integer
     */
    allianceId?: number;

    /**
     * faction_id integer
     */
    factionId?: number;

    /**
     * How much total damage was taken by the victim 
     */
    damageTaken: number;

    /**
     * The ship that the victim was piloting and was destroyed 
     */
    shipTypeId: number;

    /**
     * items array
     */
    items?: Array<GetKillmailsKillmailIdKillmailHashItem1>;

    position?: GetKillmailsKillmailIdKillmailHashPosition;

}
