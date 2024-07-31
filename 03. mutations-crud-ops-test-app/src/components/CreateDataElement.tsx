import React, { useState } from 'react';
import { useDataMutation } from '@dhis2/app-runtime';
import { Button, InputField } from '@dhis2/ui';

const mutation = {
    resource: 'dataElements',
    type: 'create',
    data: ({ name, shortName }: { name: string; shortName: string; }) => ({
        name,
        shortName,
        domainType: "TRACKER",
        valueType: "TEXT",
        aggregationType: "NONE",
    }),
};

interface CreateDataElementProps {
    refetch: () => void;
}

const CreateDataElement: React.FC<CreateDataElementProps> = ({ refetch }) => {
    const [name, setName] = useState('');
    const [shortName, setShortName] = useState('');
    const [mutate, { loading }] = useDataMutation(mutation);

    const onClick = async () => {
        console.log(name, shortName);
        await mutate({ name, shortName });
        refetch();
        setName('');
        setShortName('');
        console.log(name, shortName);
    };

    return (
        <div>
            <InputField
                label="Name"
                value={name}
                onChange={(e) => setName(e.value)}
                disabled={loading}
                placeholder="Name of data element"
            />
            <InputField
                label="Short Name"
                value={shortName}
                onChange={(e) => setShortName(e.value)}
                disabled={loading}
                placeholder="short name of data element"
            />

            <InputField
                value="TRACKER"
                label="domainType"
                readOnly
            />

            <InputField
                value="TEXT"
                label="valueType"
                readOnly
            />

            <InputField
                value="NONE"
                label="aggregationType"
                readOnly
            />


            <Button primary onClick={onClick} disabled={loading}>
                + New Data Element
            </Button>
        </div>
    );
};

export default CreateDataElement;
