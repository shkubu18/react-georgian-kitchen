import { Link } from "react-router-dom";
import FoodListStlye from "../styles/food-list.css";
import ResponsiveFoodListStyle from "../styles/responsive-styles/food-list-responsive.css";
import { Helmet } from "react-helmet";


export const foods = [
    {
        id: 1,
        urlname: 'khinkali',
        foodname: 'Khinkali',
        src: 'https://images.bolt.eu/store/2022/2022-05-18/ea5ba6ee-f31c-4396-8158-f837f43a73c7.png'
    },

    {
        id: 2,
        urlname: 'mtsvadi',
        foodname: 'Mtsvadi',
        src: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/66238127_2400039776883088_289466321710612480_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=F6tF8QBCk_IAX9KoJ38&_nc_ht=scontent.ftbs10-1.fna&oh=00_AfD5MBI82KsnBDlDna3tFr10NezDp4pY_qUgX_4_Jl1-fQ&oe=63B982A3'
    },

    {
        id: 3,
        urlname: 'kababi',
        foodname: 'Kababi',
        src: 'https://mally.softgen.ge/upload/foods/0af2ab6c769a3e05f1abb1fb48c56353.jpg'
    },

    {
        id: 4,
        urlname: 'beans-in-a-pot',
        foodname: 'Beans in a pot',
        src: 'https://bernard.ge/wp-content/uploads/2020/08/lobio_qotanshi.jpg'
    },

    {
        id: 5,
        urlname: 'ostri',
        foodname: 'Ostri',
        src: 'https://images.bolt.eu/store/2021/2021-12-17/dcc03de6-dd05-4d85-b70f-ca4495addf7c.jpeg'
    },

    {
        id: 6,
        urlname: 'rachuli-lori',
        foodname: 'Rachuli lori',
        src: 'https://images.bolt.eu/store/2021/2021-12-17/7ba18b74-89b2-4f48-ac0b-2a633c962ed9.jpeg'
    },

    {
        id: 7,
        urlname: 'chikhirtma',
        foodname: 'Chikhirtma',
        src: 'https://static.wixstatic.com/media/5140bb_5d44363c526a4752b3f44a8e535eb9c8~mv2.jpg/v1/fill/w_3011,h_3011,al_c,q_85/5140bb_5d44363c526a4752b3f44a8e535eb9c8~mv2.jpg'
    },

    {
        id: 8,
        urlname: 'acharuli-lobiani',
        foodname: 'Acharuli lobiani',
        src: 'https://images.bolt.eu/store/2021/2021-07-07/106eea54-ab64-4c66-a124-14b81cd62a4f.jpeg'
    },

    {
        id: 9,
        urlname: 'megruli-khachapuri',
        foodname: 'Megruli khachapuri',
        src: 'https://wolt-menu-images-cdn.wolt.com/menu-images/5fbfa590cafc5e4adc4ad5b6/c7fb8644-2fe6-11eb-a470-0aa2712e3422_khachapuri_samefo.jpeg'
    },

    {
        id: 10,
        urlname: 'imeruli-khachapuri',
        foodname: 'Imeruli khachapuri',
        src: 'https://images.bolt.eu/store/2022/2022-03-25/b549976e-756f-4299-9ca4-d21e56ecffd0.jpeg'
    },

    {
        id: 11,
        urlname: 'acharuli-khachapuri',
        foodname: 'Acharuli khachapuri',
        src: 'https://hotsale.ge/files/offers/gamarjobabatumi/5.jpg'
    },

    {
        id: 12,
        foodname: 'Chakhafuli',
        src: 'https://for.ge/uploads/images/1584103781_182203.jpg'
    },

    {
        id: 13,
        urlname: 'fried-kalmakhi',
        foodname: 'Fried kalmakhi',
        src: 'http://nikorasupermarket.ge/modules/recipes/uploads/138.jpg'
    },

    {
        id: 14,
        urlname: 'fried-sibasi',
        foodname: 'Fried sibasi',
        src: 'https://imageproxy.wolt.com/menu/menu-images/5e60f80e6df006e53fcaf45a/b785b076-9393-11eb-9df8-569a0a28e332____________.jpeg'
    },

    {
        id: 15,
        urlname: 'shqmeruli-chicken',
        foodname: 'Shqmeruli chicken',
        src: 'https://cdn-aancj.nitrocdn.com/gCmPdOiQHRSMMdgshrWKlPFYQNLRTYAo/assets/static/optimized/rev-50643cb/wp-content/uploads/2016/06/L1080538.jpg'
    },

    {
        id: 16,
        urlname: 'khashlama',
        foodname: 'Khashlama',
        src: 'https://images.bolt.eu/store/2021/2021-12-17/b10d07d6-6e68-426d-81fc-6bc9182b0e87.jpeg'
    },

    {
        id: 17,
        urlname: 'kharcho',
        foodname: 'Kharcho',
        src: 'https://gurmestoria.files.wordpress.com/2021/10/dsc_2819.jpg?w=600'
    },

    {
        id: 18,
        urlname: 'kupati',
        foodname: 'Kupati',
        src: 'https://images.bolt.eu/store/2022/2022-09-02/2b8697a2-c417-4a89-8c5a-db20cb68711a.jpeg'
    },

    {
        id: 19,
        urlname: 'elarji',
        foodname: 'Elarji',
        src: 'https://sakurageorgia.com/storage/app/media/uploaded-files/WEB_VAL_7703.jpg'
    },

    {
        id: 20,
        urlname: 'satsivi',
        foodname: 'Satsivi',
        src: 'https://www.whats4eats.com/files/poultry-kotmis-satsivi-flickr-128268906%40N07-Lesya-Dolyk-17002288051-4x3.jpg'
    }
]

export default function FoodList() {
    
    function detailFoodDirection(e) {
        const urlname = (e.currentTarget.name);
        setTimeout(() => {
            window.location.href = `${urlname}/detailpage`;
        }, 1000);
    }

    return (
        <>
        <Helmet>
            <style>{'body { background-image: url("https://images.unsplash.com/photo-1597393647616-d45e1078312b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80") }'}</style>
        </Helmet>
        <div className="food-list-container">
            <div className="food-lists">
                {foods.map((food) => {
                    return (
                        <div key={food.id} className="card">
                            <div className="card-body">
                                <img src={food.src} alt="card of food" />
                            </div>
                            <div className="card-info">
                                <div className="food-name">
                                    <h1>{food.foodname}</h1>
                                </div>
                                <div className="food-detail-link">
                                    <button onClick={detailFoodDirection} name={food.urlname} className="btn" type="submit">See More</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}


