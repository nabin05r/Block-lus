<?php
/*
 * Plugin Name:       Block Plus
 * Plugin URI:        https://nabinmagar.com
 * Description:       Provides more blocks to the Gutenberg Editor.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Nabin Gharti Magar
 * Author URI:        https://nabinmagar.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       block-plus
 * Domain Path:       /languages
 */

if(! defined('ABSPATH')){
    die;
}

if( ! class_exists('Block_Plus')){

    class Block_Plus{

        function __construct(){
            $this->define_constants();

            require_once(BLOCK_PLUS_PATH . '/includes/class.bp-register-blocks.php');
            $register_block = new BP_Register_Blocks();
        }

        public function define_constants(){
            define('BLOCK_PLUS_PATH', plugin_dir_path( __FILE__ ));
            define('BLOCK_PLUS_URL', plugin_dir_url( __FILE__ ));
            define('BLOCK_PLUS_VERSION', '1.0.0');
        }

    }
    $block_plus = new Block_Plus();

}