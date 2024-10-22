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

            require_once(BLOCK_PLUS_PATH . 'includes/class.bp-register-blocks.php');
            $register_block = new BP_Register_Blocks();

            //Using glob function to enqueue all the blocks functions
            $block_subdirectory_files = glob(BLOCK_PLUS_PATH . 'includes/blocks/*.php');
            foreach($block_subdirectory_files as $sub_directory_file){
                require_once($sub_directory_file);
            }
            //REST API
            require_once(BLOCK_PLUS_PATH . 'includes/rest-api/class.init.php');
            $res_api = new BH_RestAPI();

            // Includes Front
            // require_once(BLOCK_PLUS_PATH . 'includes/front/enqueue.php');
            // add_action('wp_enqueue_scripts', 'bp_enqueue_scripts'); 
        }

        public function define_constants(){
            define('BLOCK_PLUS_PATH', plugin_dir_path( __FILE__ ));
            define('BLOCK_PLUS_URL', plugin_dir_url( __FILE__ ));
            define('BLOCK_PLUS_VERSION', '1.0.0');
        }

    }
    $block_plus = new Block_Plus();

}