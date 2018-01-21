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
export interface GetCharactersCharacterIdAssets200Ok {
    /**
     * type_id integer
     */
    typeId: number;

    /**
     * quantity integer
     */
    quantity: number;

    /**
     * location_id integer
     */
    locationId: number;

    /**
     * location_type string
     */
    locationType: GetCharactersCharacterIdAssets200Ok.LocationTypeEnum;

    /**
     * item_id integer
     */
    itemId: number;

    /**
     * location_flag string
     */
    locationFlag: GetCharactersCharacterIdAssets200Ok.LocationFlagEnum;

    /**
     * is_singleton boolean
     */
    isSingleton: boolean;

}
export namespace GetCharactersCharacterIdAssets200Ok {
    export enum LocationTypeEnum {
        Station = <any> 'station',
        SolarSystem = <any> 'solar_system',
        Other = <any> 'other'
    }
    export enum LocationFlagEnum {
        AssetSafety = <any> 'AssetSafety',
        AutoFit = <any> 'AutoFit',
        Cargo = <any> 'Cargo',
        CorpseBay = <any> 'CorpseBay',
        Deliveries = <any> 'Deliveries',
        DroneBay = <any> 'DroneBay',
        FighterBay = <any> 'FighterBay',
        FighterTube0 = <any> 'FighterTube0',
        FighterTube1 = <any> 'FighterTube1',
        FighterTube2 = <any> 'FighterTube2',
        FighterTube3 = <any> 'FighterTube3',
        FighterTube4 = <any> 'FighterTube4',
        FleetHangar = <any> 'FleetHangar',
        Hangar = <any> 'Hangar',
        HangarAll = <any> 'HangarAll',
        HiSlot0 = <any> 'HiSlot0',
        HiSlot1 = <any> 'HiSlot1',
        HiSlot2 = <any> 'HiSlot2',
        HiSlot3 = <any> 'HiSlot3',
        HiSlot4 = <any> 'HiSlot4',
        HiSlot5 = <any> 'HiSlot5',
        HiSlot6 = <any> 'HiSlot6',
        HiSlot7 = <any> 'HiSlot7',
        HiddenModifiers = <any> 'HiddenModifiers',
        Implant = <any> 'Implant',
        LoSlot0 = <any> 'LoSlot0',
        LoSlot1 = <any> 'LoSlot1',
        LoSlot2 = <any> 'LoSlot2',
        LoSlot3 = <any> 'LoSlot3',
        LoSlot4 = <any> 'LoSlot4',
        LoSlot5 = <any> 'LoSlot5',
        LoSlot6 = <any> 'LoSlot6',
        LoSlot7 = <any> 'LoSlot7',
        Locked = <any> 'Locked',
        MedSlot0 = <any> 'MedSlot0',
        MedSlot1 = <any> 'MedSlot1',
        MedSlot2 = <any> 'MedSlot2',
        MedSlot3 = <any> 'MedSlot3',
        MedSlot4 = <any> 'MedSlot4',
        MedSlot5 = <any> 'MedSlot5',
        MedSlot6 = <any> 'MedSlot6',
        MedSlot7 = <any> 'MedSlot7',
        QuafeBay = <any> 'QuafeBay',
        RigSlot0 = <any> 'RigSlot0',
        RigSlot1 = <any> 'RigSlot1',
        RigSlot2 = <any> 'RigSlot2',
        RigSlot3 = <any> 'RigSlot3',
        RigSlot4 = <any> 'RigSlot4',
        RigSlot5 = <any> 'RigSlot5',
        RigSlot6 = <any> 'RigSlot6',
        RigSlot7 = <any> 'RigSlot7',
        ShipHangar = <any> 'ShipHangar',
        Skill = <any> 'Skill',
        SpecializedAmmoHold = <any> 'SpecializedAmmoHold',
        SpecializedCommandCenterHold = <any> 'SpecializedCommandCenterHold',
        SpecializedFuelBay = <any> 'SpecializedFuelBay',
        SpecializedGasHold = <any> 'SpecializedGasHold',
        SpecializedIndustrialShipHold = <any> 'SpecializedIndustrialShipHold',
        SpecializedLargeShipHold = <any> 'SpecializedLargeShipHold',
        SpecializedMaterialBay = <any> 'SpecializedMaterialBay',
        SpecializedMediumShipHold = <any> 'SpecializedMediumShipHold',
        SpecializedMineralHold = <any> 'SpecializedMineralHold',
        SpecializedOreHold = <any> 'SpecializedOreHold',
        SpecializedPlanetaryCommoditiesHold = <any> 'SpecializedPlanetaryCommoditiesHold',
        SpecializedSalvageHold = <any> 'SpecializedSalvageHold',
        SpecializedShipHold = <any> 'SpecializedShipHold',
        SpecializedSmallShipHold = <any> 'SpecializedSmallShipHold',
        SubSystemBay = <any> 'SubSystemBay',
        SubSystemSlot0 = <any> 'SubSystemSlot0',
        SubSystemSlot1 = <any> 'SubSystemSlot1',
        SubSystemSlot2 = <any> 'SubSystemSlot2',
        SubSystemSlot3 = <any> 'SubSystemSlot3',
        SubSystemSlot4 = <any> 'SubSystemSlot4',
        SubSystemSlot5 = <any> 'SubSystemSlot5',
        SubSystemSlot6 = <any> 'SubSystemSlot6',
        SubSystemSlot7 = <any> 'SubSystemSlot7',
        Unlocked = <any> 'Unlocked',
        Wardrobe = <any> 'Wardrobe'
    }
}
