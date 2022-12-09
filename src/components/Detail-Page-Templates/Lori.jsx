import ArrowRight from "../../assets/icon/arrow-right.svg";
import { foods } from "../FoodList";

function goBack() {
    window.location.href = '/food-list';
}

export default function DetailLori() {
    return (
        <div className="food-info-container">
            <div className="food-info">
                <div className="food-img-container">
                    <img src="https://wolt-menu-images-cdn.wolt.com/menu-images/61f7999cc9854fe73f358271/a09db44a-8333-11ec-aa46-86d75971793e_9s0a4764.jpeg" alt="food-img" />
                </div>
                <div className="food-detail-info">
                    <div>
                        <h1>Rachuli Lori</h1>
                    </div>
                    <div className="food-description">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita, ipsum dolor minima non
                            beatae perferendis optio maiores aliquid, possimus saepe natus labore earum voluptates incidunt
                            quam tempore porro hic.</p>
                        <hr />
                    </div>

                    <div>
                        <p>Who invented Rachuli Lori</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita, ipsum dolor minima non
                            beatae perferendis optio maiores aliquid, possimus saepe natus labore earum voluptates incidunt
                            quam tempore porro hic.</p>
                    </div>
                    <div className="for-more-info lori">

                        <div>
                            <span>For More Information Click Buttton</span>
                            <img src={ArrowRight} alt="arrow-right-icon" />
                            <a>
                                <button type="submit">More Info...</button>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
            <div className="go-back">
                <a onClick={goBack}><button type="submit">Go Back</button></a>
            </div>
        </div>
    )
}