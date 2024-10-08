import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import block from './block.json';
import './main.css'

registerBlockType(block.name, {
    edit({attributes, setAttributes}){
        const {content, underline_color} = attributes
        const blockProp = useBlockProps( )
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Color', 'block-plus')}  >
                        <p>{__('Choose the undeline color for the Heading', 'block-plus')}</p>
                        <ColorPalette
                            colors={[
                                {name:"Lavender", color:"#BDC3C7"},
                                {name:"Sunset Orange", color:"#F39C12"},
                                {name:"MidNight Blue", color:"#2C3E50"},
                                {name:"Golden Sand", color:"#F1C40F"}
                            ]}
                            value={underline_color}
                            onChange={newValue => setAttributes({underline_color:newValue})}
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProp}>
                    <RichText
                    className='cool-header'
                    tagName ='h2'
                    placeholder = {__('Enter the heading', 'block-plus')}
                    value = {content}
                    onChange = {newValue => setAttributes({content:newValue})}
                    />
                </div>
            </>
        );
    },
    save({attributes}){
        const {content,underline_color} = attributes;
        const blockProp = useBlockProps.save({
            className: "cool-header",
            style: {
                'background-image': `
                    linear-gradient(transparent,transparent),
                    linear-gradient(${underline_color}, ${underline_color})
                `
            }
        })
        return (
            <RichText.Content 
                {...blockProp}
                tagName='h2'
                value={content}
            />
        );
    }
} );