import {Dayjs} from 'dayjs'

export type NoteType = {
    id: string,
    heading: string,
    mainContent: string,
    timeStamp: Dayjs,
    backGroundImage: string
};