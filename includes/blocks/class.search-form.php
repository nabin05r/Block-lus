<?php

function bp_search_form_cb( $attr ) {
    $bgColor = esc_attr( $attr[ 'bgColor' ] );
    $textColor = esc_attr( $attr[ 'textColor' ] );
    $style = "background:{$bgColor}; color:{$textColor};";
    ob_start();
    ?>
        <div style=<?php echo $style?> class='wp-block-block-plus-search-form'>
            <h1><?php esc_html_e('Search:', 'block-plus')?> <?php the_search_query() ?></h1>
            <form action="<?php echo esc_url(home_url('/')); ?>">
                <input type='text' placeholder='Search' name='s' value='<?php echo the_search_query(); ?>'/>
                <div class='btn-wrapper'>
                    <button type='submit' style=<?php echo $style?>>
                        Search
                    </button>
                </div>
            </form>
        </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}