import React from 'react';

import styles from './RowItem.styles'
import { calculateDot } from '../helpers/Row'

export default function RowItem({ application, setSelectedApplication, setIsModalOpen }) {
    return <div style={styles.container} onClick={() => {
        setIsModalOpen(true);
        setSelectedApplication(application);
    }}>
        <p style={{ width: '28%' }}>{application.role.title}</p>
        <h4>
            <span style={styles[calculateDot(application?.new_status?.label)]}></span>
            {application.new_status.label}
        </h4>
    </div>
}