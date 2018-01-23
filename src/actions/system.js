export const actions = {
    TOGGLE_SITE_NAV: 'TOGGLE_SITE_NAV',
    TOGGLE_TIMELINE_FUTURE: 'TOGGLE_TIMELINE_FUTURE'
}

export const toggleSiteNav = () => ({
    type: actions.TOGGLE_SITE_NAV
})

export const toggleTimelineFuture = () => ({
    type: actions.TOGGLE_TIMELINE_FUTURE
})

export default actions