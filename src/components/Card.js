import "./Card.css";
import {IconButton} from "@chakra-ui/react";
import {
    ChevronRightIcon,
    ChevronLeftIcon
} from '@chakra-ui/icons';
import ActorView from "./ActorView";

function Card() {
    let i = 0;

    const people = ["Mike Ehrmantraut", "Walter White", "Saul Goodman", "Gus Fring"];
    const links = [
        "https://www.hollywoodreporter.com/wp-content/uploads/2014/01/jonathan_banks.jpg",
        "https://i.pinimg.com/736x/e7/e2/8a/e7e28ae48f7f3e9d35dc92c35f1166ab.jpg",
        "https://i.kym-cdn.com/photos/images/original/001/884/907/c86.jpg",
        "https://cdn.pastemagazine.com/www/articles/GusFringMoments_Main.jpg"
    ];

    return (
        <div className="Card justify-center flex whitespace-nowrap overflow-auto scrollbar-hide">
            <button><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Arrow Left'
                className={"arrow-left"}
                icon={<ChevronLeftIcon />}
            /></button>
            <ActorView source={links[i]} altTitle={people[i]}></ActorView>
            <button><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Arrow Right'
                className={"arrow-right"}
                icon={<ChevronRightIcon />}
            /></button>
        </div>
    );
}

export default Card;