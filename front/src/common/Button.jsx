import React, { useState } from 'react';
import { Button } from 'primereact/button';
import '././css/Button.css';

const RandomButton = () => {

    const [loading1, setLoading1] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 500);
    }

    return (
        <div className="button-demo">
            <div className="card">
                <h5>Random Button</h5>
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
            </div>
        </div>
    )
}

export default RandomButton