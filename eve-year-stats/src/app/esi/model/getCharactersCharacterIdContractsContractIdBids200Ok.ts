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
export interface GetCharactersCharacterIdContractsContractIdBids200Ok {
    /**
     * Unique ID for the bid
     */
    bidId: number;

    /**
     * Character ID of the bidder
     */
    bidderId: number;

    /**
     * Datetime when the bid was placed
     */
    dateBid: Date;

    /**
     * The amount bid, in ISK
     */
    amount: number;

}
