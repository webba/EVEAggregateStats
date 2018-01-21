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
 * Full details of a specific event
 */
export interface GetCharactersCharacterIdCalendarEventIdOk {
    /**
     * event_id integer
     */
    eventId: number;

    /**
     * owner_id integer
     */
    ownerId: number;

    /**
     * owner_name string
     */
    ownerName: string;

    /**
     * date string
     */
    date: Date;

    /**
     * title string
     */
    title: string;

    /**
     * Length in minutes
     */
    duration: number;

    /**
     * importance integer
     */
    importance: number;

    /**
     * response string
     */
    response: string;

    /**
     * text string
     */
    text: string;

    /**
     * owner_type string
     */
    ownerType: GetCharactersCharacterIdCalendarEventIdOk.OwnerTypeEnum;

}
export namespace GetCharactersCharacterIdCalendarEventIdOk {
    export enum OwnerTypeEnum {
        EveServer = <any> 'eve_server',
        Corporation = <any> 'corporation',
        Faction = <any> 'faction',
        Character = <any> 'character',
        Alliance = <any> 'alliance'
    }
}
