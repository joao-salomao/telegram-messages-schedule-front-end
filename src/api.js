import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

async function getMessages() {
    const resp = await api.get("/messages")
    return resp.data
}

async function getMessage(messageId) {
    const resp = await api.get("/messages/" + messageId)
    return resp.data
}

async function getGroups() {
    const resp = await api.get("/groups")
    return resp.data
}

async function updateMessage(messageId, data) {
    await api.put("/messages/" + messageId, data)
}
async function deleteMessage(id) {
    await api.delete("/messages/" + id)
}

async function createMessage(data) {
    await api.post('/messages', data)
}

export default {
    getGroups,
    getMessage,
    getMessages,
    deleteMessage,
    updateMessage,
    createMessage,
}
