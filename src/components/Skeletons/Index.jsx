import React from "react"
import { Container, Skeleton } from "@mui/material"

export const Skeletons = () => {
    return(
        <Container maxWidth="xl">
            <Skeleton variant="rectangular" width="100%" height={150} sx={{marginBottom: '1em'}} />
            <Skeleton variant="rectangular" width="100%" height={150} sx={{marginBottom: '1em'}} />
            <Skeleton variant="rectangular" width="100%" height={150} sx={{marginBottom: '1em'}} />
            <Skeleton variant="rectangular" width="100%" height={150} sx={{marginBottom: '1em'}} />
            <Skeleton variant="rectangular" width="100%" height={150} sx={{marginBottom: '1em'}} />
        </Container>
    )
}
  