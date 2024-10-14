<?php

if( !class_exists( 'BP_Register_Blocks' ) ){

    class BP_Register_Blocks{

        public function __construct(){
            add_action( 'init', array($this, 'bp_register_blocks') );
        }

        public function bp_register_blocks(){
            $blocks = [
                ['name' => 'cool-header'],
                ['name' => 'search-form', 'options' => array(
                    'render_callback' => 'bp_search_form_cb'
                 )],
                ['name' => 'page-header', 'options' => array(
                    'render_callback' => 'bp_page_header_cb'
                )],
                ['name' => 'sign-up']
            ];
            foreach($blocks as $block){
                register_block_type(BLOCK_PLUS_PATH . '/build/blocks/' . $block['name'],
                isset($block['options']) ? $block['options'] : []
            );
            }

        }

    }

}