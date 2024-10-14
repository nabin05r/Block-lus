import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps, RichText, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, ToggleControl} from '@wordpress/components' ;
import block from './block.json';
import {__} from '@wordpress/i18n';
import './main.css';

registerBlockType(block.name, {
    edit({attributes, setAttributes}){
        const blockProp = useBlockProps()
        const {content,showCategory} = attributes
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('General','block-plus')}>
                        <ToggleControl
                            label = {__('Show Category','block-plus')}
                            checked={showCategory}
                            onChange={newValue => setAttributes({showCategory:newValue})}
                            help={ showCategory ? __("Category Shown",'block-plus') : __("Custom Content Shown",'block-plus')}
                        />
                    </PanelBody>
                </InspectorControls>
               <div {...blockProp}>
                    <div className="inner-page-header">
                        {
                          showCategory ?
                           <h1>{__('Category: Some Category', 'block-plus')}</h1>
                           :
                           <RichText
                            tagName='h1'
                            placeholder={__('Heading', 'block-plus ')}
                            value={content}
                            onChange={newValue => setAttributes({content:newValue})}
                        />
                        }         
                    </div>
                </div> 
            </>
        )
    }
})