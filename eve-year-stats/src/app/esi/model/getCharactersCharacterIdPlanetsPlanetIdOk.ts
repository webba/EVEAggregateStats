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

import { GetCharactersCharacterIdPlanetsPlanetIdLink } from './getCharactersCharacterIdPlanetsPlanetIdLink';
import { GetCharactersCharacterIdPlanetsPlanetIdPin } from './getCharactersCharacterIdPlanetsPlanetIdPin';
import { GetCharactersCharacterIdPlanetsPlanetIdRoute } from './getCharactersCharacterIdPlanetsPlanetIdRoute';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdOk {
    /**
     * links array
     */
    links: Array<GetCharactersCharacterIdPlanetsPlanetIdLink>;

    /**
     * pins array
     */
    pins: Array<GetCharactersCharacterIdPlanetsPlanetIdPin>;

    /**
     * routes array
     */
    routes: Array<GetCharactersCharacterIdPlanetsPlanetIdRoute>;

}
