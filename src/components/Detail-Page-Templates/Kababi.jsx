import ArrowRight from "../../assets/icon/arrow-right.svg";
import { foods } from "../FoodList";

function goBack() {
    window.location.href = '/food-list';
}

export default function DetailKababi() {
    return (
        <div className="food-info-container">
            <div className="food-info">
                <div className="food-img-container">
                    <img src={foods[2].src} alt="food-img" />
                </div>
                <div className="food-detail-info">
                    <div>
                        <h1>Kababi</h1>
                    </div>
                    <div className="food-description">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita, ipsum dolor minima non
                            beatae perferendis optio maiores aliquid, possimus saepe natus labore earum voluptates incidunt
                            quam tempore porro hic.</p>
                        <hr />
                    </div>

                    <div>
                        <p>Who invented Kababi</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita, ipsum dolor minima non
                            beatae perferendis optio maiores aliquid, possimus saepe natus labore earum voluptates incidunt
                            quam tempore porro hic.</p>
                    </div>
                    <div className="for-more-info kababi">

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