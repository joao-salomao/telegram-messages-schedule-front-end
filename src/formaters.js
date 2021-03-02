function formatDate(value) {
    let values = value.split(" ")

    const time = values[1]

    let data = values[0].split('-')
    const year = data[0]
    const month = data[1]
    const day = data[2]

    return `${day}/${month}/${year} ${time}`;
}

export {
    formatDate
}
