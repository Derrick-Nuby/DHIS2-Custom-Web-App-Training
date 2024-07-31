import React from 'react';
import moment from 'moment';
import { useDataQuery, useTimeZoneConversion } from '@dhis2/app-runtime';

const query = {
    me: {
        resource: 'me',
    },
};

const LastLoginMessage = () => {
    const { error, data } = useDataQuery(query);
    const { fromServerDate } = useTimeZoneConversion();
    const lastLoginClient = fromServerDate(data?.me?.userCredentials?.lastLogin);
    return (
        <div>
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && lastLoginClient && (
                <span>
                    You last logged in: {moment(lastLoginClient).fromNow()}
                </span>
            )}
        </div>
    );
};


export default LastLoginMessage;