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
export interface GetCorporationsCorporationIdMedalsIssued200Ok {
    /**
     * medal_id integer
     */
    medalId: number;

    /**
     * ID of the character who was rewarded this medal
     */
    characterId: number;

    /**
     * reason string
     */
    reason: string;

    /**
     * status string
     */
    status: GetCorporationsCorporationIdMedalsIssued200Ok.StatusEnum;

    /**
     * ID of the character who issued the medal
     */
    issuerId: number;

    /**
     * issued_at string
     */
    issuedAt: Date;

}
export namespace GetCorporationsCorporationIdMedalsIssued200Ok {
    export enum StatusEnum {
        Private = <any> 'private',
        Public = <any> 'public'
    }
}
