import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default ({ muscles, category, onSelect }) => {

    const index = category ? muscles.findIndex(group => group === category) + 1: 0;

    const onIndexSelect = (e,index) =>
        onSelect(index === 0 ? '': muscles[index - 1])

    return <Paper>
        <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            onChange={onIndexSelect}
            centered
        >
            <Tab label="All" />
            {muscles.map((group, i) =>
                <Tab key={i} label={group} />
            )}

        </Tabs>
    </Paper>
}

