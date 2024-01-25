export const getFeedItemsId = (data: any): string => {
    if (!data.userId || !data.entityType || !data.entityId) {
        throw new Error('Missing feedItem data')
    }

    return `${data.userId}/${data.entityType}/${data.entityId}`
}
