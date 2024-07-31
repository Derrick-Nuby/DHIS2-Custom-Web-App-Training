import React from 'react';
import { useConfig } from '@dhis2/app-runtime';

const ExampleConfig: React.FC = () => {
    const { baseUrl, apiVersion, } = useConfig();


    return (
        <>
            <span>
                <strong>Base URL</strong> : {baseUrl}
            </span>
            <span>
                <strong>API Version</strong> : {apiVersion}
            </span>
        </>
    );
};

export default ExampleConfig;
