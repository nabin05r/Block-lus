import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import block from './block.json';
import './main.css';

registerBlockType(block.name, {
    edit({attributes,setAttributes}){
        const {showAuth} = attributes;
        const blockProp = useBlockProps();
        return (
        <>
        <InspectorControls>
            <PanelBody title = {__("General",'block-plus')}>
                <SelectControl
                    label = {__("Show Login/Sign Up", 'block-plus')}
                    options = {[
                        { label : 'No', value: false},
                        { label: 'Yes', value: true}
                    ]}
                    value = {showAuth}
                    onChange = {newValue => setAttributes({showAuth: (newValue === 'true')})} 
                />
            </PanelBody>
        </InspectorControls>
        
        <div { ...blockProp }>
        {showAuth 
        
        ?
            <a className="signin-link open-modal" href="#">
            <div className="signin-icon">
                <i className="bi bi-person-circle"></i>
            </div>
            <div className="signin-text">
                <small>Hello, Sign in</small>
                My Account
            </div>
            </a>
            
            :
            null
        }
        </div>
        </>
        )
    }
})
