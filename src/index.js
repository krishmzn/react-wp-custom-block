import './style.scss';
import './editor.scss';

import edit from './edit';
import save from './save';



registerBlockType( 'create-block/webcamp', {
    /**
     * @see ./edit.js
     */
    edit,
    /**
     * @see ./save.js
     */
    save
} );