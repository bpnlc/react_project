import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor: '#fff000'
    }
}))


export default function PageHeader(props) {
    const classes = useStyles();

    const { title, subTitle, icon} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div>
                <Card>
                    {icon}
                </Card>
                <div>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}
