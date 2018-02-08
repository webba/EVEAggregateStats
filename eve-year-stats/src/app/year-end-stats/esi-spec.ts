export const ESIProperties = {
	'character': {
		'type': 'object',
		'properties': {
			'days_of_activity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_days_of_activity',
				'description': 'days_of_activity integer'
			},
			'minutes': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_minutes',
				'description': 'minutes integer'
			},
			'sessions_started': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_sessions_started',
				'description': 'sessions_started integer'
			}
		},
		'title': 'get_characters_character_id_stats_character',
		'description': 'character object'
	},
	'combat': {
		'type': 'object',
		'properties': {
			'cap_drainedby_npc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_cap_drainedby_npc',
				'description': 'cap_drainedby_npc integer'
			},
			'cap_drainedby_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_cap_drainedby_pc',
				'description': 'cap_drainedby_pc integer'
			},
			'cap_draining_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_cap_draining_pc',
				'description': 'cap_draining_pc integer'
			},
			'criminal_flag_set': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_criminal_flag_set',
				'description': 'criminal_flag_set integer'
			},
			'damage_from_np_cs_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_np_cs_amount',
				'description': 'damage_from_np_cs_amount integer'
			},
			'damage_from_np_cs_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_np_cs_num_shots',
				'description': 'damage_from_np_cs_num_shots integer'
			},
			'damage_from_players_bomb_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_bomb_amount',
				'description': 'damage_from_players_bomb_amount integer'
			},
			'damage_from_players_bomb_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_bomb_num_shots',
				'description': 'damage_from_players_bomb_num_shots integer'
			},
			'damage_from_players_combat_drone_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_combat_drone_amount',
				'description': 'damage_from_players_combat_drone_amount integer'
			},
			'damage_from_players_combat_drone_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_combat_drone_num_shots',
				'description': 'damage_from_players_combat_drone_num_shots integer'
			},
			'damage_from_players_energy_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_energy_amount',
				'description': 'damage_from_players_energy_amount integer'
			},
			'damage_from_players_energy_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_energy_num_shots',
				'description': 'damage_from_players_energy_num_shots integer'
			},
			'damage_from_players_fighter_bomber_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_fighter_bomber_amount',
				'description': 'damage_from_players_fighter_bomber_amount integer'
			},
			'damage_from_players_fighter_bomber_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_fighter_bomber_num_shots',
				'description': 'damage_from_players_fighter_bomber_num_shots integer'
			},
			'damage_from_players_fighter_drone_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_fighter_drone_amount',
				'description': 'damage_from_players_fighter_drone_amount integer'
			},
			'damage_from_players_fighter_drone_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_fighter_drone_num_shots',
				'description': 'damage_from_players_fighter_drone_num_shots integer'
			},
			'damage_from_players_hybrid_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_hybrid_amount',
				'description': 'damage_from_players_hybrid_amount integer'
			},
			'damage_from_players_hybrid_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_hybrid_num_shots',
				'description': 'damage_from_players_hybrid_num_shots integer'
			},
			'damage_from_players_missile_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_missile_amount',
				'description': 'damage_from_players_missile_amount integer'
			},
			'damage_from_players_missile_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_missile_num_shots',
				'description': 'damage_from_players_missile_num_shots integer'
			},
			'damage_from_players_projectile_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_projectile_amount',
				'description': 'damage_from_players_projectile_amount integer'
			},
			'damage_from_players_projectile_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_projectile_num_shots',
				'description': 'damage_from_players_projectile_num_shots integer'
			},
			'damage_from_players_smart_bomb_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_smart_bomb_amount',
				'description': 'damage_from_players_smart_bomb_amount integer'
			},
			'damage_from_players_smart_bomb_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_smart_bomb_num_shots',
				'description': 'damage_from_players_smart_bomb_num_shots integer'
			},
			'damage_from_players_super_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_super_amount',
				'description': 'damage_from_players_super_amount integer'
			},
			'damage_from_players_super_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_players_super_num_shots',
				'description': 'damage_from_players_super_num_shots integer'
			},
			'damage_from_structures_total_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_structures_total_amount',
				'description': 'damage_from_structures_total_amount integer'
			},
			'damage_from_structures_total_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_from_structures_total_num_shots',
				'description': 'damage_from_structures_total_num_shots integer'
			},
			'damage_to_players_bomb_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_bomb_amount',
				'description': 'damage_to_players_bomb_amount integer'
			},
			'damage_to_players_bomb_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_bomb_num_shots',
				'description': 'damage_to_players_bomb_num_shots integer'
			},
			'damage_to_players_combat_drone_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_combat_drone_amount',
				'description': 'damage_to_players_combat_drone_amount integer'
			},
			'damage_to_players_combat_drone_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_combat_drone_num_shots',
				'description': 'damage_to_players_combat_drone_num_shots integer'
			},
			'damage_to_players_energy_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_energy_amount',
				'description': 'damage_to_players_energy_amount integer'
			},
			'damage_to_players_energy_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_energy_num_shots',
				'description': 'damage_to_players_energy_num_shots integer'
			},
			'damage_to_players_fighter_bomber_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_fighter_bomber_amount',
				'description': 'damage_to_players_fighter_bomber_amount integer'
			},
			'damage_to_players_fighter_bomber_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_fighter_bomber_num_shots',
				'description': 'damage_to_players_fighter_bomber_num_shots integer'
			},
			'damage_to_players_fighter_drone_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_fighter_drone_amount',
				'description': 'damage_to_players_fighter_drone_amount integer'
			},
			'damage_to_players_fighter_drone_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_fighter_drone_num_shots',
				'description': 'damage_to_players_fighter_drone_num_shots integer'
			},
			'damage_to_players_hybrid_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_hybrid_amount',
				'description': 'damage_to_players_hybrid_amount integer'
			},
			'damage_to_players_hybrid_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_hybrid_num_shots',
				'description': 'damage_to_players_hybrid_num_shots integer'
			},
			'damage_to_players_missile_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_missile_amount',
				'description': 'damage_to_players_missile_amount integer'
			},
			'damage_to_players_missile_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_missile_num_shots',
				'description': 'damage_to_players_missile_num_shots integer'
			},
			'damage_to_players_projectile_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_projectile_amount',
				'description': 'damage_to_players_projectile_amount integer'
			},
			'damage_to_players_projectile_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_projectile_num_shots',
				'description': 'damage_to_players_projectile_num_shots integer'
			},
			'damage_to_players_smart_bomb_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_smart_bomb_amount',
				'description': 'damage_to_players_smart_bomb_amount integer'
			},
			'damage_to_players_smart_bomb_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_smart_bomb_num_shots',
				'description': 'damage_to_players_smart_bomb_num_shots integer'
			},
			'damage_to_players_super_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_super_amount',
				'description': 'damage_to_players_super_amount integer'
			},
			'damage_to_players_super_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_players_super_num_shots',
				'description': 'damage_to_players_super_num_shots integer'
			},
			'damage_to_structures_total_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_structures_total_amount',
				'description': 'damage_to_structures_total_amount integer'
			},
			'damage_to_structures_total_num_shots': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_damage_to_structures_total_num_shots',
				'description': 'damage_to_structures_total_num_shots integer'
			},
			'deaths_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_high_sec',
				'description': 'deaths_high_sec integer'
			},
			'deaths_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_low_sec',
				'description': 'deaths_low_sec integer'
			},
			'deaths_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_null_sec',
				'description': 'deaths_null_sec integer'
			},
			'deaths_pod_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_pod_high_sec',
				'description': 'deaths_pod_high_sec integer'
			},
			'deaths_pod_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_pod_low_sec',
				'description': 'deaths_pod_low_sec integer'
			},
			'deaths_pod_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_pod_null_sec',
				'description': 'deaths_pod_null_sec integer'
			},
			'deaths_pod_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_pod_wormhole',
				'description': 'deaths_pod_wormhole integer'
			},
			'deaths_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deaths_wormhole',
				'description': 'deaths_wormhole integer'
			},
			'drone_engage': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_drone_engage',
				'description': 'drone_engage integer'
			},
			'dscans': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_dscans',
				'description': 'dscans integer'
			},
			'duel_requested': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_duel_requested',
				'description': 'duel_requested integer'
			},
			'engagement_register': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_engagement_register',
				'description': 'engagement_register integer'
			},
			'kills_assists': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_assists',
				'description': 'kills_assists integer'
			},
			'kills_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_high_sec',
				'description': 'kills_high_sec integer'
			},
			'kills_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_low_sec',
				'description': 'kills_low_sec integer'
			},
			'kills_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_null_sec',
				'description': 'kills_null_sec integer'
			},
			'kills_pod_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_pod_high_sec',
				'description': 'kills_pod_high_sec integer'
			},
			'kills_pod_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_pod_low_sec',
				'description': 'kills_pod_low_sec integer'
			},
			'kills_pod_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_pod_null_sec',
				'description': 'kills_pod_null_sec integer'
			},
			'kills_pod_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_pod_wormhole',
				'description': 'kills_pod_wormhole integer'
			},
			'kills_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_kills_wormhole',
				'description': 'kills_wormhole integer'
			},
			'npc_flag_set': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_npc_flag_set',
				'description': 'npc_flag_set integer'
			},
			'probe_scans': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_probe_scans',
				'description': 'probe_scans integer'
			},
			'pvp_flag_set': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_pvp_flag_set',
				'description': 'pvp_flag_set integer'
			},
			'repair_armor_by_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_armor_by_remote_amount',
				'description': 'repair_armor_by_remote_amount integer'
			},
			'repair_armor_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_armor_remote_amount',
				'description': 'repair_armor_remote_amount integer'
			},
			'repair_armor_self_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_armor_self_amount',
				'description': 'repair_armor_self_amount integer'
			},
			'repair_capacitor_by_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_capacitor_by_remote_amount',
				'description': 'repair_capacitor_by_remote_amount integer'
			},
			'repair_capacitor_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_capacitor_remote_amount',
				'description': 'repair_capacitor_remote_amount integer'
			},
			'repair_capacitor_self_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_capacitor_self_amount',
				'description': 'repair_capacitor_self_amount integer'
			},
			'repair_hull_by_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_hull_by_remote_amount',
				'description': 'repair_hull_by_remote_amount integer'
			},
			'repair_hull_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_hull_remote_amount',
				'description': 'repair_hull_remote_amount integer'
			},
			'repair_hull_self_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_hull_self_amount',
				'description': 'repair_hull_self_amount integer'
			},
			'repair_shield_by_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_shield_by_remote_amount',
				'description': 'repair_shield_by_remote_amount integer'
			},
			'repair_shield_remote_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_shield_remote_amount',
				'description': 'repair_shield_remote_amount integer'
			},
			'repair_shield_self_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repair_shield_self_amount',
				'description': 'repair_shield_self_amount integer'
			},
			'self_destructs': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_self_destructs',
				'description': 'self_destructs integer'
			},
			'warp_scramble_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warp_scramble_pc',
				'description': 'warp_scramble_pc integer'
			},
			'warp_scrambledby_npc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warp_scrambledby_npc',
				'description': 'warp_scrambledby_npc integer'
			},
			'warp_scrambledby_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warp_scrambledby_pc',
				'description': 'warp_scrambledby_pc integer'
			},
			'weapon_flag_set': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_weapon_flag_set',
				'description': 'weapon_flag_set integer'
			},
			'webifiedby_npc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_webifiedby_npc',
				'description': 'webifiedby_npc integer'
			},
			'webifiedby_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_webifiedby_pc',
				'description': 'webifiedby_pc integer'
			},
			'webifying_pc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_webifying_pc',
				'description': 'webifying_pc integer'
			}
		},
		'title': 'get_characters_character_id_stats_combat',
		'description': 'combat object'
	},
	'industry': {
		'type': 'object',
		'properties': {
			'hacking_successes': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_hacking_successes',
				'description': 'hacking_successes integer'
			},
			'jobs_cancelled': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_cancelled',
				'description': 'jobs_cancelled integer'
			},
			'jobs_completed_copy_blueprint': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_copy_blueprint',
				'description': 'jobs_completed_copy_blueprint integer'
			},
			'jobs_completed_invention': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_invention',
				'description': 'jobs_completed_invention integer'
			},
			'jobs_completed_manufacture': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture',
				'description': 'jobs_completed_manufacture integer'
			},
			'jobs_completed_manufacture_asteroid': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_asteroid',
				'description': 'jobs_completed_manufacture_asteroid integer'
			},
			'jobs_completed_manufacture_asteroid_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_asteroid_quantity',
				'description': 'jobs_completed_manufacture_asteroid_quantity integer'
			},
			'jobs_completed_manufacture_charge': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_charge',
				'description': 'jobs_completed_manufacture_charge integer'
			},
			'jobs_completed_manufacture_charge_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_charge_quantity',
				'description': 'jobs_completed_manufacture_charge_quantity integer'
			},
			'jobs_completed_manufacture_commodity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_commodity',
				'description': 'jobs_completed_manufacture_commodity integer'
			},
			'jobs_completed_manufacture_commodity_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_commodity_quantity',
				'description': 'jobs_completed_manufacture_commodity_quantity integer'
			},
			'jobs_completed_manufacture_deployable': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_deployable',
				'description': 'jobs_completed_manufacture_deployable integer'
			},
			'jobs_completed_manufacture_deployable_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_deployable_quantity',
				'description': 'jobs_completed_manufacture_deployable_quantity integer'
			},
			'jobs_completed_manufacture_drone': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_drone',
				'description': 'jobs_completed_manufacture_drone integer'
			},
			'jobs_completed_manufacture_drone_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_drone_quantity',
				'description': 'jobs_completed_manufacture_drone_quantity integer'
			},
			'jobs_completed_manufacture_implant': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_implant',
				'description': 'jobs_completed_manufacture_implant integer'
			},
			'jobs_completed_manufacture_implant_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_implant_quantity',
				'description': 'jobs_completed_manufacture_implant_quantity integer'
			},
			'jobs_completed_manufacture_module': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_module',
				'description': 'jobs_completed_manufacture_module integer'
			},
			'jobs_completed_manufacture_module_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_module_quantity',
				'description': 'jobs_completed_manufacture_module_quantity integer'
			},
			'jobs_completed_manufacture_other': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_other',
				'description': 'jobs_completed_manufacture_other integer'
			},
			'jobs_completed_manufacture_other_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_other_quantity',
				'description': 'jobs_completed_manufacture_other_quantity integer'
			},
			'jobs_completed_manufacture_ship': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_ship',
				'description': 'jobs_completed_manufacture_ship integer'
			},
			'jobs_completed_manufacture_ship_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_ship_quantity',
				'description': 'jobs_completed_manufacture_ship_quantity integer'
			},
			'jobs_completed_manufacture_structure': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_structure',
				'description': 'jobs_completed_manufacture_structure integer'
			},
			'jobs_completed_manufacture_structure_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_structure_quantity',
				'description': 'jobs_completed_manufacture_structure_quantity integer'
			},
			'jobs_completed_manufacture_subsystem': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_subsystem',
				'description': 'jobs_completed_manufacture_subsystem integer'
			},
			'jobs_completed_manufacture_subsystem_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_manufacture_subsystem_quantity',
				'description': 'jobs_completed_manufacture_subsystem_quantity integer'
			},
			'jobs_completed_material_productivity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_material_productivity',
				'description': 'jobs_completed_material_productivity integer'
			},
			'jobs_completed_time_productivity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_completed_time_productivity',
				'description': 'jobs_completed_time_productivity integer'
			},
			'jobs_started_copy_blueprint': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_started_copy_blueprint',
				'description': 'jobs_started_copy_blueprint integer'
			},
			'jobs_started_invention': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_started_invention',
				'description': 'jobs_started_invention integer'
			},
			'jobs_started_manufacture': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_started_manufacture',
				'description': 'jobs_started_manufacture integer'
			},
			'jobs_started_material_productivity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_started_material_productivity',
				'description': 'jobs_started_material_productivity integer'
			},
			'jobs_started_time_productivity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jobs_started_time_productivity',
				'description': 'jobs_started_time_productivity integer'
			},
			'reprocess_item': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_reprocess_item',
				'description': 'reprocess_item integer'
			},
			'reprocess_item_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_reprocess_item_quantity',
				'description': 'reprocess_item_quantity integer'
			}
		},
		'title': 'get_characters_character_id_stats_industry',
		'description': 'industry object'
	},
	'inventory': {
		'type': 'object',
		'properties': {
			'abandon_loot_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_abandon_loot_quantity',
				'description': 'abandon_loot_quantity integer'
			},
			'trash_item_quantity': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_trash_item_quantity',
				'description': 'trash_item_quantity integer'
			}
		},
		'title': 'get_characters_character_id_stats_inventory',
		'description': 'inventory object'
	},
	'isk': {
		'type': 'object',
		'properties': {
			'in': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_in',
				'description': 'in integer'
			},
			'out': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_out',
				'description': 'out integer'
			}
		},
		'title': 'get_characters_character_id_stats_isk',
		'description': 'isk object'
	},
	'market': {
		'type': 'object',
		'properties': {
			'accept_contracts_courier': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_accept_contracts_courier',
				'description': 'accept_contracts_courier integer'
			},
			'accept_contracts_item_exchange': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_accept_contracts_item_exchange',
				'description': 'accept_contracts_item_exchange integer'
			},
			'buy_orders_placed': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_buy_orders_placed',
				'description': 'buy_orders_placed integer'
			},
			'cancel_market_order': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_cancel_market_order',
				'description': 'cancel_market_order integer'
			},
			'create_contracts_auction': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_create_contracts_auction',
				'description': 'create_contracts_auction integer'
			},
			'create_contracts_courier': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_create_contracts_courier',
				'description': 'create_contracts_courier integer'
			},
			'create_contracts_item_exchange': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_create_contracts_item_exchange',
				'description': 'create_contracts_item_exchange integer'
			},
			'deliver_courier_contract': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_deliver_courier_contract',
				'description': 'deliver_courier_contract integer'
			},
			'isk_gained': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_isk_gained',
				'description': 'isk_gained integer'
			},
			'isk_spent': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_isk_spent',
				'description': 'isk_spent integer'
			},
			'modify_market_order': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_modify_market_order',
				'description': 'modify_market_order integer'
			},
			'search_contracts': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_search_contracts',
				'description': 'search_contracts integer'
			},
			'sell_orders_placed': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_sell_orders_placed',
				'description': 'sell_orders_placed integer'
			}
		},
		'title': 'get_characters_character_id_stats_market',
		'description': 'market object'
	},
	'mining': {
		'type': 'object',
		'properties': {
			'drone_mine': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_drone_mine',
				'description': 'drone_mine integer'
			},
			'ore_arkonor': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_arkonor',
				'description': 'ore_arkonor integer'
			},
			'ore_bistot': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_bistot',
				'description': 'ore_bistot integer'
			},
			'ore_crokite': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_crokite',
				'description': 'ore_crokite integer'
			},
			'ore_dark_ochre': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_dark_ochre',
				'description': 'ore_dark_ochre integer'
			},
			'ore_gneiss': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_gneiss',
				'description': 'ore_gneiss integer'
			},
			'ore_harvestable_cloud': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_harvestable_cloud',
				'description': 'ore_harvestable_cloud integer'
			},
			'ore_hedbergite': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_hedbergite',
				'description': 'ore_hedbergite integer'
			},
			'ore_hemorphite': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_hemorphite',
				'description': 'ore_hemorphite integer'
			},
			'ore_ice': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_ice',
				'description': 'ore_ice integer'
			},
			'ore_jaspet': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_jaspet',
				'description': 'ore_jaspet integer'
			},
			'ore_kernite': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_kernite',
				'description': 'ore_kernite integer'
			},
			'ore_mercoxit': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_mercoxit',
				'description': 'ore_mercoxit integer'
			},
			'ore_omber': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_omber',
				'description': 'ore_omber integer'
			},
			'ore_plagioclase': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_plagioclase',
				'description': 'ore_plagioclase integer'
			},
			'ore_pyroxeres': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_pyroxeres',
				'description': 'ore_pyroxeres integer'
			},
			'ore_scordite': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_scordite',
				'description': 'ore_scordite integer'
			},
			'ore_spodumain': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_spodumain',
				'description': 'ore_spodumain integer'
			},
			'ore_veldspar': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_ore_veldspar',
				'description': 'ore_veldspar integer'
			}
		},
		'title': 'get_characters_character_id_stats_mining',
		'description': 'mining object'
	},
	'module': {
		'type': 'object',
		'properties': {
			'activations_armor_hardener': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_armor_hardener',
				'description': 'activations_armor_hardener integer'
			},
			'activations_armor_repair_unit': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_armor_repair_unit',
				'description': 'activations_armor_repair_unit integer'
			},
			'activations_armor_resistance_shift_hardener': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_armor_resistance_shift_hardener',
				'description': 'activations_armor_resistance_shift_hardener integer'
			},
			'activations_automated_targeting_system': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_automated_targeting_system',
				'description': 'activations_automated_targeting_system integer'
			},
			'activations_bastion': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_bastion',
				'description': 'activations_bastion integer'
			},
			'activations_bomb_launcher': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_bomb_launcher',
				'description': 'activations_bomb_launcher integer'
			},
			'activations_capacitor_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_capacitor_booster',
				'description': 'activations_capacitor_booster integer'
			},
			'activations_cargo_scanner': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_cargo_scanner',
				'description': 'activations_cargo_scanner integer'
			},
			'activations_cloaking_device': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_cloaking_device',
				'description': 'activations_cloaking_device integer'
			},
			'activations_clone_vat_bay': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_clone_vat_bay',
				'description': 'activations_clone_vat_bay integer'
			},
			'activations_cynosural_field': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_cynosural_field',
				'description': 'activations_cynosural_field integer'
			},
			'activations_damage_control': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_damage_control',
				'description': 'activations_damage_control integer'
			},
			'activations_data_miners': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_data_miners',
				'description': 'activations_data_miners integer'
			},
			'activations_drone_control_unit': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_drone_control_unit',
				'description': 'activations_drone_control_unit integer'
			},
			'activations_drone_tracking_modules': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_drone_tracking_modules',
				'description': 'activations_drone_tracking_modules integer'
			},
			'activations_eccm': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_eccm',
				'description': 'activations_eccm integer'
			},
			'activations_ecm': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_ecm',
				'description': 'activations_ecm integer'
			},
			'activations_ecm_burst': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_ecm_burst',
				'description': 'activations_ecm_burst integer'
			},
			'activations_energy_destabilizer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_energy_destabilizer',
				'description': 'activations_energy_destabilizer integer'
			},
			'activations_energy_vampire': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_energy_vampire',
				'description': 'activations_energy_vampire integer'
			},
			'activations_energy_weapon': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_energy_weapon',
				'description': 'activations_energy_weapon integer'
			},
			'activations_festival_launcher': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_festival_launcher',
				'description': 'activations_festival_launcher integer'
			},
			'activations_frequency_mining_laser': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_frequency_mining_laser',
				'description': 'activations_frequency_mining_laser integer'
			},
			'activations_fueled_armor_repairer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_fueled_armor_repairer',
				'description': 'activations_fueled_armor_repairer integer'
			},
			'activations_fueled_shield_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_fueled_shield_booster',
				'description': 'activations_fueled_shield_booster integer'
			},
			'activations_gang_coordinator': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_gang_coordinator',
				'description': 'activations_gang_coordinator integer'
			},
			'activations_gas_cloud_harvester': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_gas_cloud_harvester',
				'description': 'activations_gas_cloud_harvester integer'
			},
			'activations_hull_repair_unit': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_hull_repair_unit',
				'description': 'activations_hull_repair_unit integer'
			},
			'activations_hybrid_weapon': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_hybrid_weapon',
				'description': 'activations_hybrid_weapon integer'
			},
			'activations_industrial_core': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_industrial_core',
				'description': 'activations_industrial_core integer'
			},
			'activations_interdiction_sphere_launcher': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_interdiction_sphere_launcher',
				'description': 'activations_interdiction_sphere_launcher integer'
			},
			'activations_micro_jump_drive': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_micro_jump_drive',
				'description': 'activations_micro_jump_drive integer'
			},
			'activations_mining_laser': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_mining_laser',
				'description': 'activations_mining_laser integer'
			},
			'activations_missile_launcher': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_missile_launcher',
				'description': 'activations_missile_launcher integer'
			},
			'activations_passive_targeting_system': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_passive_targeting_system',
				'description': 'activations_passive_targeting_system integer'
			},
			'activations_probe_launcher': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_probe_launcher',
				'description': 'activations_probe_launcher integer'
			},
			'activations_projected_eccm': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_projected_eccm',
				'description': 'activations_projected_eccm integer'
			},
			'activations_projectile_weapon': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_projectile_weapon',
				'description': 'activations_projectile_weapon integer'
			},
			'activations_propulsion_module': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_propulsion_module',
				'description': 'activations_propulsion_module integer'
			},
			'activations_remote_armor_repairer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_armor_repairer',
				'description': 'activations_remote_armor_repairer integer'
			},
			'activations_remote_capacitor_transmitter': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_capacitor_transmitter',
				'description': 'activations_remote_capacitor_transmitter integer'
			},
			'activations_remote_ecm_burst': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_ecm_burst',
				'description': 'activations_remote_ecm_burst integer'
			},
			'activations_remote_hull_repairer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_hull_repairer',
				'description': 'activations_remote_hull_repairer integer'
			},
			'activations_remote_sensor_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_sensor_booster',
				'description': 'activations_remote_sensor_booster integer'
			},
			'activations_remote_sensor_damper': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_sensor_damper',
				'description': 'activations_remote_sensor_damper integer'
			},
			'activations_remote_shield_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_shield_booster',
				'description': 'activations_remote_shield_booster integer'
			},
			'activations_remote_tracking_computer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_remote_tracking_computer',
				'description': 'activations_remote_tracking_computer integer'
			},
			'activations_salvager': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_salvager',
				'description': 'activations_salvager integer'
			},
			'activations_sensor_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_sensor_booster',
				'description': 'activations_sensor_booster integer'
			},
			'activations_shield_booster': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_shield_booster',
				'description': 'activations_shield_booster integer'
			},
			'activations_shield_hardener': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_shield_hardener',
				'description': 'activations_shield_hardener integer'
			},
			'activations_ship_scanner': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_ship_scanner',
				'description': 'activations_ship_scanner integer'
			},
			'activations_siege': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_siege',
				'description': 'activations_siege integer'
			},
			'activations_smart_bomb': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_smart_bomb',
				'description': 'activations_smart_bomb integer'
			},
			'activations_stasis_web': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_stasis_web',
				'description': 'activations_stasis_web integer'
			},
			'activations_strip_miner': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_strip_miner',
				'description': 'activations_strip_miner integer'
			},
			'activations_super_weapon': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_super_weapon',
				'description': 'activations_super_weapon integer'
			},
			'activations_survey_scanner': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_survey_scanner',
				'description': 'activations_survey_scanner integer'
			},
			'activations_target_breaker': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_target_breaker',
				'description': 'activations_target_breaker integer'
			},
			'activations_target_painter': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_target_painter',
				'description': 'activations_target_painter integer'
			},
			'activations_tracking_computer': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_tracking_computer',
				'description': 'activations_tracking_computer integer'
			},
			'activations_tracking_disruptor': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_tracking_disruptor',
				'description': 'activations_tracking_disruptor integer'
			},
			'activations_tractor_beam': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_tractor_beam',
				'description': 'activations_tractor_beam integer'
			},
			'activations_triage': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_triage',
				'description': 'activations_triage integer'
			},
			'activations_warp_disrupt_field_generator': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_warp_disrupt_field_generator',
				'description': 'activations_warp_disrupt_field_generator integer'
			},
			'activations_warp_scrambler': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_activations_warp_scrambler',
				'description': 'activations_warp_scrambler integer'
			},
			'link_weapons': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_link_weapons',
				'description': 'link_weapons integer'
			},
			'overload': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_overload',
				'description': 'overload integer'
			},
			'repairs': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_repairs',
				'description': 'repairs integer'
			}
		},
		'title': 'get_characters_character_id_stats_module',
		'description': 'module object'
	},
	'orbital': {
		'type': 'object',
		'properties': {
			'strike_characters_killed': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_strike_characters_killed',
				'description': 'strike_characters_killed integer'
			},
			'strike_damage_to_players_armor_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_strike_damage_to_players_armor_amount',
				'description': 'strike_damage_to_players_armor_amount integer'
			},
			'strike_damage_to_players_shield_amount': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_strike_damage_to_players_shield_amount',
				'description': 'strike_damage_to_players_shield_amount integer'
			}
		},
		'title': 'get_characters_character_id_stats_orbital',
		'description': 'orbital object'
	},
	'pve': {
		'type': 'object',
		'properties': {
			'dungeons_completed_agent': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_dungeons_completed_agent',
				'description': 'dungeons_completed_agent integer'
			},
			'dungeons_completed_distribution': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_dungeons_completed_distribution',
				'description': 'dungeons_completed_distribution integer'
			},
			'missions_succeeded': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_missions_succeeded',
				'description': 'missions_succeeded integer'
			},
			'missions_succeeded_epic_arc': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_missions_succeeded_epic_arc',
				'description': 'missions_succeeded_epic_arc integer'
			}
		},
		'title': 'get_characters_character_id_stats_pve',
		'description': 'pve object'
	},
	'social': {
		'type': 'object',
		'properties': {
			'add_contact_bad': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_contact_bad',
				'description': 'add_contact_bad integer'
			},
			'add_contact_good': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_contact_good',
				'description': 'add_contact_good integer'
			},
			'add_contact_high': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_contact_high',
				'description': 'add_contact_high integer'
			},
			'add_contact_horrible': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_contact_horrible',
				'description': 'add_contact_horrible integer'
			},
			'add_contact_neutral': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_contact_neutral',
				'description': 'add_contact_neutral integer'
			},
			'add_note': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_add_note',
				'description': 'add_note integer'
			},
			'added_as_contact_bad': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_added_as_contact_bad',
				'description': 'added_as_contact_bad integer'
			},
			'added_as_contact_good': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_added_as_contact_good',
				'description': 'added_as_contact_good integer'
			},
			'added_as_contact_high': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_added_as_contact_high',
				'description': 'added_as_contact_high integer'
			},
			'added_as_contact_horrible': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_added_as_contact_horrible',
				'description': 'added_as_contact_horrible integer'
			},
			'added_as_contact_neutral': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_added_as_contact_neutral',
				'description': 'added_as_contact_neutral integer'
			},
			'calendar_event_created': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_calendar_event_created',
				'description': 'calendar_event_created integer'
			},
			'chat_messages_alliance': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_alliance',
				'description': 'chat_messages_alliance integer'
			},
			'chat_messages_constellation': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_constellation',
				'description': 'chat_messages_constellation integer'
			},
			'chat_messages_corporation': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_corporation',
				'description': 'chat_messages_corporation integer'
			},
			'chat_messages_fleet': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_fleet',
				'description': 'chat_messages_fleet integer'
			},
			'chat_messages_region': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_region',
				'description': 'chat_messages_region integer'
			},
			'chat_messages_solarsystem': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_solarsystem',
				'description': 'chat_messages_solarsystem integer'
			},
			'chat_messages_warfaction': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_messages_warfaction',
				'description': 'chat_messages_warfaction integer'
			},
			'chat_total_message_length': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_chat_total_message_length',
				'description': 'chat_total_message_length integer'
			},
			'direct_trades': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_direct_trades',
				'description': 'direct_trades integer'
			},
			'fleet_broadcasts': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_fleet_broadcasts',
				'description': 'fleet_broadcasts integer'
			},
			'fleet_joins': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_fleet_joins',
				'description': 'fleet_joins integer'
			},
			'mails_received': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_mails_received',
				'description': 'mails_received integer'
			},
			'mails_sent': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_mails_sent',
				'description': 'mails_sent integer'
			}
		},
		'title': 'get_characters_character_id_stats_social',
		'description': 'social object'
	},
	'travel': {
		'type': 'object',
		'properties': {
			'acceleration_gate_activations': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_acceleration_gate_activations',
				'description': 'acceleration_gate_activations integer'
			},
			'align_to': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_align_to',
				'description': 'align_to integer'
			},
			'distance_warped_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_distance_warped_high_sec',
				'description': 'distance_warped_high_sec integer'
			},
			'distance_warped_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_distance_warped_low_sec',
				'description': 'distance_warped_low_sec integer'
			},
			'distance_warped_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_distance_warped_null_sec',
				'description': 'distance_warped_null_sec integer'
			},
			'distance_warped_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_distance_warped_wormhole',
				'description': 'distance_warped_wormhole integer'
			},
			'docks_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_docks_high_sec',
				'description': 'docks_high_sec integer'
			},
			'docks_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_docks_low_sec',
				'description': 'docks_low_sec integer'
			},
			'docks_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_docks_null_sec',
				'description': 'docks_null_sec integer'
			},
			'jumps_stargate_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jumps_stargate_high_sec',
				'description': 'jumps_stargate_high_sec integer'
			},
			'jumps_stargate_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jumps_stargate_low_sec',
				'description': 'jumps_stargate_low_sec integer'
			},
			'jumps_stargate_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jumps_stargate_null_sec',
				'description': 'jumps_stargate_null_sec integer'
			},
			'jumps_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_jumps_wormhole',
				'description': 'jumps_wormhole integer'
			},
			'warps_high_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_high_sec',
				'description': 'warps_high_sec integer'
			},
			'warps_low_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_low_sec',
				'description': 'warps_low_sec integer'
			},
			'warps_null_sec': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_null_sec',
				'description': 'warps_null_sec integer'
			},
			'warps_to_bookmark': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_to_bookmark',
				'description': 'warps_to_bookmark integer'
			},
			'warps_to_celestial': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_to_celestial',
				'description': 'warps_to_celestial integer'
			},
			'warps_to_fleet_member': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_to_fleet_member',
				'description': 'warps_to_fleet_member integer'
			},
			'warps_to_scan_result': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_to_scan_result',
				'description': 'warps_to_scan_result integer'
			},
			'warps_wormhole': {
				'type': 'integer',
				'format': 'int64',
				'title': 'get_characters_character_id_stats_warps_wormhole',
				'description': 'warps_wormhole integer'
			}
		},
		'title': 'get_characters_character_id_stats_travel',
		'description': 'travel object'
	}
};
