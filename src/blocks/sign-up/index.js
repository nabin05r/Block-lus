import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor'
import block from './block.json';
import './main.css';

registerBlockType(block.name, {
    edit(){
        const blockProp = useBlockProps();
        return (
        <>
        <div {...blockProp}>
          <a className="signin-link open-modal" href="#signin-modal">
            <div className="signin-icon">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="signin-text">
              <small>Hello, Sign in</small>
              My Account
            </div>
          </a>
        </div>

        </>
        )
    }
})