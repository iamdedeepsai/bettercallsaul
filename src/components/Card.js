import "./Card.css";
import {IconButton} from "@chakra-ui/react";
import {
    ChevronRightIcon,
    ChevronLeftIcon
} from '@chakra-ui/icons';

function Card() {
    return (
        <div className="Card justify-center">
            <button><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Send email'
                className={"arrow-left"}
                icon={<ChevronLeftIcon />}
            /></button>
            <img src="https://www.looper.com/img/gallery/the-transformation-of-bob-odenkirk-from-childhood-to-better-call-saul/intro-1657305612.jpg" alt="Bob Odenkirk" className={"rounded-3xl object-center scale-50"}/>
            <button><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Send email'
                className={"arrow-right"}
                icon={<ChevronRightIcon />}
            /></button>
        </div>
    );
}

export default Card;