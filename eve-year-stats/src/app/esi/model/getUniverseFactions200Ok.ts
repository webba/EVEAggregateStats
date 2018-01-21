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



/**
 * 200 ok object
 */
export interface GetUniverseFactions200Ok {
    /**
     * faction_id integer
     */
    factionId: number;

    /**
     * name string
     */
    name: string;

    /**
     * description string
     */
    description: string;

    /**
     * solar_system_id integer
     */
    solarSystemId?: number;

    /**
     * corporation_id integer
     */
    corporationId?: number;

    /**
     * militia_corporation_id integer
     */
    militiaCorporationId?: number;

    /**
     * size_factor number
     */
    sizeFactor: number;

    /**
     * station_count integer
     */
    stationCount: number;

    /**
     * station_system_count integer
     */
    stationSystemCount: number;

    /**
     * is_unique boolean
     */
    isUnique: boolean;

}
