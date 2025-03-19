
export default function CoreConcepts({ title, image, description }) {
    return (
        <li>
            <img src={image} alt={title} className='rotate' />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}