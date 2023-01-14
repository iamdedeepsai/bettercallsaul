import "./Card.css";
import {IconButton} from "@chakra-ui/react";
import {
    ChevronRightIcon,
    ChevronLeftIcon
} from '@chakra-ui/icons';
import ActorView from "./ActorView";
import {useState} from "react";

let i = 0;

function Card() {
    const [waiting, setWaiting] = useState(false);

    const people = ["Saul Goodman", "Mike Ehrmantraut", "Walter White", "Gus Fring"];
    const links = [
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/photo/ogCzjsnEc8bU1qIOc2wufDH9rLnIX9.jpg?q=50&fit=crop&dpr=1.5",
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/photo/lLnNUEdGyGVperLSOpvRVMblVSatBt.jpg?q=50&fit=crop&dpr=1.5",
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/photo/OUQJrSauscBSYNMW0wxAbzW2EQKDnI.jpg?q=50&fit=crop&dpr=1.5",
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/photo/JvrZ5cXHAtORrPqk4aoablHALgpkpQ.jpg?q=50&fit=crop&dpr=1.5"
    ];

    const [name, setName] = useState(people[i]);
    const [link, setLink] = useState(links[i]);

    function increment() {
        if (i === people.length - 1) {
            i = 0;
            setName(people[i]);
            setLink(links[i]);
            return;
        }
        i++;
        setName(people[i]);
        setLink(links[i]);
        console.log(i);
    }

    function decrement() {
        console.log("Decrement", i)
        if (i === 0) {
            i = people.length - 1;
            setName(people[i]);
            setLink(links[i]);
            return;
        }
        i--;
        setName(people[i]);
        setLink(links[i]);
        console.log(i);
    }

    return (
        <div className="Card justify-center flex whitespace-nowrap overflow-auto scrollbar-hide">
            <button onClick={decrement}><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Arrow Left'
                className={"arrow-left right-10"}
                icon={<ChevronLeftIcon />}
            /></button>
            <ActorView source={link} altTitle={name} waiting={waiting} className={"rounded-b-full"}></ActorView>
            <button onClick={increment}><IconButton
                variant={"ghost"}
                colorScheme='teal'
                aria-label='Arrow Right'
                className={"arrow-right left-10"}
                icon={<ChevronRightIcon />}
            /></button>
        </div>
    );
}

export default Card;