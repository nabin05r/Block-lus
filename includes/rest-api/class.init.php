<?php

if( !class_exists('BH_RestAPI')){
    class BH_RestAPI{
        public function __construct(){
  
            add_action( 'rest_api_init', array($this, 'bh_rest_api_init' ) );
            require_once(BLOCK_PLUS_PATH . 'includes/rest-api/signup.php');
        }

        public function bh_rest_api_init(){
            register_rest_route('bh/v1', '/signup', array(
                'methods' => 'POST',
                'callback' => 'bh_rest_api_handler',
                'permission_callback' => '__return_true'
            ));
        }

      
    }
}