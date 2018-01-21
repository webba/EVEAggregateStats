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
export interface GetMarketsRegionIdOrders200Ok {
    /**
     * order_id integer
     */
    orderId: number;

    /**
     * type_id integer
     */
    typeId: number;

    /**
     * location_id integer
     */
    locationId: number;

    /**
     * volume_total integer
     */
    volumeTotal: number;

    /**
     * volume_remain integer
     */
    volumeRemain: number;

    /**
     * min_volume integer
     */
    minVolume: number;

    /**
     * price number
     */
    price: number;

    /**
     * is_buy_order boolean
     */
    isBuyOrder: boolean;

    /**
     * duration integer
     */
    duration: number;

    /**
     * issued string
     */
    issued: Date;

    /**
     * range string
     */
    range: GetMarketsRegionIdOrders200Ok.RangeEnum;

}
export namespace GetMarketsRegionIdOrders200Ok {
    export enum RangeEnum {
        Station = <any> 'station',
        Region = <any> 'region',
        Solarsystem = <any> 'solarsystem',
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _10 = <any> '10',
        _20 = <any> '20',
        _30 = <any> '30',
        _40 = <any> '40'
    }
}
