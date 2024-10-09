import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps, InspectorControls, PanelColorSettings} from '@wordpress/block-editor';
import {PanelBody, ColorPalette} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import block from './block.json';
import './main.css';

registerBlockType(block.name,{
    edit({attributes,setAttributes}){
        const {bgColor, textColor} = attributes
        const blockProp = useBlockProps({
            style:{
                'background': bgColor,
                color: textColor
            }
        });
        return (
            <>
            <InspectorControls>
                <PanelColorSettings
                    title={__('Background Color','block-plus')}
                    colorSettings={[
                        {
                            label: __("Bacground Color", 'block-plus'),
                            value:bgColor,
                            onChange:newValue => setAttributes({bgColor:newValue})
                        },
                        {
                            label: __("Text Color", 'block-plus'),
                            value:textColor,
                            onChange:newValue => setAttributes({textColor:newValue})
                        }
                    ]}
                
                />
            </InspectorControls>
            <div {...blockProp}>
                <h1>Search: Your search term here</h1>
                <form>
                <input type="text" placeholder="Search" />
                <div className="btn-wrapper">
                    <button type="submit"
                        style={
                            {
                                "background": bgColor,
                                color: textColor
                            }
                        }
                    >Search</button>
                </div>
                </form>
        </div>
        </>
        );
    },
    // save(){
    //     const useblockProp = useBlockProps().save(
    //         className =""
    //     )
    //     return
    // }
})