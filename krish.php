<?php


/** 
 * Plugin Name: krish
 * Description: krish
 * Author: krish
 * Version: 1.0.0
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * License: GNU General Public License v2 or later
 * License URI: LICENSE
 * Text Domain: krish
 * 
 * @package create-block
 */

 function create_block_webcamp_block_init() {
    register_block_types(__DIR__. '/build');
 }

 add_actions('init', 'create_block_webcamp_block_init');