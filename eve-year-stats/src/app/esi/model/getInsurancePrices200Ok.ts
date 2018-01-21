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

import { GetInsurancePricesLevel } from './getInsurancePricesLevel';


/**
 * 200 ok object
 */
export interface GetInsurancePrices200Ok {
    /**
     * type_id integer
     */
    typeId: number;

    /**
     * A list of a available insurance levels for this ship type
     */
    levels: Array<GetInsurancePricesLevel>;

}
