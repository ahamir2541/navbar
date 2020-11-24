import React from 'react';
import { Button, Container } from '@material-ui/core'

const ButtonComponent = () => {
    return (
        <Container>
            <Button
                disabled
                variant='contained'
                color='primary' >
                hello material
            </Button>
            <Button
                fullWidth
                variant='contained'
                color='secondary' >
                hello material
            </Button>
            <Button
                size='small'
                disableElevation
                variant='contained'
                color='primary' >
                hello material
            </Button>
            <Button
                disableElevation
                variant='secondary'
            >
                hello material
            </Button>
            <Button
                disableElevation
                color='primary' >
                hello material
            </Button>
            <Button
                variant='outlined'
                color='primary' >
                hello material
            </Button>
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
            </label>
        </Container>
    );
};

export default ButtonComponent;