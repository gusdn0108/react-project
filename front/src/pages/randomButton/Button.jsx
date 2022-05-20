import React, { useState } from "react";
import Stack from "@mui/material/Stack";
// import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import aImg from "../../img/a.jpg";
import bImg from "../../img/b.jpg";
import cImg from "../../img/c.jpg";
import dImg from "../../img/d.jpg";

const outside = [aImg, bImg];
const inside = [cImg, dImg];
const all = [...outside, ...inside];

export default function Create() {
    const [selected, setSelected] = useState("all");
    const [randomImg, setRandomimg] = useState();
    //   let randomImg = aImg;
    const clickSearch = () => {
        if (selected === "all") {
            const idx = Math.floor(Math.random() * 4);
            setRandomimg(all[idx]);
        }
        if (selected === "outside") {
            const idx = Math.floor(Math.random() * 2);
            setRandomimg(outside[idx]);
        }
        if (selected === "inside") {
            const idx = Math.floor(Math.random() * 2);
            setRandomimg(inside[idx]);
        }
    };

    const clickAll = () => {
        setSelected("all");
    };

    const clickOutside = () => {
        setSelected("outside");
    };

    const clickInside = () => {
        setSelected("inside");
    };

    return (
        <div>
            {selected}
            <Stack spacing={5} direction="row">
                <Typography componet="h2" variant="h5" gutterBottom></Typography>
                <Button onClick={clickAll} variant="outlined" size="large" color="secondary" style={{ width: "300px" }}>
                    전체
                </Button>
                <Button onClick={clickOutside} variant="contained" size="large" color="secondary" style={{ width: "300px" }}>
                    야외
                </Button>
                <Button onClick={clickInside} variant="contained" size="large" color="secondary" style={{ width: "300px" }}>
                    실내
                </Button>
            </Stack>
            <Stack>{randomImg ? <img src={randomImg} style={{ width: 100, height: 100 }}></img> : <div style={{ width: 150, height: 150, backgroundColor: "gray", position: "absolute", left: " 50%", transform: "translateX(" - (50 % ")") }}></div>}</Stack>
            <Stack spacing={5} direction="row">
                <Button onClick={clickSearch} variant="outlined" size="large" color="secondary" style={{ width: "300px" }}>
                    검색
                </Button>
            </Stack>
        </div>
    );
}
