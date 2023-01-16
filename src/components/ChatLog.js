import {useState} from "react";
import {Card, CardBody, Text} from "@chakra-ui/react";
let nextId = 0;

function ChatLog(props) {

    return (
        <div className={"bg-slate-700"}>
            {props.chats.map(el => (
                <Card className={"mb-3"}>
                    <CardBody className={"rounded-lg"}>
                        <Text>{el[1]}</Text>
                    </CardBody>
                    <CardBody>
                        <Text>{el[0]}</Text>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}

export default ChatLog;