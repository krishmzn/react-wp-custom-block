import { useBlockProps, RichText } from '@wordpress/block-editor/build/components';

const Save = ( { attributes:{quote, person} } ) => {
    const blockProps = useBlockProps.save();

    return (
        <figure {...blockProps}>
            <RichText.content
                tagName= "blockquote"
                value={quote}
                className="quote"
            />
            <RichText.content
                tagName= "figcaption"
                value={person}
                className="person"
            />
        </figure>
    )
}

export default Save;