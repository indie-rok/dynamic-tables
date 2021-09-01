import React, { useState } from 'react';
import moment from 'moment';

import Rowitem from './RowItem'

import openIcon from '../ui-kit/icons/svg/icon-plus-with-circle.svg';

import { findCurrentStatus } from '../helpers/Row';
import styles from './Row.styles'

export default function Row({ data, setSelectedApplication, setIsModalOpen }) {

    const [isOpen, setIsOpen] = useState(false)

    const onRowClick = () => {
        setIsOpen(!isOpen)
    }

    return <div onClick={onRowClick}>
        <div style={styles.rowContainer}>
            <div style={{ width: '15%' }}>{data.email}</div>
            <div style={{ width: '10%' }}>{findCurrentStatus(data.applications)}</div>
            <div style={{ width: '10%' }}>{data.applications.length}</div>
            <div>{moment(data.profile?.updated).fromNow()}</div>
            <img src={openIcon} alt="open icon" />
        </div>

        <div style={{ display: (isOpen) ? 'block' : 'none' }} onClick={event => event.stopPropagation()}>
            {data.applications.map((application) =>
                <Rowitem
                    key={application.id}
                    application={application}
                    setSelectedApplication={setSelectedApplication}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </div>

    </div>
}

