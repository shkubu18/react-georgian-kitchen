import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import ArrowRight from "../assets/icon/arrow-right.svg";
import FoodDetailstyle from "../styles/food-detail.css";
import FoodDetailResponsive from "../styles/responsive-styles/food-detail-responsive.css";
import DetailKhinkali from "./Detail-Page-Templates/Khinkali";
import DetailMtsvadi from "./Detail-Page-Templates/Mtsvadi";
import DetailKababi from "./Detail-Page-Templates/Kababi";
import DetailBeans from "./Detail-Page-Templates/Beans";
import DetailOstri from "./Detail-Page-Templates/Ostri";
import DetailLori from "./Detail-Page-Templates/Lori";
import DetailChikhirtma from "./Detail-Page-Templates/Chikhirtma";
import DetailAcharuliLobiani from "./Detail-Page-Templates/Lobiani";
import DetailMegruliKhachapuri from "./Detail-Page-Templates/MegruliKhachapuri";
import DetailImeruliKhachapuri from "./Detail-Page-Templates/ImeruliKhachapuri";
import DetailAcharuliKhachapuri from "./Detail-Page-Templates/AcharuliKhachapuri";
import DetailChakhafuli from "./Detail-Page-Templates/Chakhafuli";
import DetailKalmakhi from "./Detail-Page-Templates/FriedKalmakhi";
import DetailSibasi from "./Detail-Page-Templates/FriedSibasi";
import DetailChicken from "./Detail-Page-Templates/ShqmeruliChicken";
import DetailKhashlama from "./Detail-Page-Templates/Khashlama";
import DetailKharcho from "./Detail-Page-Templates/Kharcho";
import DetailKupati from "./Detail-Page-Templates/Kupati";
import DetailElarji from "./Detail-Page-Templates/Elarji";
import DetailSatsivi from "./Detail-Page-Templates/Satsivi";

export default function DetailPage() {
    
    if (window.location.pathname === '/khinkali/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKhinkali />
            </>
        )
    } else if (window.location.pathname === '/mtsvadi/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailMtsvadi />
            </>
        )
    } else if (window.location.pathname === '/kababi/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKababi />
            </>
        )
    } else if (window.location.pathname === '/beans-in-a-pot/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailBeans />
            </>
        )
    } else if (window.location.pathname === '/ostri/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailOstri />
            </>
        )
    } else if (window.location.pathname === '/rachuli-lori/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailLori />
            </>
        )
    } else if (window.location.pathname === '/chikhirtma/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailChikhirtma />
            </>
        )
    } else if (window.location.pathname === '/acharuli-lobiani/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailAcharuliLobiani />
            </>
        )
    } else if (window.location.pathname === '/megruli-khachapuri/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailMegruliKhachapuri />
            </>
        )
    } else if (window.location.pathname === '/imeruli-khachapuri/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailImeruliKhachapuri />
            </>
        )
    } else if (window.location.pathname === '/acharuli-khachapuri/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailAcharuliKhachapuri />
            </>
        )
    } else if (window.location.pathname === '/chakhafuli/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailChakhafuli />
            </>
        )
    } else if (window.location.pathname === '/fried-kalmakhi/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKalmakhi />
            </>
        )
    } else if (window.location.pathname === '/fried-sibasi/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailSibasi />
            </>
        )
    } else if (window.location.pathname === '/shqmeruli-chicken/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailChicken />
            </>
        )
    } else if (window.location.pathname === '/khashlama/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKhashlama />
            </>
        )
    } else if (window.location.pathname === '/kharcho/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKharcho />
            </>
        )
    } else if (window.location.pathname === '/kupati/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailKupati />
            </>
        )
    } else if (window.location.pathname === '/elarji/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailElarji />
            </>
        )
    } else if (window.location.pathname === '/satsivi/detailpage') {
        return (
            <>
                <Helmet>
                    <style>{'body { background-image: url("https://wallpaperaccess.com/full/2567134.jpg") }'}</style>
                </Helmet>
                <DetailSatsivi />
            </>
        )
    }
}
