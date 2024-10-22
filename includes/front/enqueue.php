<?php

function bp_enqueue_scripts(){
    $authURLs = json_encode( array(
        'signup' => esc_url_raw(rest_url('bp/v1/signup')) 
    ));
}

add_action('wp_enqueue_scripts', 'bp_enqueue_scripts'); 