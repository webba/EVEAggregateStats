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
 * combat object
 */
export interface GetCharactersCharacterIdStatsCombat {
    /**
     * cap_drainedby_npc integer
     */
    capDrainedbyNpc?: number;

    /**
     * cap_drainedby_pc integer
     */
    capDrainedbyPc?: number;

    /**
     * cap_draining_pc integer
     */
    capDrainingPc?: number;

    /**
     * criminal_flag_set integer
     */
    criminalFlagSet?: number;

    /**
     * damage_from_np_cs_amount integer
     */
    damageFromNpCsAmount?: number;

    /**
     * damage_from_np_cs_num_shots integer
     */
    damageFromNpCsNumShots?: number;

    /**
     * damage_from_players_bomb_amount integer
     */
    damageFromPlayersBombAmount?: number;

    /**
     * damage_from_players_bomb_num_shots integer
     */
    damageFromPlayersBombNumShots?: number;

    /**
     * damage_from_players_combat_drone_amount integer
     */
    damageFromPlayersCombatDroneAmount?: number;

    /**
     * damage_from_players_combat_drone_num_shots integer
     */
    damageFromPlayersCombatDroneNumShots?: number;

    /**
     * damage_from_players_energy_amount integer
     */
    damageFromPlayersEnergyAmount?: number;

    /**
     * damage_from_players_energy_num_shots integer
     */
    damageFromPlayersEnergyNumShots?: number;

    /**
     * damage_from_players_fighter_bomber_amount integer
     */
    damageFromPlayersFighterBomberAmount?: number;

    /**
     * damage_from_players_fighter_bomber_num_shots integer
     */
    damageFromPlayersFighterBomberNumShots?: number;

    /**
     * damage_from_players_fighter_drone_amount integer
     */
    damageFromPlayersFighterDroneAmount?: number;

    /**
     * damage_from_players_fighter_drone_num_shots integer
     */
    damageFromPlayersFighterDroneNumShots?: number;

    /**
     * damage_from_players_hybrid_amount integer
     */
    damageFromPlayersHybridAmount?: number;

    /**
     * damage_from_players_hybrid_num_shots integer
     */
    damageFromPlayersHybridNumShots?: number;

    /**
     * damage_from_players_missile_amount integer
     */
    damageFromPlayersMissileAmount?: number;

    /**
     * damage_from_players_missile_num_shots integer
     */
    damageFromPlayersMissileNumShots?: number;

    /**
     * damage_from_players_projectile_amount integer
     */
    damageFromPlayersProjectileAmount?: number;

    /**
     * damage_from_players_projectile_num_shots integer
     */
    damageFromPlayersProjectileNumShots?: number;

    /**
     * damage_from_players_smart_bomb_amount integer
     */
    damageFromPlayersSmartBombAmount?: number;

    /**
     * damage_from_players_smart_bomb_num_shots integer
     */
    damageFromPlayersSmartBombNumShots?: number;

    /**
     * damage_from_players_super_amount integer
     */
    damageFromPlayersSuperAmount?: number;

    /**
     * damage_from_players_super_num_shots integer
     */
    damageFromPlayersSuperNumShots?: number;

    /**
     * damage_from_structures_total_amount integer
     */
    damageFromStructuresTotalAmount?: number;

    /**
     * damage_from_structures_total_num_shots integer
     */
    damageFromStructuresTotalNumShots?: number;

    /**
     * damage_to_players_bomb_amount integer
     */
    damageToPlayersBombAmount?: number;

    /**
     * damage_to_players_bomb_num_shots integer
     */
    damageToPlayersBombNumShots?: number;

    /**
     * damage_to_players_combat_drone_amount integer
     */
    damageToPlayersCombatDroneAmount?: number;

    /**
     * damage_to_players_combat_drone_num_shots integer
     */
    damageToPlayersCombatDroneNumShots?: number;

    /**
     * damage_to_players_energy_amount integer
     */
    damageToPlayersEnergyAmount?: number;

    /**
     * damage_to_players_energy_num_shots integer
     */
    damageToPlayersEnergyNumShots?: number;

    /**
     * damage_to_players_fighter_bomber_amount integer
     */
    damageToPlayersFighterBomberAmount?: number;

    /**
     * damage_to_players_fighter_bomber_num_shots integer
     */
    damageToPlayersFighterBomberNumShots?: number;

    /**
     * damage_to_players_fighter_drone_amount integer
     */
    damageToPlayersFighterDroneAmount?: number;

    /**
     * damage_to_players_fighter_drone_num_shots integer
     */
    damageToPlayersFighterDroneNumShots?: number;

    /**
     * damage_to_players_hybrid_amount integer
     */
    damageToPlayersHybridAmount?: number;

    /**
     * damage_to_players_hybrid_num_shots integer
     */
    damageToPlayersHybridNumShots?: number;

    /**
     * damage_to_players_missile_amount integer
     */
    damageToPlayersMissileAmount?: number;

