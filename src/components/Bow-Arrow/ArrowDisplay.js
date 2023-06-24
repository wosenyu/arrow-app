import classes from '../Bow-Arrow/Arrow.module.css'
import Card from '../UI/Card'
import ArrowItem from './ArrowItem'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Ming Dynasty Bow',
        description: 'Finest Wood and Bowstring',
        price: 325.55,
    },
    {
        id: 'q2',
        name: 'Qing Dynasty Bow',
        description: 'A Qing specialty Bow!',
        price: 120.36,
    },
    {
        id: 'o3',
        name: 'Olympic Style Bow',
        description: 'Olmypic ready Bow',
        price: 265.73,
    },
    {
        id: 'r4',
        name: 'Modern Recurve Bow',
        description: 'Starter Recurve Bow',
        price: 100.68,
    },
];

const ArrowDisplay = () => {
    const arrowList = DUMMY_MEALS.map(arrow => <ArrowItem id={arrow.id} key={arrow.id} name={arrow.name} description={arrow.description} price={arrow.price} />)
    return (

        <section className={classes.arrow}>
            <Card>
                <ui>
                    {arrowList}
                </ui>
            </Card>
        </section>
    )
};

export default ArrowDisplay;