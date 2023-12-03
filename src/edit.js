import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor/build/components';

const Edit = ( { attributes:{quote, person}, setAttributes } ) => {
    const blockProps = useBlockProps();
    
    const onChangeQuote = (value) => {
        setAttributes({ quote: value });
    }

    const onChangePerson = (value) => {
        setAttributes({ person: value });
    }

    return (
        <figure {...blockProps}>
            <RichText
                tagName= "blockquote"
                multiline= "p"
                onChange= { onChangeQuote }
                value={quote}
                placeholder={__('put yout quote text here.', 'webcamp')}
                className="quote"
            />
                <RichText
                    tagName= "figcaption"
                    onChange= { onChangePerson }
                    value={person}
                    placeholder={__('person name and title.', 'webcamp')}
                    className="person"
                />
        </figure>
    )
}

export default Edit;