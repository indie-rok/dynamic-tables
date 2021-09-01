export const STATUS_ORDER = [
    'Archived',
    'Draft',
    'Resume review',
    'Phone screen invited',
    'Hiring pool',
    'On site invited',
    'Hired',
]

export const findCurrentStatus = (applications) => {

    if (!applications) {
        return ''
    }

    if (applications.length === 1) {
        return applications[0].new_status.label;
    }

    let finalStatusIndex = STATUS_ORDER.indexOf(applications[0].new_status.label);

    for (let i = 1; i < applications.length; i++) {
        let applicationIndex = STATUS_ORDER.indexOf(applications[i].new_status.label)
        if (applicationIndex > finalStatusIndex) {
            finalStatusIndex = applicationIndex
        }
    }

    return STATUS_ORDER[finalStatusIndex]

}

export const calculateDot = (status) => {
    if (status === "Archived") return 'redDot'
    if (status === "Draft") return 'yellowDot'

    return 'greenDot'
}