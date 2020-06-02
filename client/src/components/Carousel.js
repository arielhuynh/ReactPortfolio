import React from 'react';

import burger from "../assets/images/burger.JPG";
import dayplanner from "../assets/images/dayplanner.JPG";
import woof from "../assets/images/woof.JPG";
import notetaker from "../assets/images/notetaker.JPG";
import fitnesstracker from "../assets/images/fitnesstracker.JPG";
import project1 from "../assets/images/project1.JPG";
import Card from '../components/Card';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'EatDaBurger',
                    subTitle: 'Chomp on those burgers',
                    imgSrc: burger,
                    link: 'https://obscure-forest-66839.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Day Planner',
                    subTitle: 'So busy you need some help',
                    imgSrc: dayplanner,
                    link: 'https://arielhuynh.github.io/homework5/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Woof Woof',
                    subTitle: 'Where dogs find love',
                    imgSrc: woof,
                    link: 'https://ancient-plateau-65013.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'NoteTaker',
                    subTitle: 'No Pen? No Problem!',
                    imgSrc: notetaker,
                    link: 'https://immense-tundra-46788.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Fitness Tracker',
                    subTitle: 'Lets get FIT',
                    imgSrc: fitnesstracker,
                    link: 'https://frozen-beach-71870.herokuapp.com/?id=5eb05e9e25a103001746e3d5',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Comin in Hot',
                    subTitle: 'Navigation Tracker',
                    imgSrc: project1,
                    link: 'https://github.com/arielhuynh/Project1',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;