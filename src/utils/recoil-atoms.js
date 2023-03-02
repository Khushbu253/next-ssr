import { atom } from 'recoil'

export const collapsedState = atom({
    key: 'collapsedState',
    default: true,
})

export const menuCollapsedState = atom({
    key: 'menuCollapsedState',
    default: true,
})