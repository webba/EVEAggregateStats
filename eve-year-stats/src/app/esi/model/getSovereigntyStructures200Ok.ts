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
export interface GetSovereigntyStructures200Ok {
    /**
     * The alliance that owns the structure. 
     */
    allianceId: number;

    /**
     * Solar system in which the structure is located. 
     */
    solarSystemId: number;

    /**
     * Unique item ID for this structure.
     */
    structureId: number;

    /**
     * A reference to the type of structure this is. 
     */
    structureTypeId: number;

    /**
     * The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure. 
     */
    vulnerabilityOccupancyLevel?: number;

    /**
     * The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime. 
     */
    vulnerableStartTime?: Date;

    /**
     * The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated. 
     */
    vulnerableEndTime?: Date;

}
