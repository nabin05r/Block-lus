import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import block from './block.json';
import './main.css';


registerBlockType(block.name, {
    edit({attributes,setAttributes}){
        const {showRegister} = attributes 
        const blockProp = useBlockProps();
        return (
            <>
                <InspectorControls>
                    <PanelBody title = {__('General' ,'block-plus')}>
                        <ToggleControl
                            label = {__('Show Login Form','block-plus')}
                            checked = {showRegister}
                            onChange = {newValue => setAttributes({showRegister:newValue})}
                            help = {showRegister ? __('Showing Login Form', 'block-plus') : __('Disabling Login Form', 'block-plus')}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProp}>
                    {
                        showRegister
                        ?
                        __('This block is not previewable from the editor. View your site from live demo ','block-plus')
                        :
                        null
                    }
                   
                </div> 
            </>
        )
    }
})