<?php

function bh_rest_api_handler($request){

    $response = ['status' => 1];

    $params = $request->get_json_params();
    if(!isset( $params['email'], $params['username'], $params['password']) ||
     empty($params['email']) ||
     empty($params['username']) ||
     empty($params['password'])
     ){
        return $response;
     }
    
    $username = sanitize_text_field($params['username']);
    $email = sanitize_email($params['email']);
    $password = sanitize_text_field($params['password']);

     if(
        username_exists($username) ||
        ! is_email($email) ||
        email_exists($email)
     ){
        return $response;
     }

    $userID = wp_insert_user(array(
        "user_login" => $username,
        "user_email" => $email,
        "user_pass" => $password
    )
    );

    if(is_wp_error($userID)){
        return $response;
    }

    wp_new_user_notification($userID, null, 'user');

    //This function will directly sign in the new registerd user directly.
    wp_set_current_user($userID);
    //This function will add cookie to user browser
    wp_set_auth_cookie($userID);

    $user = get_user_by('id', $userID);
    do_action('wp_login', $user->user_login, $user);

    $response['status'] = 2;
    return $response;
}