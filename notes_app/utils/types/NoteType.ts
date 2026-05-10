import {Dayjs} from 'dayjs'

export type NoteType = {
    id: string,
    heading: string,
    preview: string,
    mainContent: string,
    timeStamp: Dayjs
};