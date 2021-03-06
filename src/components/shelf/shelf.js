import React, { Component } from "react";
import axios from 'axios'
import Slider from "react-slick";
import { Title } from "./styles";
import { ShelfSection } from "./styles";
import { ShelfItem } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Shelf extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://demo5081211.mockable.io/product`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        const settings = {
            dots: true,
            arrow: true,
            infinite: true,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <ShelfSection>
                <div className="container">
                    <Title>
                        <span>AS MELHORES</span> marcas você encontra aqui!
                    </Title>                    
                    <Slider {...settings}>
                        {this.state.products.map((product, skuname) =>
                            <ShelfItem key={skuname}>
                                <img src={product.image} alt={product.skuname} />
                                <div className="name">
                                    {product.skuname}
                                </div>
                                <div className="prices">
                                    {product.bestPrice}
                                </div>
                            </ShelfItem>
                        )}
                    </Slider>
                </div>
            </ShelfSection>
        )
    }
}