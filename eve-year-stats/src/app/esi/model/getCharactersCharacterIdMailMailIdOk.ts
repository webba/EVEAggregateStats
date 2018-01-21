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

import { GetCharactersCharacterIdMailMailIdRecipient } from './getCharactersCharacterIdMailMailIdRecipient';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdMailMailIdOk {
    /**
     * Mail subject
     */
    subject?: string;

    /**
     * From whom the mail was sent
     */
    from?: number;

    /**
     * When the mail was sent
     */
    timestamp?: Date;

    /**
     * Recipients of the mail
     */
    recipients?: Array<GetCharactersCharacterIdMailMailIdRecipient>;

    /**
     * Mail's body
     */
    body?: string;

    /**
     * Labels attached to the mail
     */
    labels?: Array<number>;

    /**
     * Whether the mail is flagged as read
     */
    read?: boolean;

}
