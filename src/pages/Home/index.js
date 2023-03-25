import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../providers/auth';
import { ScrollCategoryContext } from '../../providers/scrollCategory';

import { ScrollCategory } from '../../components/ScrollCategory/';
import { HeaderMenu } from '../../components/HeaderMenu/';
import { SlideShow } from '../../components/SlideShow/';
import { Cadastro } from '../../components/Cadastro/';
import { LeftMenu } from '../../components/LeftMenu/';
import { CardCars } from '../../components/CardCars/';
import { Footer } from '../../components/Footer/'
import { Login } from '../../components/Login/';
import { Loading } from '../../components/Loading';

import './home.css';

const Home = () => {

    const { isLoginActive, isCadastroActive } = useContext(AuthContext);
    const { nameCategoryActive, activeCategory } = useContext(ScrollCategoryContext);
    const [dateCars, setDateCars] = useState([0]);
    const [isLoading, setIsLoading] = useState(true)
    const [fakeDateCars] = useState([1, 2, 3, 4, 5, 6]);

    useEffect(() => {
        fetch('https://e-spark-backend.onrender.com/cars')
            .then(response => response.json())
            .then(result => {
                setDateCars(result.cars);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            {isLoading ? <Loading /> : <div className="container-home">

                <HeaderMenu />
                <SlideShow />
                <LeftMenu />
                <h1 className="container-home-h1">
                    Escolha uma categoria
                </h1>
                <ScrollCategory />
                <h1 className="container-home-h1 black">{nameCategoryActive}</h1>
                <main>
                    <div className="container-cards-cars-home">

                        {
                            activeCategory ?
                                dateCars.map(item => item?.Cars_datasheet?.brand === nameCategoryActive ?
                                    <CardCars key={item?.id}
                                        id={item?.id}
                                        title={item?.name_car.replaceAll('_', ' ')}
                                        urlImg={item?.url_img_car}
                                        urlImgD={item?.Cars_description.url_img_description}
                                        description={item?.Cars_description.description}
                                        brand={item?.Cars_datasheet.brand}
                                        model={item?.Cars_datasheet.model}
                                        category={item?.Cars_datasheet.category}
                                        autonomy={item?.Cars_datasheet.autonomy}
                                        maximum_speed={item?.Cars_datasheet.maximum_speed}
                                        acceleration={item?.Cars_datasheet.acceleration}
                                        power={item?.Cars_datasheet.power}
                                        transmission={item?.Cars_datasheet.transmission}
                                        occupants={item?.Cars_datasheet.occupants}
                                        capacity={item?.Cars_datasheet.capacity}
                                        typeCar={item?.Cars_datasheet.occupants < 5 ? 'default' : 'premium'}
                                        quantityInStock={item?.quantity_in_stock}
                                    />
                                    :
                                    nameCategoryActive === 'Todos' ?
                                        <CardCars key={item?.id}
                                            id={item?.id}
                                            title={item?.name_car.replaceAll('_', ' ')}
                                            urlImg={item?.url_img_car}
                                            urlImgD={item?.Cars_description.url_img_description}
                                            description={item?.Cars_description.description}
                                            brand={item?.Cars_datasheet.brand}
                                            model={item?.Cars_datasheet.model}
                                            category={item?.Cars_datasheet.category}
                                            autonomy={item?.Cars_datasheet.autonomy}
                                            maximum_speed={item?.Cars_datasheet.maximum_speed}
                                            acceleration={item?.Cars_datasheet.acceleration}
                                            power={item?.Cars_datasheet.power}
                                            transmission={item?.Cars_datasheet.transmission}
                                            occupants={item?.Cars_datasheet.occupants}
                                            capacity={item?.Cars_datasheet.capacity}
                                            typeCar={item?.Cars_datasheet.occupants < 5 ? 'default' : 'premium'}
                                            quantityInStock={item?.quantity_in_stock}
                                        />
                                        : null
                                )

                                :

                                dateCars[0] === 0 ?
                                    fakeDateCars.map((item, key) => {
                                        return <CardCars key={key}
                                            id={key}
                                            title="Rimac C Two"
                                            description="Uma breve descrição sobre o veiculo, todo carro deve ter uma descrição"
                                            typeCar="premium" />
                                    })
                                    :
                                    dateCars.map((item, key) => {
                                        return <CardCars key={item?.id}
                                            id={item?.id}
                                            title={item?.name_car.replaceAll('_', ' ')}
                                            urlImg={item?.url_img_car}
                                            urlImgD={item?.Cars_description.url_img_description}
                                            description={item?.Cars_description.description}
                                            brand={item?.Cars_datasheet.brand}
                                            model={item?.Cars_datasheet.model}
                                            category={item?.Cars_datasheet.category}
                                            autonomy={item?.Cars_datasheet.autonomy}
                                            maximum_speed={item?.Cars_datasheet.maximum_speed}
                                            acceleration={item?.Cars_datasheet.acceleration}
                                            power={item?.Cars_datasheet.power}
                                            transmission={item?.Cars_datasheet.transmission}
                                            occupants={item?.Cars_datasheet.occupants}
                                            capacity={item?.Cars_datasheet.capacity}
                                            typeCar={item?.Cars_datasheet.occupants < 5 ? 'default' : 'premium'}
                                            quantityInStock={item?.quantity_in_stock}
                                        />
                                    })
                        }

                    </div>
                </main>
                {isLoginActive ? <Login /> : null}
                {isCadastroActive ? <Cadastro /> : null}
                <Footer />
            </div>
            }
        </>
    );
}

export { Home };