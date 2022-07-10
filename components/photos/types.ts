export interface Photo {
  path: string,
  height: number
  orientation: number
  type: string
  width: number
}

export interface Photos {
  photos: Array<Photo>,
}
