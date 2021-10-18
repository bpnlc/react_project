import PeopleOutline from '@material-ui/icons/PeopleOutline'
import React from 'react'
import PageHeader from '../../components/PageHeader'

export default function Employees() {
    return (
        <div>
            <PageHeader 
                title="employee details"
                subTitle="...."
                icon={<PeopleOutline fontSize="large" />}

            />
        </div>
    )
}
