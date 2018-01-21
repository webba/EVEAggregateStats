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
 * market object
 */
export interface GetCharactersCharacterIdStatsMarket {
    /**
     * accept_contracts_courier integer
     */
    acceptContractsCourier?: number;

    /**
     * accept_contracts_item_exchange integer
     */
    acceptContractsItemExchange?: number;

    /**
     * buy_orders_placed integer
     */
    buyOrdersPlaced?: number;

    /**
     * cancel_market_order integer
     */
    cancelMarketOrder?: number;

    /**
     * create_contracts_auction integer
     */
    createContractsAuction?: number;

    /**
     * create_contracts_courier integer
     */
    createContractsCourier?: number;

    /**
     * create_contracts_item_exchange integer
     */
    createContractsItemExchange?: number;

    /**
     * deliver_courier_contract integer
     */
    deliverCourierContract?: number;

    /**
     * isk_gained integer
     */
    iskGained?: number;

    /**
     * isk_spent integer
     */
    iskSpent?: number;

    /**
     * modify_market_order integer
     */
    modifyMarketOrder?: number;

    /**
     * search_contracts integer
     */
    searchContracts?: number;

    /**
     * sell_orders_placed integer
     */
    sellOrdersPlaced?: number;

}
