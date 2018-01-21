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
export interface GetCharactersCharacterIdOrders200Ok {
    /**
     * Unique order ID
     */
    orderId: number;

    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;

    /**
     * ID of the region where order was placed
     */
    regionId: number;

    /**
     * ID of the location where order was placed
     */
    locationId: number;

    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: GetCharactersCharacterIdOrders200Ok.RangeEnum;

    /**
     * True for a bid (buy) order. False for an offer (sell) order
     */
    isBuyOrder: boolean;

    /**
     * Cost per unit for this order
     */
    price: number;

    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;

    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;

    /**
     * Date and time when this order was issued
     */
    issued: Date;

    /**
     * Current order state
     */
    state: GetCharactersCharacterIdOrders200Ok.StateEnum;

    /**
     * For bids (buy orders), the minimum quantity that will be accepted in a matching offer (sell order)
     */
    minVolume: number;

    /**
     * Wallet division for the buyer or seller of this order. Always 1000 for characters. Currently 1000 through 1006 for corporations
     */
    accountId: number;

    /**
     * Numer of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;

    /**
     * is_corp boolean
     */
    isCorp: boolean;

    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow: number;

}
export namespace GetCharactersCharacterIdOrders200Ok {
    export enum RangeEnum {
        _1 = <any> '1',
        _10 = <any> '10',
        _2 = <any> '2',
        _20 = <any> '20',
        _3 = <any> '3',
        _30 = <any> '30',
        _4 = <any> '4',
        _40 = <any> '40',
        _5 = <any> '5',
        Region = <any> 'region',
        Solarsystem = <any> 'solarsystem',
        Station = <any> 'station'
    }
    export enum StateEnum {
        Cancelled = <any> 'cancelled',
        CharacterDeleted = <any> 'character_deleted',
        Closed = <any> 'closed',
        Expired = <any> 'expired',
        Open = <any> 'open',
        Pending = <any> 'pending'
    }
}
