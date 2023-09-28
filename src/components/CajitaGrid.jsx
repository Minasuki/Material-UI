import { Container, Grid } from "@mui/material";

const CajitaGrid = () => {
    return ( <Container maxWidth={'false'} padding='0'>
        <Grid container spacing={2} sx={{padding:'0'}}>
            <Grid item xs={12} sm={6} md={4} sx={{padding:'0'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad quasi ipsum eum veritatis libero quod natus deserunt? Error nostrum commodi possimus nam magnam repellendus cumque alias consequatur a consequuntur?</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad quasi ipsum eum veritatis libero quod natus deserunt? Error nostrum commodi possimus nam magnam repellendus cumque alias consequatur a consequuntur?</p>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad quasi ipsum eum veritatis libero quod natus deserunt? Error nostrum commodi possimus nam magnam repellendus cumque alias consequatur a consequuntur?</p>
            </Grid>
        </Grid>
    </Container> );
}
 
export default CajitaGrid;