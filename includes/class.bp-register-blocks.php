<?php

if( !class_exists( 'BP_Register_Blocks' ) ){

    class BP_Register_Blocks{

        public function __construct(){
            add_action( 'init', array($this, 'bp_register_blocks') );
        }

        public function bp_register_blocks(){
            $blocks = [
                ['name' => 'cool-header']
            ];
            foreach($blocks as $block){
                register_block_type(BLOCK_PLUS_PATH . '/build/blocks/' . $block['name']);
            }

        }

    }

}