import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react"

export const Skeletons = () => {
    return (
        <Container>
        <Skeleton variant="rounded" width="100%" height={150}/>.
        <Skeleton variant="rounded" width="100%" height={150}/>.
        <Skeleton variant="rounded" width="100%" height={150}/>.
        <Skeleton variant="rounded" width="100%" height={150}/>.   
        </Container>
       
        );  
};