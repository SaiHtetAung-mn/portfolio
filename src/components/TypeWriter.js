import React from "react";

function TypeWriter({text="", delayInMS=100}) {
    const [curText, setCurText] = React.useState("");
    const [curIndex, setCurIndex] = React.useState(0);

    React.useEffect(() => {
        if(curIndex == text.length) return;

        const timer = setTimeout(() => {
            setCurText(prevText => prevText+text[curIndex]);
            setCurIndex(prevIndex => prevIndex+1);
        }, delayInMS);

        return () => clearTimeout(timer);
    }, [curText]);

    return (
        <>
            { curText } <span className={`${curIndex < text.length && 'type-writer'}`}></span>
        </>
    )
}

export default TypeWriter;