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
export interface GetCharactersCharacterIdContracts200Ok {
    /**
     * contract_id integer
     */
    contractId: number;

    /**
     * Character ID for the issuer
     */
    issuerId: number;

    /**
     * Character's corporation ID for the issuer
     */
    issuerCorporationId: number;

    /**
     * ID to whom the contract is assigned, can be corporation or character ID
     */
    assigneeId: number;

    /**
     * Who will accept the contract
     */
    acceptorId: number;

    /**
     * Start location ID (for Couriers contract)
     */
    startLocationId?: number;

    /**
     * End location ID (for Couriers contract)
     */
    endLocationId?: number;

    /**
     * Type of the contract
     */
    type: GetCharactersCharacterIdContracts200Ok.TypeEnum;

    /**
     * Status of the the contract
     */
    status: GetCharactersCharacterIdContracts200Ok.StatusEnum;

    /**
     * Title of the contract
     */
    title?: string;

    /**
     * true if the contract was issued on behalf of the issuer's corporation
     */
    forCorporation: boolean;

    /**
     * To whom the contract is available
     */
    availability: GetCharactersCharacterIdContracts200Ok.AvailabilityEnum;

    /**
     * Сreation date of the contract
     */
    dateIssued: Date;

    /**
     * Expiration date of the contract
     */
    dateExpired: Date;

    /**
     * Date of confirmation of contract
     */
    dateAccepted?: Date;

    /**
     * Number of days to perform the contract
     */
    daysToComplete?: number;

    /**
     * Date of completed of contract
     */
    dateCompleted?: Date;

    /**
     * Price of contract (for ItemsExchange and Auctions)
     */
    price?: number;

    /**
     * Remuneration for contract (for Couriers only)
     */
    reward?: number;

    /**
     * Collateral price (for Couriers only)
     */
    collateral?: number;

    /**
     * Buyout price (for Auctions only)
     */
    buyout?: number;

    /**
     * Volume of items in the contract
     */
    volume?: number;

}
export namespace GetCharactersCharacterIdContracts200Ok {
    export enum TypeEnum {
        Unknown = <any> 'unknown',
        ItemExchange = <any> 'item_exchange',
        Auction = <any> 'auction',
        Courier = <any> 'courier',
        Loan = <any> 'loan'
    }
    export enum StatusEnum {
        Outstanding = <any> 'outstanding',
        InProgress = <any> 'in_progress',
        FinishedIssuer = <any> 'finished_issuer',
        FinishedContractor = <any> 'finished_contractor',
        Finished = <any> 'finished',
        Cancelled = <any> 'cancelled',
        Rejected = <any> 'rejected',
        Failed = <any> 'failed',
        Deleted = <any> 'deleted',
        Reversed = <any> 'reversed'
    }
    export enum AvailabilityEnum {
        Public = <any> 'public',
        Personal = <any> 'personal',
        Corporation = <any> 'corporation',
        Alliance = <any> 'alliance'
    }
}
