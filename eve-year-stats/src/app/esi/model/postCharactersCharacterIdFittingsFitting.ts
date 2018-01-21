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

import { PostCharactersCharacterIdFittingsItem } from './postCharactersCharacterIdFittingsItem';


/**
 * fitting object
 */
export interface PostCharactersCharacterIdFittingsFitting {
    /**
     * name string
     */
    name: string;

    /**
     * description string
     */
    description: string;

    /**
     * ship_type_id integer
     */
    shipTypeId: number;

    /**
     * items array
     */
    items: Array<PostCharactersCharacterIdFittingsItem>;

}