    /**
     * damage_to_players_missile_num_shots integer
     */
    damageToPlayersMissileNumShots?: number;

    /**
     * damage_to_players_projectile_amount integer
     */
    damageToPlayersProjectileAmount?: number;

    /**
     * damage_to_players_projectile_num_shots integer
     */
    damageToPlayersProjectileNumShots?: number;

    /**
     * damage_to_players_smart_bomb_amount integer
     */
    damageToPlayersSmartBombAmount?: number;

    /**
     * damage_to_players_smart_bomb_num_shots integer
     */
    damageToPlayersSmartBombNumShots?: number;

    /**
     * damage_to_players_super_amount integer
     */
    damageToPlayersSuperAmount?: number;

    /**
     * damage_to_players_super_num_shots integer
     */
    damageToPlayersSuperNumShots?: number;

    /**
     * damage_to_structures_total_amount integer
     */
    damageToStructuresTotalAmount?: number;

    /**
     * damage_to_structures_total_num_shots integer
     */
    damageToStructuresTotalNumShots?: number;

    /**
     * deaths_high_sec integer
     */
    deathsHighSec?: number;

    /**
     * deaths_low_sec integer
     */
    deathsLowSec?: number;

    /**
     * deaths_null_sec integer
     */
    deathsNullSec?: number;

    /**
     * deaths_pod_high_sec integer
     */
    deathsPodHighSec?: number;

    /**
     * deaths_pod_low_sec integer
     */
    deathsPodLowSec?: number;

    /**
     * deaths_pod_null_sec integer
     */
    deathsPodNullSec?: number;

    /**
     * deaths_pod_wormhole integer
     */
    deathsPodWormhole?: number;

    /**
     * deaths_wormhole integer
     */
    deathsWormhole?: number;

    /**
     * drone_engage integer
     */
    droneEngage?: number;

    /**
     * dscans integer
     */
    dscans?: number;

    /**
     * duel_requested integer
     */
    duelRequested?: number;

    /**
     * engagement_register integer
     */
    engagementRegister?: number;

    /**
     * kills_assists integer
     */
    killsAssists?: number;

    /**
     * kills_high_sec integer
     */
    killsHighSec?: number;

    /**
     * kills_low_sec integer
     */
    killsLowSec?: number;

    /**
     * kills_null_sec integer
     */
    killsNullSec?: number;

    /**
     * kills_pod_high_sec integer
     */
    killsPodHighSec?: number;

    /**
     * kills_pod_low_sec integer
     */
    killsPodLowSec?: number;

    /**
     * kills_pod_null_sec integer
     */
    killsPodNullSec?: number;

    /**
     * kills_pod_wormhole integer
     */
    killsPodWormhole?: number;

    /**
     * kills_wormhole integer
     */
    killsWormhole?: number;

    /**
     * npc_flag_set integer
     */
    npcFlagSet?: number;

    /**
     * probe_scans integer
     */
    probeScans?: number;

    /**
     * pvp_flag_set integer
     */
    pvpFlagSet?: number;

    /**
     * repair_armor_by_remote_amount integer
     */
    repairArmorByRemoteAmount?: number;

    /**
     * repair_armor_remote_amount integer
     */
    repairArmorRemoteAmount?: number;

    /**
     * repair_armor_self_amount integer
     */
    repairArmorSelfAmount?: number;

    /**
     * repair_capacitor_by_remote_amount integer
     */
    repairCapacitorByRemoteAmount?: number;

    /**
     * repair_capacitor_remote_amount integer
     */
    repairCapacitorRemoteAmount?: number;

    /**
     * repair_capacitor_self_amount integer
     */
    repairCapacitorSelfAmount?: number;

    /**
     * repair_hull_by_remote_amount integer
     */
    repairHullByRemoteAmount?: number;

    /**
     * repair_hull_remote_amount integer
     */
    repairHullRemoteAmount?: number;

    /**
     * repair_hull_self_amount integer
     */
    repairHullSelfAmount?: number;

    /**
     * repair_shield_by_remote_amount integer
     */
    repairShieldByRemoteAmount?: number;

    /**
     * repair_shield_remote_amount integer
     */
    repairShieldRemoteAmount?: number;

    /**
     * repair_shield_self_amount integer
     */
    repairShieldSelfAmount?: number;

    /**
     * self_destructs integer
     */
    selfDestructs?: number;

    /**
     * warp_scramble_pc integer
     */
    warpScramblePc?: number;

    /**
     * warp_scrambledby_npc integer
     */
    warpScrambledbyNpc?: number;

    /**
     * warp_scrambledby_pc integer
     */
    warpScrambledbyPc?: number;

    /**
     * weapon_flag_set integer
     */
    weaponFlagSet?: number;

    /**
     * webifiedby_npc integer
     */
    webifiedbyNpc?: number;

    /**
     * webifiedby_pc integer
     */
    webifiedbyPc?: number;

    /**
     * webifying_pc integer
     */
    webifyingPc?: number;

}
